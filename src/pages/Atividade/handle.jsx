import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';

// Para ver há quanto tempo foi uma atividade
const getTimeSince = (date) => {
  const eventDate = new Date(date);
  const now = new Date();
  const difference = differenceInCalendarDays(now, eventDate);
  return difference === 0 ? 'hoje' : `${difference}d`; // Corrigido para usar template string
};

export const fetchUserDetails = async (user, setFriends) => {
  try {
    const userDetailsResponse = await axios.get(`https://aratu-api.fly.dev/usuarios/${user.id}/expand`); // Corrigido para usar template string
    const friendsIds = new Set(userDetailsResponse.data.amigos.map((friend) => String(friend.id)));
    setFriends(friendsIds);
  } catch (error) {
    console.error('Erro ao buscar detalhes do usuário:', error);
  }
};

export const fetchUsers = async (query, user, friends, setUsers, img) => {
  if (!query.trim()) {
    console.log('Query vazia, requisição não realizada.');
    return;
  }
  try {
    const usersResponse = await axios.get(`https://aratu-api.fly.dev/usuarios/buscar/${query}`); // Corrigido para usar template string
    const transformedAndFilteredUsers = usersResponse.data
      .filter((u) => String(u.id) !== String(user.id))
      .map((u) => ({
        id: String(u.id),
        name: u.nome,
        avatar: u.foto_perfil && u.foto_perfil !== '' ? { uri: u.foto_perfil } : img,
        following: friends.has(String(u.id)),
      }));
    setUsers(transformedAndFilteredUsers);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
  }
};

export const toggleFollow = async (userId, user, users, setUsers, setFriends, friends) => {
  const userToToggle = users.find((user) => user.id === userId);

  try {
    const method = userToToggle.following ? 'DELETE' : 'POST';
    await axios({ method, url: `https://aratu-api.fly.dev/usuarios/${user.id}/amigos/${userId}` }); // Corrigido para usar template string

    setUsers(users.map((user) => {
      if (user.id === userId) {
        return { ...user, following: !user.following };
      }
      return user;
    }));

    if (userToToggle.following) {
      setFriends(new Set([...friends].filter(id => id !== userId)));
    } else {
      setFriends(new Set(friends.add(userId)));
    }
  } catch (error) {
    console.error(`Erro ao ${userToToggle.following ? 'deixar de ' : ''}seguir o usuário:`, error);
  }
};

export const fetchActivities = async (user, setActivities) => {
  const img = require('../../assets/foto2Perfil.png');
  if (user && user.id) {
    try {
      const responseAmigos = await axios.get(`https://aratu-api.fly.dev/usuarios/${user.id}/expand`); // Corrigido para usar template string
      const dataAmigos = await responseAmigos.data;
  
      let allActivities = [];
  
      for (const amigo of dataAmigos.amigos) {
        const responseAmigo = await axios.get(`https://aratu-api.fly.dev/usuarios/${amigo.id}/expand`); // Corrigido para usar template string
        const dataAmigo = await responseAmigo.data;
  
        const eventsActivities = dataAmigo.eventos_fui.map(evento => ({
          id: `event-${evento.id}`, // Corrigido para usar template string e correção de sintaxe
          user: dataAmigo.nome,
          action: `Foi para ${evento.nome}`, // Corrigido para usar template string
          time: getTimeSince(evento.data_hora),
          avatar: dataAmigo.foto_perfil && dataAmigo.foto_perfil !== '' ? { uri: dataAmigo.foto_perfil } : img,
        }));
  
        allActivities.push(...eventsActivities);
  
        const ratingsActivities = dataAmigo.eventos_fui.map(evento => ({
          id: `rating-${evento.id}`, // Corrigido para usar template string e correção de sintaxe
          user: dataAmigo.nome,
          action: `Avaliou ${evento.nome} com ${evento.avaliacao} estrelas`, // Corrigido para usar template string
          time: getTimeSince(evento.data_hora),
          avatar: dataAmigo.foto_perfil && dataAmigo.foto_perfil !== '' ? { uri: dataAmigo.foto_perfil } : img,
        }));
  
        allActivities.push(...ratingsActivities);
        const eventsWantToGoActivities = dataAmigo.eventos_quero_ir.map(evento => ({
          id: `event-want-${evento.id}`, // Corrigido para usar template string e correção de sintaxe
          user: dataAmigo.nome,
          action: `Quer ir para ${evento.nome}`, // Corrigido para usar template string
          time: getTimeSince(evento.data_hora),
          avatar: dataAmigo.foto_perfil && dataAmigo.foto_perfil !== '' ? { uri: dataAmigo.foto_perfil } : img,
        }));
      
      allActivities.push(...eventsWantToGoActivities);
      }
       
      // Ordena as atividades do mais novo ao mais antigo
      allActivities.sort((a, b) => {
        const daysA = parseInt(a.time.match(/\d+/)[0], 10);
        const daysB = parseInt(b.time.match(/\d+/)[0], 10);
      
        return daysA - daysB;
      });
      
      setActivities(allActivities);
    } catch (error) {
      console.error('Erro ao buscar atividades:', error);
    }
  }
};

// handle.js
import axios from 'axios';
import { differenceInCalendarDays } from 'date-fns';

  // Para ve ha quanto tempo foi uma atividade
  const getTimeSince = (date) => {
    const eventDate = new Date(date);
    const now = new Date();
    const difference = differenceInCalendarDays(now, eventDate);
    return difference === 0 ? 'hoje' : `${difference}d`;
  };

export const fetchUserDetails = async (user, setFriends) => {
  try {
    const userDetailsResponse = await axios.get(`https://aratu-api.fly.dev/usuarios/${user.id}/expand`);
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
    const usersResponse = await axios.get(`https://aratu-api.fly.dev/usuarios/buscar/${query}`);
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
    await axios({ method, url: `https://aratu-api.fly.dev/usuarios/${user.id}/amigos/${userId}` });

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
    if (user && user.id) {
      try {
        const responseAmigos = await axios.get(`https://aratu-api.fly.dev/usuarios/${user.id}/expand`);
        const dataAmigos = await responseAmigos.data;
    
        let allActivities = [];
    
        for (const amigo of dataAmigos.amigos) {
          const responseAmigo = await axios.get(`https://aratu-api.fly.dev/usuarios/${amigo.id}/expand`);
          const dataAmigo = await responseAmigo.data;
    
          const eventsActivities = dataAmigo.eventos_fui.map(evento => ({
            id: `event-${evento.id}`,
            user: dataAmigo.nome,
            action: `Foi para ${evento.nome}`,
            time: getTimeSince(evento.data_hora),
            avatar: { uri: dataAmigo.foto_perfil },
          }));
    
          allActivities.push(...eventsActivities);
    
          const ratingsActivities = dataAmigo.avaliacoes.map(avaliacao => ({
            id: `rating-${avaliacao.id}`,
            user: dataAmigo.nome,
            action: `Avaliou ${avaliacao.nome} com ${avaliacao.estrelas} estrelas`,
            time: getTimeSince(avaliacao.data_hora),
            avatar: { uri: dataAmigo.foto_perfil },
          }));
    
          allActivities.push(...ratingsActivities);
        }
    
        setActivities(allActivities);
      } catch (error) {
        console.error('Erro ao buscar atividades:', error);
      }
    }
  };

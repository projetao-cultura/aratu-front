import axios from 'axios';
import { Alert } from 'react-native';

const BASE_URL = 'https://aratu-api.fly.dev';
//const { user, setUser } = useUser();

export const getEventosEAmigos = async (usuarioId) => {
  try {
    const response = await axios.get(`${BASE_URL}/usuarios/${usuarioId}/expand`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter informações expandidas do usuário:', error);
    throw error;
  }
};

export const putAlterarPerfil = async (usuarioId, newData) => {
  try {

    const response = await axios.put(`${BASE_URL}/usuarios/${usuarioId}`, {
      nome: newData.nome,
      email: newData.email,
      biografia: newData.biografia,
      telefone: newData.telefone,
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar informações expandidas do usuário:', error);
    throw error;
  }
};


export const putAlterarSenha = async (usuarioId, senhaAtual, novaSenha) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/usuarios/${usuarioId}/alterar_senha`,
      null,
      {
        params: {
          senha_antiga: senhaAtual,
          nova_senha: novaSenha,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar senha:', error);
    if (error.response) {
      console.error('Resposta do servidor:', error.response.data);
    }
    throw error;
  }
};

export const handleSairDaConta = (setUser, navigation) => {

  Alert.alert(
    'Sair da Conta',
    'Tem certeza que deseja sair da conta?',
    [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          // Limpa o contexto (exemplo assumindo que o setUser é uma função que limpa o contexto)
          setUser({
            id: 0,
            nome: '',
            email: '',
            numero: '',
            senha: '',
            categorias: {},
          });

          navigation.navigate('Login');
        },
      },
    ],
    { cancelable: false }
  );
};

export const toggleFollow = async (userInfo, friendId) => {
  console.log("toggletofollow")
  console.log(userInfo)
  console.log("id do amigo:" + friendId)
  try {
    if (userInfo.amigos){
      console.log("entrou")
      if (userInfo.amigos.some(seguido => seguido.id === friendId)) {
        console.log("fazendo o delete")
        await axios.delete(`${BASE_URL}/usuarios/${userInfo.id}/amigos/${friendId}`)
      }else{
        console.log("fazendo o post")
        await axios.post(`${BASE_URL}/usuarios/${userInfo.id}/amigos/${friendId}`)
      }
    }else{
      console.log("fazendo o post com zero amigos")
      await axios.post(`${BASE_URL}/usuarios/${userInfo.id}/amigos/${friendId}`)
    }
  } catch (error) {
    console.error(`Erro ao ${following ? 'deixar de ' : ''}seguir o usuário:`, error);
  }
};

export const estouSeguindoFulano = async (userInfo, friendId) => {
  console.log("estouSeguindoFulano")
  console.log(userInfo)
  console.log("id do amigo:" + friendId)
  try {
    if (userInfo.amigos){
      console.log("entrou")
      if (userInfo.amigos.some(seguido => seguido.id === friendId)) {
        console.log("segue o amigo entrou entrou")
        return true;
      }
    }
    console.log("nao entrou")
    return false;
  } catch (error) {
    console.error(Erro, error);
  }
};

export const acharAvaliacaoDoEvento = async (avaliacoes, eventoId) => {
  console.log("acharavaliacoesdoevento");
  console.log(avaliacoes);
  console.log(eventoId);
  if (avaliacoes.length > 0) {
    console.log("tem avaliacoes");
    const avaliacao = avaliacoes.find(
      (avaliacao) => avaliacao.evento_id === eventoId
    );
    if (avaliacao) {
      console.log("achou avaliacao" + avaliacao.avaliacao + "o evento é o evento" + avaliacao.evento_id);
      console.log(avaliacao.avaliacao);
     return parseInt(avaliacao.avaliacao);
    }
  }
  console.log("nao achou avaliacao");
  return null;
};
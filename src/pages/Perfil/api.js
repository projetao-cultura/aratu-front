import axios from 'axios';

const BASE_URL = 'https://aratu-api.fly.dev';

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


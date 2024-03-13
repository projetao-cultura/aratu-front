import axios from 'axios';

const BASE_URL = 'https://aratu-api.fly.dev';

export const getEventosPorInteresse = async (usuarioId) => {
  try {
    const response = await axios.get(`${BASE_URL}/usuarios/eventos-de-interesse/${usuarioId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos por interesse:', error);
    throw error;
  }
};

export const getEventosProvisorio = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/eventos/feed-provisorio`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos:', error);
    throw error;
  }
};

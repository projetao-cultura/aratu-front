import api from '../../services/APIServices';

export const getEventosPopulares = async () => {
  try {
    const response = await api.get(`/eventos/feed/populares`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos por interesse:', error);
    throw error;
  }
};

export const getEventosRecomendados = async (userId) => {
  try {
    const response = await api.get(`/eventos/feed/recomendados-para-voce/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos:', error);
    throw error;
  }};

export const getEventosAmigos = async (userId) => {
  try {
    const response = await api.get(`/eventos/feed/popular-entre-amigos/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos:', error);
    throw error;
  }};

export const getEventosCategoria = async () => {
  try {
    const response = await api.get(`/eventos/feed/categoria_aleatoria`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos:', error);
    throw error;
  }};

export const getUserInfo = async (userId) => {
  try {
    const response = await api.get(`/usuarios/${userId}/expand`);
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos:', error);
    throw error;
  }};
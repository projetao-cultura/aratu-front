import api from '../../services/APIServices';

export const getEvento = async (eventId, userId) => {
  try {
    const response = await api.get(`/eventos/${eventId}/expand/${userId}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao obter eventos por interesse:', error);
    throw error;
  }
};

export const getEventosParecidos = async (categoria) => {
    try {
      const response = await api.get(`/eventos/categories/${categoria}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao obter eventos:', error);
      throw error;
    }};

export const setQueroIrButtom = async (buttom, eventId, userId) => { 
  try {
    if (!buttom) {
      await api.post(`/usuarios/${userId}/quero_ir/${eventId}`); // seta estado como true
    }
    else{
      await api.delete(`/usuarios/${userId}/quero_ir/${eventId}`); // seta estado como false
    }
  } catch (error) {
    console.error('Erro ao setar quero ir:', error);
    throw error;
  }};

  export const setJaFuiButtom = async (buttom, eventId, userId) => {
    try {
      if (!buttom) {
        await api.post(`/usuarios/${userId}/fui/${eventId}`); // seta estado como true
      }
      else{
        await api.delete(`/usuarios/${userId}/fui/${eventId}`); // seta estado como false
      }
    } catch (error) {
      console.error('Erro ao setar quero ir:', error);
      throw error;
    }};
  
    export const setAvaliacao = async (userAvaliacao, eventId, userId) => {
      try {
        console.log(userAvaliacao, eventId, userId)
        const response = await api.post(`/usuarios/${userId}/avaliar-evento/${eventId}`, {}, { params: {avaliacao: userAvaliacao}});
        return response.data;
      } catch (error) {
        console.error('Erro ao obter eventos por interesse:', error);
        throw error;
      }
    };
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

export const setQueroIrButtom = async (buttom, eventId, userId) => { // buttom: true
  try {
    if (!buttom) {
      const response = await api.post(`/usuarios/${userId}/fui/${eventId}`); // seta estado como true
      console.log(response.data)
      console.log('quero_ir_state setando como true')
    }
    else{
      const response = await api.delete(`/usuarios/${userId}/fui/${eventId}`); // seta estado como false
      console.log(response.data)
      console.log('quero_ir_state setando como false')
    }
  } catch (error) {
    console.log(buttom, eventId, userId)
    console.log(error.data)
    console.error('Erro ao setar quero ir:', error);
    throw error;
  }};
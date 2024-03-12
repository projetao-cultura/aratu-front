import api from '../../services/APIServices';

export const getEvento = async (eventId) => {
  try {
    const response = await api.get(`/eventos/${eventId}/expand`);
    console.log(response.data.usuarios_que_querem_ir)
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
  
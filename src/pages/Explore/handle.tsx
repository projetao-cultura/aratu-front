import { Alert } from 'react-native';
import api from '../../services/APIServices';
const qs = require('qs');
import { jwtDecode } from 'jwt-decode';
import "core-js/stable/atob";

export const handleExplorer = async (nome: string, categoria: string) => {
    try {
        // Construa a string de parâmetros de consulta usando o módulo qs
        const queryParams = qs.stringify({ nome, categoria});
    
        // Faça a chamada para o endpoint com os parâmetros de consulta
        const response = await api.get(`/eventos/search/nome-categoria/?${queryParams}`);

        // Verifique se a resposta é bem-sucedida e se há dados retornados
        if (response && response.data) {
            // Verifica se response.data é uma matriz vazia
            if (Array.isArray(response.data) && response.data.length === 0) {
                // Exibe uma mensagem de alerta se não houver dados retornados
                Alert.alert('Nenhum evento encontrado.');
            }

            return response; // Retorne os dados recebidos
        } else {
            // Exiba uma mensagem de erro se não houver dados retornados
            Alert.alert('Nenhum dado retornado do servidor.');
        }
    } catch (error) {
        // Lida com os erros da solicitação
        console.error('Erro ao fazer login:', error);

        // Exibe uma mensagem de erro para o usuário
        Alert.alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
};

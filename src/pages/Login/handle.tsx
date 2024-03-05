// handle.ts


import { Alert } from 'react-native';
import api from '../../services/APIServices';


export const handleLogin = async (email: string, senha: string, navigation: any) => {
    try {
        const response = await api.post('/usuarios/token', {
            email: email,
            senha: senha,
        });


        // Lógica para verificar se o login foi bem-sucedido
        if (response.data.token) {
            // Salve o token de autenticação onde for necessário (por exemplo, AsyncStorage)
            // Redirecione o usuário para a tela desejada após o login bem-sucedido
            navigation.navigate('Feed');
        } else {
            // Exiba uma mensagem de erro se o login falhar
            Alert.alert('Erro ao fazer login. Verifique suas credenciais.');
        }
    } catch (error) {
        // Lida com os erros da solicitação
        console.error('Erro ao fazer login:', error);


        // Exibe uma mensagem de erro para o usuário
        Alert.alert('Erro ao fazer login. Tente novamente mais tarde.');
    }
};

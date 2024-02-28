import { Alert } from 'react-native';
import api from '../../services/APIServices';

export const handleCadastro = async (nome: string, email: string, numero: string, senha: string, navigation: any) => {
    try {
        const response = await api.post('/usuarios/', {
            nome: nome,
            email: email,
            biografia: "string",
            telefone: numero,
            ativo: true,
            foto_perfil: "https://i.imgur.com/JUf7jx3.jpeg",
            senha: senha,
            categorias_interesse: []
        });


        // Exibe uma mensagem de sucesso para o usuário
        Alert.alert('Usuário cadastrado com sucesso!');
        
        // Redireciona o usuário para a tela de interesse
        navigation.navigate('Interesse');
    } catch (error) {
        // Lida com os erros da solicitação
        console.error('Erro ao cadastrar usuário:', error);

        // Exibe uma mensagem de erro para o usuário
        Alert.alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
    }
};

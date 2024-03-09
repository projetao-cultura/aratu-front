// Cadastro/handle.tsx
import { Alert } from 'react-native';
import api from '../../services/APIServices';
import { useUser } from '../../UserContext';

export const handleCadastro = async (navigation: any) => {
  const { user } = useUser();

  try {
    const response = await api.post('/usuarios/', {
      nome: user.nome,
      email: user.email,
      biografia: "string",
      telefone: user.numero,
      ativo: true,
      foto_perfil: "https://i.imgur.com/JUf7jx3.jpeg",
      senha: user.senha,
      categorias_interesse: user.categorias
    });

    // Exibe uma mensagem de sucesso para o usuário
    Alert.alert('Usuário cadastrado com sucesso!');

    // Redireciona o usuário para a tela de Feed
    navigation.navigate('Feed');
  } catch (error) {
    // Lida com os erros da solicitação
    console.error('Erro ao cadastrar usuário:', error);

    // Exibe uma mensagem de erro para o usuário
    Alert.alert('Erro ao cadastrar usuário. Tente novamente mais tarde.');
  }
};

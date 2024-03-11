import React, { useState, useEffect } from 'react';
import {
  View, Text, FlatList, StyleSheet, Image,
  TouchableOpacity, SafeAreaView, TextInput
} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../UserContext';


const ActivityScreen = () => {
  const { user } = useUser();
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const img = require('../../assets/foto2Perfil.png');
  const [friends, setFriends] = useState(new Set()); 


  useEffect(() => {
    // Define a função que busca detalhes do usuário logado, incluindo amigos
    const fetchUserDetails = async () => {
      try {
        const userDetailsResponse = await axios.get(`https://aratu-api.fly.dev/usuarios/${user.id}/expand`);
        const friendsIds = new Set(userDetailsResponse.data.amigos.map((friend) => String(friend.id)));
        setFriends(friendsIds); // setFriends é um novo estado que você precisa criar para armazenar os IDs dos amigos
      } catch (error) {
        console.error('Erro ao buscar detalhes do usuário:', error);
      }
    };
  
    fetchUserDetails(); // Chama a função definida acima
  }, [user.id]); // Dependência para que seja executado somente quando o usuário logado mudar
  
  const fetchUsers = async (query) => {
    if (!query.trim()) {
      console.log('Query vazia, requisição não realizada.');
      return;
    }
    try {
      const usersResponse = await axios.get(`https://aratu-api.fly.dev/usuarios/buscar/${query}`);
      const transformedAndFilteredUsers = usersResponse.data
        .filter((u) => String(u.id) !== String(user.id)) // Filtra o usuário logado
        .map((u) => ({
          id: String(u.id),
          name: u.nome,
          avatar: u.foto_perfil && u.foto_perfil !== '' ? { uri: u.foto_perfil } : img,
          following: friends.has(String(u.id)), // Usa 'friends' para determinar se 'following' deve ser true
        }));
      setUsers(transformedAndFilteredUsers); // Atualiza o estado dos usuários com a nova lista, excluindo o usuário logado
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };
  

  // Função para manipular o estado de seguir
  const toggleFollow = async (userId) => {
    // Encontra o usuário no estado
    const userToToggle = users.find((user) => user.id === userId);
  
    // Se o usuário já estiver sendo seguido, envia uma requisição para deixar de seguir
    // Caso contrário, envia uma requisição para seguir
    const method = 'POST';//const method = userToToggle.following ? 'DELETE' : 'POST';
    const url = `https://aratu-api.fly.dev/usuarios/${user.id}/amigos/${userId}`;
  
    try {
      await axios({ method, url });
      // Se a requisição for bem-sucedida, atualiza o estado
      setUsers(users.map((user) => {
        if (user.id === userId) {
          return { ...user, following: !user.following };
        }
        return user;
      }));
    } catch (error) {
      console.error(`Erro ao ${userToToggle.following ? 'deixar de ' : ''}seguir o usuário:`, error);
    }
  };
  
  const renderUser = ({ item }) => {
    // Estilos dinâmicos
    const followButtonStyles = [styles.followButton, item.following ? styles.followingButton : {}];
    const followButtonTextStyles = [styles.followButtonText, item.following ? styles.followingButtonText : {}];
  
    return (
      <View style={styles.userItem}>
        <Image source={item.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{item.name}</Text>
        <TouchableOpacity
          style={followButtonStyles}
          onPress={() => toggleFollow(item.id)}
        >
          <Text style={followButtonTextStyles}>{item.following ? 'seguindo' : 'seguir'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Atividades</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={(text) => {
              setSearchQuery(text);
              fetchUsers(text);
            }}
            placeholder="Buscar usuários"
          />
          <TouchableOpacity>
            <Icon name="search-outline" size={20} color={'black'} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        style={styles.usersList}
      />

      <Navbar selectedScreen={'Atividade'} navigation={navigation} />
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF7EB', // Ajuste para a cor de fundo correspondente
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        margin: 10,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      searchInput: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        paddingVertical: 5, // Ajuste a altura conforme necessário
        fontSize: 16, // Ajuste o tamanho da fonte conforme necessário
      },
      header: {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        backgroundColor: '#DB9F36', // Ajuste para a cor de fundo do cabeçalho correspondente
      },
      exploreRectangle: {
        justifyContent:'center',
        marginTop: 8,
        backgroundColor: '#FFF',
        width: '80%',
        borderRadius: 12,
        height: 30,
        backgroundColor: '#FFF7EB',
      },
      headerText: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
      },
      searchIcon: {
        marginLeft: 6
      },
  usersList: {
    backgroundColor: '#E5E5E5',
  },
  userItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFC690',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    flex: 1,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  followButtonText: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  followingButtonText: {
    color: '#FFF',
  },
  followingButton: {
    backgroundColor: '#086788',
    borderColor: '#FFF',

  },
  followButton: {
    backgroundColor: '#A41623',
    padding: 8,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#FFF',
  },

});

export default ActivityScreen;

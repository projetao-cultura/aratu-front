import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native'; 

const ActivityScreen = () => {

  const navigation = useNavigation();

    const img  = require('../../assets/fotoPerfil.png') 

    const [users, setUsers] = useState([
      { id: '1', name: 'Rodrigo', avatar: img, following: true },
      { id: '2', name: 'Thiago', avatar: img, following: true },
      { id: '3', name: 'João', avatar: img, following: false },
      { id: '4', name: 'Mônica', avatar: img, following: false },
      { id: '5', name: 'Giovanna', avatar: img, following: false },
      // ... outros usuários
    ]);
  
    // Função para manipular o estado de seguir
    const toggleFollow = (userId) => {
      const newUsers = users.map((user) => {
        if (user.id === userId) {
          return { ...user, following: !user.following };
        }
        return user;
      });
      setUsers(newUsers);
    };

    const [searchQuery, setSearchQuery] = useState('');

    // Função para filtrar usuários com base na pesquisa
    const filterUsers = (query) => {
        if (!query) {
        return users; // Se não houver consulta, retorne a lista inteira
        }
        return users.filter((user) =>
        user.name.toLowerCase().includes(query.toLowerCase())
        );
    };
  
    const renderUser = ({ item }) => {
      // Definindo estilos dinamicamente
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
            onChangeText={(text) => setSearchQuery(text)}
          />
            <TouchableOpacity >
              <Icon name="search-outline" size={20} color={'black'} style={styles.searchIcon} />
            </TouchableOpacity>
        </View>
        </View>

        <FlatList
            data={filterUsers(searchQuery)}
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

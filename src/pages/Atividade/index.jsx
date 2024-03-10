import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
//import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';

import { useNavigation } from '@react-navigation/native'; 

const ActivityScreen = () => {

  const navigation = useNavigation();
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    if (isSearchFocused) {
      // Navegue para a tela de pesquisa e depois defina isSearchFocused de volta para false
      navigation.navigate('Pesquisa');
      setIsSearchFocused(false);
    }
  }, [isSearchFocused, navigation]);


  const img  = require('../../assets/fotoPerfil.png') 

  const activities = [
    {
      id: '1',
      user: 'Alex',
      action: 'avaliou Quinta do Galo 2024 com 1,5 estrelas',
      time: '1d',
      avatar: img, 
    },
    {
      id: '2',
      user: 'Alex',
      action: 'foi para Quinta do Galo 2024',
      time: '1d',
      avatar: img, 
    },
    // ... outros objetos de atividades
  ];

  const renderActivity = ({ item }) => (
    <View style={styles.activityItem}>
      <Image source={item.avatar } style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.user}</Text>
        <Text style={styles.action}>{item.action}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerText}>Atividades</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onFocus={() => setIsSearchFocused(true)} // Quando o TextInput é focado, setIsSearchFocused é chamado com true

          //value={searchQuery}
          //onChangeText={setSearchQuery}
          //onSubmitEditing={handleSearch}
        />
          <TouchableOpacity >
            <Icon name="search-outline" size={20} color={'black'} style={styles.searchIcon} />
          </TouchableOpacity> 
      </View>
      </View>
      <FlatList
        data={activities}
        renderItem={renderActivity}
        keyExtractor={item => item.id}
        style={styles.activitiesList}
      />
      

      <Navbar selectedScreen={'Atividade'} navigation={navigation} />
      {/* Adicionar aqui os botões de like e comment se necessário */}
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
  activitiesList: {
    backgroundColor: '#E5E5E5', // Ajuste para a cor de fundo da lista correspondente
  },
  activityItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFC690', // Ajuste para a cor da borda correspondente
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
  },
  action: {
    
  },
  time: {
    color: '#555',
  },
 
});

export default ActivityScreen;
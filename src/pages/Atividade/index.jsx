import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../UserContext';
import { fetchUserDetails, fetchUsers, toggleFollow, fetchActivities } from './handle'; // Certifique-se de que o caminho está correto

const ActivityScreen = () => {
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const img = require('../../assets/foto2Perfil.png');
  const [friends, setFriends] = useState(new Set());
  const navigation = useNavigation();
  const { user } = useUser();
  const [isSearchMode, setIsSearchMode] = useState(false);


  useEffect(() => {
    fetchUserDetails(user, setFriends);
  }, [user.id]);

  useEffect(() => {
    fetchActivities(user, setActivities);
  }, [user]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    setIsSearchMode(text.length > 0);
    fetchUsers(text, user, friends, setUsers, img);
  };

  const renderUser = ({ item }) => {
    const followButtonStyles = [styles.followButton, item.following ? styles.followingButton : {}];
    const followButtonTextStyles = [styles.followButtonText, item.following ? styles.followingButtonText : {}];

    return (
      <View style={styles.userItem}>
        <Image source={item.avatar} style={styles.avatar} />
        <Text style={styles.userName}>{item.name}</Text>
        <TouchableOpacity
          style={followButtonStyles}
          onPress={() => toggleFollow(item.id, user, users, setUsers, setFriends, friends)}
        >
          <Text style={followButtonTextStyles}>{item.following ? 'seguindo' : 'seguir'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderActivity = ({ item }) => (
    <View style={styles.activityItem1}>
      <Image source={item.avatar} style={styles.avatar1} />
      <View style={styles.textContainer1}>
        <Text style={styles.userName1}>{item.user}</Text>
        <Text style={styles.action1}>{item.action}</Text>
      </View>
      <Text style={styles.time1}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Atividades</Text>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
            placeholder="Buscar usuários"
          />
          <Icon name="search-outline" size={20} color={'black'} style={styles.searchIcon} />
        </View>
      </View>
      
      {isSearchMode ? (
        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={item => item.id}
          style={styles.usersList}
        />
      ) : (
        <FlatList
          data={activities}
          renderItem={renderActivity}
          keyExtractor={item => item.id}
          style={styles.activitiesList}
        />
      )}

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
  activitiesList: {
    backgroundColor: '#E5E5E5', // Ajuste para a cor de fundo da lista correspondente
  },
  activityItem1: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFC690', // Ajuste para a cor da borda correspondente
    alignItems: 'center',
  },
  avatar1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  textContainer1: {
    flex: 1,
  },
  userName1: {
    fontWeight: 'bold',
  },
  action1: {
    
  },
  time1: {
    color: '#555',
  },
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
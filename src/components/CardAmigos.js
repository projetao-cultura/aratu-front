import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../assets/colors/colors.js';
import { useNavigation } from '@react-navigation/native';
import { getAmigo } from '../pages/PerfilOutro/api';
import { toggleFollow, estouSeguindoFulano } from '../pages/Perfil/api';
import { useUser } from '../../UserContext'; 

const CardAmigos = ({ id }) => {
  const navigation = useNavigation();
  const [isFollowing, setIsFollowing] = useState(true);
  const { user } = useUser();

  const [amigo, setAmigo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getAmigo(id);
        setAmigo(userInfo);
  
        const result = await estouSeguindoFulano(user, userInfo.id);
        setIsFollowing(result);
      } catch (error) {
        console.error('Erro ao carregar usuário ou verificar seguimento:', error);
      }
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    try {
      toggleFollow(user, amigo.id);
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.error('Erro ao seguir/deseguir:', error);
    }
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: amigo ? amigo.foto_perfil : "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/Chico-Science.jpg" }} style={styles.image} />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('PerfilOutro', { id: id })} style={styles.headerContentBlock}>
          <Text>
          {amigo ? amigo.nome : "Amigo"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.followContentBlock, { backgroundColor: isFollowing ? colors.aratuBlue : colors.aratuRed }]}
          onPress={handleButtonClick}
        >
          <Text style={styles.followText}>
            {isFollowing ? 'Seguindo' : 'Seguir'}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dividerLineContentBlock} />
    </View>
  );
};

export default CardAmigos;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '85%',
  },
  contentBlock: {
    marginVertical: '2%',
    position: 'relative',
    height: 77,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  contentBlockImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  headerContentBlock: {
    flex: 1,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    color: colors.aratuBlack,
  },
  followContentBlock: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  followText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: colors.aratuWhite,
  },
  dividerLineContentBlock: {
    height: 1,
    backgroundColor: colors.aratuGray,
  },
});

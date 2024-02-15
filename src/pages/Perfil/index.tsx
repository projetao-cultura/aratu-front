import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Use aspas simples ou duplas aqui

export default function Perfil() {
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/fotoperfil.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>João de Andrade</Text>
        <Text style={styles.description}>@joao_andrade</Text>
        <Text style={styles.bio}>Apaixonada por todas as cores que a arte pode oferecer. 🎭✨</Text>
      </View>
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6EFE4',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    header: {
      alignItems: 'center',
      marginTop: 20,
    },
    profileImage: {
      width: 103,
      height: 101,
      borderWidth: 4,
      borderRadius: 50,
      borderColor: '#FFFFFF',
      shadowColor: '#656565',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      marginBottom: 15,
    },
    username: {
      fontFamily: 'Inter',
      fontWeight: '500',
      fontSize: 20,
      lineHeight: 24,
      color: '#000000',
    },
    description: {
      fontFamily: 'Inter',
      fontWeight: '700',
      fontSize: 14,
      lineHeight: 17,
      color: '#A41623',
      marginBottom: 10,
    },
    bio: {
      fontFamily: 'Inter',
      fontWeight: '400',
      fontSize: 13,
      lineHeight: 16,
      textAlign: 'center',
      color: '#000000',
      paddingHorizontal: 20,
    },
  
  });


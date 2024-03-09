import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles-update';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

export default function PerfilEditar() {

  const navigation = useNavigation();
  
    return (
      <View style={styles.container}>
      <View style={styles.topNavbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Icon name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <Text style={styles.logo}>aratu</Text>
        <Icon name="build-outline" size={30} color="#ECDDC7" />
      </View>

      <View style={styles.pictureContainer}>
      <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.profileImage} />
        {/* Filtro branco com opacidade */}
        <View style={styles.filter}></View>
        {/* Ícone na frente da imagem */}
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="camera-outline" size={50} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value="Maria de Andrade"
        />
        <Text style={styles.label}>Bio:</Text>
        <TextInput
          style={[styles.input, { height: 70 }]} 
          value="Apaixonada por todas as cores que bla bla bla"
          multiline={true}
        />
        </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
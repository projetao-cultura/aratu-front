import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles-password';
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

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Alterar senha</Text>
      </View>

      <View style={styles.dataContainer}>
        <Text style={styles.label}>Senha atual:</Text>
        <TextInput
          style={styles.input}
          value="*******"
        />
        <Text style={styles.label}>Nova senha:</Text>
        <TextInput
          style={styles.input}
          value=""
        />
        <Text style={styles.label}>Confirmar nova senha:</Text>
        <TextInput
          style={styles.input}
          value=""
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
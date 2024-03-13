import React, { useEffect, useState, Alert } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles-update';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { getEventosEAmigos, putAlterarPerfil } from './api';
import { useUser } from '../../UserContext'; 

export default function PerfilEditar() {

  const [usuario, setUsuario] = useState();
  const { user, setUser } = useUser();

  useEffect(() => {
    // Substitua 'usuarioId' pelo ID do usuário logado
    const usuarioId = user.id;
    // Carregar eventos por interesse do usuário
    getEventosEAmigos(usuarioId)
      .then((userInfo) => setUsuario(userInfo))
      .catch((error) => console.error('Erro ao carregar usuário:', error));
  }, []);

  const formatarTelefone = (telefone: string) => {
    const numeros = telefone.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (numeros.length === 11) {
      return numeros.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (numeros.length === 10) {
      return numeros.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return telefone; // Retorna o telefone original se não for possível formatar
    }
  };

  const handleChangeNome = (text) => {
    setUsuario((prevUsuario) => ({ ...prevUsuario, nome: text }));
  };

  const handleChangeBiografia = (text) => {
    setUsuario((prevUsuario) => ({ ...prevUsuario, biografia: text }));
  };

  const handleChangeEmail = (text) => {
    setUsuario((prevUsuario) => ({ ...prevUsuario, email: text }));
  };

  const handleChangeTelefone = (text) => {
    // Remove todos os caracteres não numéricos do texto
    const numerosApenas = text.replace(/\D/g, '');
    // Atualiza o estado com os números apenas
    setUsuario((prevUsuario) => ({ ...prevUsuario, telefone: numerosApenas }));
  };

  const handleSalvar = async () => {
    try {
      console.log(usuario)
      await putAlterarPerfil(usuario.id, usuario);
      // Atualiza o contexto com os novos dados do usuário
      setUser(usuario);
      navigation.navigate('Perfil');
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
    }
  };
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
      <Image source={{ uri: usuario ? usuario.foto_perfil? usuario.foto_perfil : "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/Chico-Science.jpg" : "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/Chico-Science.jpg" }} style={styles.profileImage} />
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
          value={usuario ? usuario.nome : ''}
          onChangeText={handleChangeNome}
        />
        <Text style={styles.label}>Bio:</Text>
        <TextInput
          style={[styles.input, { height: 50 }]} 
          value={usuario ? usuario.biografia : ''}
          onChangeText={handleChangeBiografia}
          multiline={true}
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={usuario ? usuario.email : ''}
          onChangeText={handleChangeEmail}
        />
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={formatarTelefone(usuario ? usuario.telefone : '')}
          onChangeText={handleChangeTelefone}
        />
      </View>


      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSalvar} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
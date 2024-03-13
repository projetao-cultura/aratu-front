import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles-password';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import { putAlterarSenha } from './api';
import { useUser } from '../../UserContext';
import { Alert } from 'react-native';

export default function PerfilEditar() {
  const navigation = useNavigation();
  const { user } = useUser();

  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');


  const handleChangeSenhaAtual = (text) => {
    setSenhaAtual(text);
  };

  const handleChangeNovaSenha = (text) => {
    setNovaSenha(text);
  };

  const handleChangeConfirmarSenha = (text) => {
    setConfirmarSenha(text);
  };

  const handleSalvarSenha = async () => {
    try {
      if (senhaAtual === novaSenha) {
        // Se a senha atual for igual à nova senha, exibe um alerta
        Alert.alert('Erro', 'A nova senha deve ser diferente da senha atual.');
      } else {
        // Se as senhas são diferentes, faz a chamada para alterar a senha
        await putAlterarSenha(user.id, senhaAtual, novaSenha);
        // Exibe um alerta de sucesso
        Alert.alert('Sucesso', 'Senha atualizada com sucesso.');
        // Redireciona para a tela de perfil (ou a tela desejada)
        navigation.navigate('Perfil');
      }
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
    }
  };

  // ...

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
          value={senhaAtual}
          onChangeText={setSenhaAtual}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Nova senha:</Text>
        <TextInput
          style={styles.input}
          value={novaSenha}
          onChangeText={setNovaSenha}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirmar nova senha:</Text>
        <TextInput
          style={styles.input}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSalvarSenha} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
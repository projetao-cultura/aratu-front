import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import CardPerfil from '../../components/CardPerfil.js';
import CardAmigos from '../../components/CardAmigos.js';
import colors from '../../assets/colors/colors.js';
import { useUser } from '../../UserContext'; 
import { getEventosEAmigos, handleSairDaConta } from './api';

export default function Perfil() {

  const navigation = useNavigation();
  const { user, setUser } = useUser();
  const [usuario, setUsuario] = useState();

  useEffect(() => {
    // Substitua 'usuarioId' pelo ID do usuário logado
    const usuarioId = user.id;
    // Carregar eventos por interesse do usuário
    getEventosEAmigos(usuarioId)
      .then((userInfo) => setUsuario(userInfo))
      .catch((error) => console.error('Erro ao carregar usuário:', error));
  }, []);

    const [modalVisible, setModalVisible] = useState(false);

    const [activeButton, setActiveButton] = useState('queroIr'); // State to track active button
    const [activeButtonTab, setActiveButtonTab] = useState('atividades'); // State to track active button

    const handleAtividadeClick = (atividade: string) => {
      setActiveButton(atividade);
    };
    
    const handleTabClick = (tab: string) => {
      setActiveButtonTab(tab);
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.topNavbar}>
            <Icon name="arrow-back" size={30} color="#000" />
            <Text style={styles.logo}>aratu</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon name="build-outline" size={30} color="#000" />
            </TouchableOpacity>
          </View>
        <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalOptions}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalIcon}>
            <Icon name="close-outline" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalBotao, { backgroundColor: colors.aratuBlue }]} onPress={() => {setModalVisible(false); navigation.navigate('PerfilEditar');}}>
            <Text style={styles.modalButtonText}>Editar perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalBotao, { backgroundColor: colors.aratuGreen }]} onPress={() => {setModalVisible(false); navigation.navigate('PerfilAlterarSenha');}}>
            <Text style={styles.modalButtonText}>Alterar senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalBotao, { backgroundColor: colors.aratuRed }]} onPress={() => {handleSairDaConta(setUser, navigation)}}>
            <Text style={styles.modalButtonText}>Sair da conta</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <View style={styles.profileRectangle}>
          
  
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Image source={{ uri: usuario ? usuario.foto_perfil : "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/Chico-Science.jpg" }} style={styles.profileImage} />
              <Text style={styles.username}>{usuario ? usuario.nome : ""}</Text>
              <Text style={styles.bio}>{usuario ? usuario.biografia? usuario.biografia : "" : ""}</Text>
            </View>
  
            <View style={styles.containerStats}>
              <TouchableOpacity onPress={() => {
                handleTabClick('atividades');
                handleAtividadeClick('queroIr');
              }} style={styles.item}>
                <Text style={styles.number}>{usuario ? usuario.eventos_quero_ir.length : 0}</Text>
                <Text style={styles.text}>quero ir</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={() => {
                handleTabClick('atividades');
                handleAtividadeClick('jaFui');
              }} style={styles.item}>
                <Text style={styles.number}>{usuario ? usuario.eventos_fui.length : 0}</Text>
                <Text style={styles.text}>já fui</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={() => handleTabClick('amigos')} style={styles.item}>
                <Text style={styles.numberAmigo}>{usuario ? usuario.amigos.length : 0}</Text>
                <Text style={styles.textAmigo}>amigos</Text>
              </TouchableOpacity>          
            </View>
          </View>
        </View>
  
        <View style={{width: '100%', alignItems: 'center'}}>
  {activeButtonTab === 'atividades' && (
        <>
  
        <View style={styles.segmentedControlStructure}>
          <TouchableOpacity onPress={() => handleAtividadeClick('queroIr')} style={[styles.segmentedControlLeft, activeButton === 'queroIr' && styles.segmentedControlSelected]}>
            <Text style={[styles.buttonControlText, activeButton === 'queroIr' && styles.buttonControlTextSelected]}>Quero ir</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleAtividadeClick('jaFui')} style={[styles.segmentedControlRight, activeButton === 'jaFui' && styles.segmentedControlSelected]}>
            <Text style={[styles.buttonControlText, activeButton === 'jaFui' && styles.buttonControlTextSelected]}>Já fui</Text>
          </TouchableOpacity>
        </View>
  
        {activeButton === 'queroIr' && (
          <ScrollView style={{width: '100%'}}>
              <View style={{alignItems: 'center'}}>
          {usuario &&
          usuario.eventos_quero_ir.map((evento) => (
            <TouchableOpacity
              key={evento.id}
              onPress = {() => navigation.navigate('Detalhamento', {eventId: evento.id})}
            >
              <CardPerfil
                imageUri={evento.banner} // Substitua 'evento.imagem' pelo caminho correto da imagem
                name={evento.nome}
                time={evento.data_hora} 
                local={evento.local}
                usuario={usuario}
                idEvento={evento.id}
              />
            </TouchableOpacity>
          ))}
         </View>
        </ScrollView>
        )}
  
        {activeButton === 'jaFui' && (
          <ScrollView style={{width: '100%'}}>
          <View style={{alignItems: 'center'}}>
          {usuario &&
          usuario.eventos_fui.map((evento) => (
            <TouchableOpacity
              key={evento.id}
              onPress={() => navigation.navigate('DetalhamentoFui', {eventId: evento.id})}
            >
              <CardPerfil
                imageUri={evento.banner} // Substitua 'evento.imagem' pelo caminho correto da imagem
                name={evento.nome}
                time={evento.data_hora}
                local={evento.local}
                usuario={usuario}
                idEvento={evento.id}
              />
            </TouchableOpacity>
          ))}
          </View>
        </ScrollView>
        )}
  
        </>)}
  
  
        {activeButtonTab === 'amigos' && (
    <ScrollView style={{width: '100%'}}>
    <View style={{alignItems: 'center'}}>

{usuario &&
  usuario.amigos.map((amigo) => (
    <CardAmigos
      key={amigo.id}
      id={amigo.id}
    />
  ))
}
</View>
        </ScrollView>)}
  
  </View>
  <Navbar selectedScreen={'Profile'} navigation={navigation} />
  
  
        
      </View>
    );
  }
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, Button } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import CardPerfil from '../../components/CardPerfil.js';
import CardAmigos from '../../components/CardAmigos.js';
import colors from '../../assets/colors/colors.js';

export default function Perfil() {

  const navigation = useNavigation();

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
          <TouchableOpacity style={[styles.modalBotao, { backgroundColor: colors.aratuBlue }]} onPress={() => navigation.navigate('PerfilEditar')}>
            <Text style={styles.modalButtonText}>Editar perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalBotao, { backgroundColor: colors.aratuGreen }]} onPress={() => navigation.navigate('PerfilAlterarSenha')}>
            <Text style={styles.modalButtonText}>Alterar senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.modalBotao, { backgroundColor: colors.aratuRed }]}>
            <Text style={styles.modalButtonText}>Sair da conta</Text>
          </TouchableOpacity>
          </View>
        </View>
      </Modal>
        <View style={styles.profileRectangle}>
          
  
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.profileImage} />
              <Text style={styles.username}>João de Andrade</Text>
              <Text style={styles.bio}>Apaixonado por todas as cores que a arte pode oferecer. 🎭✨</Text>
            </View>
  
            <View style={styles.containerStats}>
              <TouchableOpacity onPress={() => {
                handleTabClick('atividades');
                handleAtividadeClick('queroIr');
              }} style={styles.item}>
                <Text style={styles.number}>20</Text>
                <Text style={styles.text}>quero ir</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={() => {
                handleTabClick('atividades');
                handleAtividadeClick('jaFui');
              }} style={styles.item}>
                <Text style={styles.number}>378</Text>
                <Text style={styles.text}>já fui</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={() => handleTabClick('amigos')} style={styles.item}>
                <Text style={styles.numberAmigo}>3</Text>
                <Text style={styles.textAmigo}>amigos</Text>
              </TouchableOpacity>          
            </View>
          </View>
        </View>
  
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
          <>
          <CardPerfil imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Homem da Madrugada" time="2024-03-01" rating="null"
                                      /> 
          <CardPerfil imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Home" time="2024-03-01" rating="null"
                                      />
  
          <CardPerfil imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Home" time="2024-03-01" rating="null"
                                      />
  
        </>
        )}
  
        {activeButton === 'jaFui' && (
          <>
          <CardPerfil imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Homem da Madrugada" time="2024-03-01" rating="5"
                                      />
          <CardPerfil imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Home" time="2024-03-01" rating="3"
                                      />
  
          <CardPerfil imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Home" time="2024-03-01" rating="4"
                                      />
        </>
        )}
  
        </>)}
  
  
        {activeButtonTab === 'amigos' && (
        <>
  
          <CardAmigos imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Rodrigo Medeiros" follow="true"
                                      />
          <CardAmigos imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Thiago Botelho Pinto" follow="true"
                                      />
  
          <CardAmigos imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Isabela Boscov" follow="true"
                                      />
  
        </>)}
  
  <Navbar selectedScreen={'Profile'} navigation={navigation} />
  
  
        
      </View>
    );
  }
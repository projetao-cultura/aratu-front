import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import CardPerfil from '../../components/CardPerfil.js';
import CardAmigos from '../../components/CardAmigos.js';
import { getAmigo } from './api';
import { toggleFollow, estouSeguindoFulano, acharAvaliacaoDoEvento, getEventosEAmigos } from '../Perfil/api';
import { useUser } from '../../UserContext'; 

import colors from '../../assets/colors/colors.js';

export default function PerfilOutro({ route }) {

  const [amigo, setAmigo] = useState();
  const [usuario, setUsuario] = useState();
  const { user } = useUser();
  const { id } = route.params;
  const [isFollowing, setIsFollowing] = useState(); // State to track if following or not

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = await getAmigo(id);
        setAmigo(userInfo);

        const logadoInfo = await getEventosEAmigos(user.id);
        setUsuario(logadoInfo);
  
        const result = await estouSeguindoFulano(logadoInfo, userInfo.id);
        setIsFollowing(result);
      } catch (error) {
        console.error('Erro ao carregar usuário ou verificar seguimento:', error);
      }
    };

    fetchData();
  }, [id]); // Detecta mudanças no parâmetro "id" da rota

  // Function to handle button click
  const handleButtonClick = () => {
    if(amigo){
      try {
        toggleFollow(usuario, amigo.id);
        const result = estouSeguindoFulano(usuario, amigo.id);
        setIsFollowing(result);
      } catch (error) {
        console.error('Erro ao seguir/deseguir:', error);
      }
    }
  };

  const navigation = useNavigation();
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
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
              <Icon name="arrow-back" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.logo}>aratu</Text>
              <Icon name="build-outline" size={30} color="#ECDDC7" />
          </View>
        <View style={styles.profileRectangle}>
          
  
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Image source={{ uri: amigo ? amigo.foto_perfil : "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/Chico-Science.jpg" }} style={styles.profileImage} />
              <Text style={styles.username}>{amigo ? amigo.nome : ""}</Text>
              <Text style={styles.bio}>{amigo ? amigo.biografia : ""}</Text>
            </View>
  
            <View style={styles.containerStats}>
              <TouchableOpacity onPress={() => {
                handleTabClick('atividades');
                handleAtividadeClick('queroIr');
              }} style={styles.item}>
                <Text style={styles.number}>{amigo ? amigo.eventos_quero_ir.length : 0}</Text>
                <Text style={styles.text}>quero ir</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={() => {
                handleTabClick('atividades');
                handleAtividadeClick('jaFui');
              }} style={styles.item}>
                <Text style={styles.number}>{amigo ? amigo.eventos_fui.length : 0}</Text>
                <Text style={styles.text}>já fui</Text>
              </TouchableOpacity>    
              <TouchableOpacity onPress={() => handleTabClick('amigos')} style={styles.item}>
                <Text style={styles.numberAmigo}>{amigo ? amigo.amigos.length : 0}</Text>
                <Text style={styles.textAmigo}>amigos</Text>
              </TouchableOpacity>           
            </View>
          </View>
        </View>

        <View style={[styles.friendFollowButton, { backgroundColor: isFollowing ? colors.aratuBlue : colors.aratuRed }]}>
        <TouchableOpacity
          onPress={handleButtonClick} // Pass the handleButtonClick function to onPress
        >
          <Text style={styles.friendFollowButtonText}>
            {isFollowing ? 'Seguindo' : 'Seguir'} {/* Display the text based on the following state */}
          </Text>
        </TouchableOpacity>
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

          {amigo &&
          amigo.eventos_quero_ir.map((evento) => (
            <TouchableOpacity
              key={evento.id}
              onPress={() => navigation.navigate('Detalhamento', {eventId: evento.id})}
            >
              <CardPerfil
                imageUri={evento.banner} // Substitua 'evento.imagem' pelo caminho correto da imagem
                name={evento.nome}
                time={evento.data_hora}
                idEvento={evento.id}
                local={evento.local}
              />
            </TouchableOpacity>
          ))}
         
         </View>
        </ScrollView>
        )}
  
        {activeButton === 'jaFui' && (
        <ScrollView style={{width: '100%'}}>
        <View style={{alignItems: 'center'}}>
          {amigo &&
          amigo.eventos_fui.map((evento) => (
            <TouchableOpacity
              key={evento.id}
              onPress={() => navigation.navigate('DetalhamentoFui', {eventId: evento.id})}
            >
              <CardPerfil
                imageUri={evento.banner} 
                name={evento.nome}
                time={evento.data_hora}
                idEvento={evento.id}
                local={evento.local}
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

{amigo &&
  amigo.amigos.map((amigo2) => (
    <CardAmigos
      key={amigo2.id}
      id={amigo2.id}
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
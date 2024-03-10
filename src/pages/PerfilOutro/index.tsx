import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import CardPerfil from '../../components/CardPerfil.js';
import CardAmigos from '../../components/CardAmigos.js';
import { getAmigo } from './api';

import colors from '../../assets/colors/colors.js';

export default function PerfilOutro({ route }) {

  const [amigo, setAmigo] = useState();

  useEffect(() => {
    getAmigo(id)
      .then((userInfo) => setAmigo(userInfo))
      .catch((error) => console.error('Erro ao carregar usuário:', error));
  }, []);

  const { id } = route.params;
  const [following, setFollowing] = useState(true); // State to track if following or not

  // Function to handle button click
  const handleButtonClick = () => {
    setFollowing(!following); // Toggle the following state
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
            <Icon name="arrow-back" size={30} color="#000" />
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

        <View style={[styles.friendFollowButton, { backgroundColor: following ? colors.aratuBlue : colors.aratuRed }]}>
        <TouchableOpacity
          onPress={handleButtonClick} // Pass the handleButtonClick function to onPress
        >
          <Text style={styles.friendFollowButtonText}>
            {following ? 'Seguindo' : 'Seguir'} {/* Display the text based on the following state */}
          </Text>
        </TouchableOpacity>
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

          {amigo &&
          amigo.eventos_quero_ir.map((evento) => (
            <TouchableOpacity
              key={evento.id}
              onPress={() => navigation.navigate('Detalhamento')}
            >
              <CardPerfil
                imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} // Substitua 'evento.imagem' pelo caminho correto da imagem
                name={evento.nome}
                time={evento.data_hora}
                rating={null} // Substitua 'evento.avaliacao' pela avaliação real do evento
                local={evento.local}
              />
            </TouchableOpacity>
          ))}
         
        </>
        )}
  
        {activeButton === 'jaFui' && (
          <>
          {amigo &&
          amigo.eventos_fui.map((evento) => (
            <TouchableOpacity
              key={evento.id}
              onPress={() => navigation.navigate('DetalhamentoFui')}
            >
              <CardPerfil
                imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} // Substitua 'evento.imagem' pelo caminho correto da imagem
                name={evento.nome}
                time={evento.data_hora}
                rating={5} // Substitua 'evento.avaliacao' pela avaliação real do evento
                local={evento.local}
              />
            </TouchableOpacity>
          ))}
        </>
        )}
  
        </>)}
  
  
        {activeButtonTab === 'amigos' && (
        <>

{amigo &&
  amigo.amigos.map((amigo2) => (
    <CardAmigos
      key={amigo2.id}
      id={amigo2.id}
    />
  ))
}
  
        </>)}
  
  <Navbar selectedScreen={'Profile'} navigation={navigation} />
  
  
        
      </View>
    );
  }

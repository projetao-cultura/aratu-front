import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';
import Navbar from '../../components/Navbar.js';
import CardPerfil from '../../components/CardPerfil.js';
import CardAmigos from '../../components/CardAmigos.js';

import colors from '../../assets/colors/colors.js';

export default function PerfilOutro() {

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
        <View style={styles.profileRectangle}>
          <View style={styles.topNavbar}>
            <Icon name="arrow-back" size={30} color="#000" />
            <Text style={styles.logo}>aratu</Text>
            <Icon name="build-outline" size={30} color="#000" />
          </View>
  
          <View style={styles.profileContainer}>
            <View style={styles.profileInfo}>
              <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.profileImage} />
              <Text style={styles.username}>Thiago Botelho</Text>
              <Text style={styles.bio}>Aii que delicia</Text>
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
                                          name="Maria Andrade" follow="true"
                                      />
  
          <CardAmigos imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                          name="Isabela Boscov" follow="true"
                                      />
  
        </>)}
  
  <Navbar selectedScreen={'Explore'} navigation={navigation} />
  
  
        
      </View>
    );
  }
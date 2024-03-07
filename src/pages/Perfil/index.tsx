import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

export default function Perfil() {

  const navigation = useNavigation();

  const [activeButton, setActiveButton] = useState('queroIr'); // State to track active button

  const handleQueroIrClick = () => {
    setActiveButton('queroIr');
  };

  const handleJaFuiClick = () => {
    setActiveButton('jaFui');
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
            <Image source={require('../../assets/fotoPerfil.png')} style={styles.profileImage} />
            <Text style={styles.username}>João de Andrade</Text>
            <Text style={styles.description}>@joao_andrade</Text>
            <Text style={styles.bio}>Apaixonado por todas as cores que a arte pode oferecer. 🎭✨</Text>
          </View>

          <View style={styles.containerStats}>
            <View style={styles.item}>
              <Text style={styles.number}>20</Text>
              <Text style={styles.text}>quero ir</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.number}>378</Text>
              <Text style={styles.text}>já fui</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.number}>99</Text>
              <Text style={styles.text}>gostei</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.segmentedControlStructure}>
        <TouchableOpacity onPress={handleQueroIrClick} style={[styles.segmentedControlLeft, activeButton === 'queroIr' && styles.segmentedControlSelected]}>
          <Text style={[styles.buttonControlText, activeButton === 'queroIr' && styles.buttonControlTextSelected]}>Quero ir</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleJaFuiClick} style={[styles.segmentedControlRight, activeButton === 'jaFui' && styles.segmentedControlSelected]}>
          <Text style={[styles.buttonControlText, activeButton === 'jaFui' && styles.buttonControlTextSelected]}>Já fui</Text>
        </TouchableOpacity>
      </View>

      {activeButton === 'queroIr' && (
        <>
        <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>Carvalheira na Ladeira</Text>
        <Text style={styles.timeContentBlock}>4 horas</Text>
        <View style={styles.descriptionContentBlock}/>
        <View style={styles.dividerLineContentBlock} />
      </View>

      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>Homem da Madrugada</Text>
        <Text style={styles.timeContentBlock}>1 dia</Text>
        <View style={styles.descriptionContentBlock}/>
        <View style={styles.dividerLineContentBlock} />
      </View>

      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>Outra coisa</Text>
        <Text style={styles.timeContentBlock}>3 dias</Text>
        <View style={styles.descriptionContentBlock}/>
        <View style={styles.dividerLineContentBlock} />
      </View>
      </>
      )}

      {activeButton === 'jaFui' && (
        <>
        <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>Quinta do Galo</Text>
        <Text style={styles.timeContentBlock}>3 dias</Text>
        <View style={styles.descriptionContentBlock}>
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
        </View>
        <View style={styles.dividerLineContentBlock} />
      </View>

      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>STU Nacional</Text>
        <Text style={styles.timeContentBlock}>7 dias</Text>
        <View style={styles.descriptionContentBlock}>
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
        </View>
        <View style={styles.dividerLineContentBlock} />
      </View>

      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>Show Priscilla Senna</Text>
        <Text style={styles.timeContentBlock}>14 dias</Text>
        <View style={styles.descriptionContentBlock}>
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
          <Icon name="star" style={styles.starIcon} />
        </View>
        <View style={styles.dividerLineContentBlock} />
      </View>
      </>
      )}

<View style={styles.bottomNavbar}>  
        <TouchableOpacity style={styles.bottomNavCircle} onPress = {() => navigation.navigate('Feed')}>
          <Icon name="home-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavCircle} onPress = {() => navigation.navigate('Feed')}>
          <Icon name="compass-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavCircle} onPress = {() => navigation.navigate('Feed')}>
          <Icon name="heart-outline" size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.bottomNavCircle, styles.bottomNavSelected]} onPress = {() => navigation.navigate('Perfil')}>
          <Icon name="person-outline" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      
    </View>
  );
}
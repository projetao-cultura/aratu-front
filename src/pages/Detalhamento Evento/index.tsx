import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from '../../assets/colors/colors.js';
import ClockImage from '../../assets/Clock.png';
import NewImage from '../../assets/check.png';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';



const EventDetailsScreen = () => {
  // Suponha que estas são suas URLs de imagem, você vai substituir com as reais
  const navigation = useNavigation();


  const onPressContact = () => {
    Linking.openURL('mailto:contato@carvalheira.com.br');
  };

  const onPressTickets = () => {
    Linking.openURL('https://www.sympla.com.br/evento/carvalheira-na-ladeira-2025/2339071?referrer=www.google.com');
  };

  
  const [buttonActive, setButtonActive] = useState(false);
  const [buttonBackgroundColor, setButtonBackgroundColor] = useState('#FFF');

  const toggleButtonState = () => {
    setButtonActive(!buttonActive);
    setButtonBackgroundColor(buttonActive ? '#FFF' : '#E8E8E8'); // Mude a cor de fundo conforme necessário
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <Image source={require('../../assets/ImgEvent.png')} style={styles.eventImage} />
        
        <View style={styles.content}>
          <Text style={styles.eventTitle}>Carvalheira na Ladeira</Text>
          
          <View style={styles.tagContainer}>
            <Text style={styles.tag}>CARNAVAL</Text>
            <Text style={styles.tag2}>SHOW</Text>
          </View>

          <View style={styles.dateLocationContainer}>
            <Image source={require('../../assets/Clock2.png')} style={styles.clockImg} />
            <Text style={styles.dateText}>01/03/2025 • 13:00 à 04/03/2025 • 23:59</Text>
            
          </View>
          <View style={styles.dateLocationContainer}>
            <Image source={require('../../assets/Location.png')} style={styles.clockImg} />
            <Text style={styles.locationText}>Parque Memorial Arcoverde, Olinda - PE</Text>
          </View>

          <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]} // Aplica a cor de fundo dinamicamente
          onPress={toggleButtonState} // Alterna o estado do botão
        >
          <Image style={styles.clockImg2}source={buttonActive ? NewImage : ClockImage}/> 
          <Text style={styles.buttonText}>QUERO IR</Text>
        </TouchableOpacity>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>
              Depois de quatro dias no nosso lugar mágico, e uma vontade danada de
              viver tudo novamente, só existe um jeito de fazer essa tristeza de
              quarta-feira passar: deixando a sua presença no
              #CarvalheiraNaLadeira2025 mais que CERTA!
          </Text>

          <View style={styles.ticketsContainer}>
            <Text style={styles.ticketsText}>INGRESSOS</Text>
            <View style={styles.ticketsContainerChild}>
              <View style={styles.ticketsContainerNeto}>
                <TouchableOpacity style={styles.symplaButton} onPress={onPressTickets}>
                  <Text style={styles.contactText}>Onde Comprar: </Text>
                  <View style={styles.ticketsContainerBisneto}>
                    <Image source={{ uri: 'https://www.sympla.com.br/images/logo-sympla-for-facebook.png' }} style={styles.symplaLogo} />
                    <Text style={styles.contactText2}>Sympla</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.ticketsContainerNeto2}>
                <TouchableOpacity onPress={onPressContact}>
                <Text style={styles.contactText}>Mais Informações:</Text>
                  <Text style={styles.contactText2}>contatopalhacochocolate.com.br</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          
        </View>
        <View style={styles.queremIrContainer}>
            <Text style={styles.sectionTitle2}>QUEREM IR</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}
            />
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
            <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
              <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
              <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
              <Image
              style={styles.imageIcon}
              resizeMode="cover"
              source={require('../../assets/fotoPerfil.png')}          />
            </ScrollView>
          </View>
          
          <Text style={styles.sectionTitle3}>Eventos parecidos</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            <View style={styles.event}>
              <Image
                  style={styles.imageIcon2}
                  resizeMode="cover"
                  source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                />
                <Text style={styles.eventText}> evento x </Text>
              </View>
              <View style={styles.event}>
              <Image
                  style={styles.imageIcon2}
                  resizeMode="cover"
                  source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                />
                <Text style={styles.eventText}> evento x </Text>
              </View>
              <View style={styles.event}>
              <Image
                  style={styles.imageIcon2}
                  resizeMode="cover"
                  source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                />
                <Text style={styles.eventText}> evento x </Text>
              </View>
              <View style={styles.event}>
              <Image
                  style={styles.imageIcon2}
                  resizeMode="cover"
                  source={{ uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                />
                <Text style={styles.eventText}> evento x </Text>
              </View>
          </ScrollView>

          
      </ScrollView>
      <View style={styles.bottomNavbar}>  
          <TouchableOpacity style={[styles.bottomNavCircle, styles.bottomNavSelected]} onPress = {() => navigation.navigate('Feed')}>
            <Icon name="home-outline" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavCircle} onPress = {() => navigation.navigate('Feed')}>
            <Icon name="compass-outline" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavCircle} onPress = {() => navigation.navigate('Feed')}>
            <Icon name="heart-outline" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomNavCircle} onPress = {() => navigation.navigate('Perfil')}>
            <Icon name="person-outline" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#f6efe4',
    marginBottom: 60, // Isso deve ser igual ou maior que a altura da BottomNavbar

  },
  
  content: {
    padding: 16,
  },
  eventImage: {
    width: '100%',
    height: 250, // Substitua pela altura desejada
  },
  eventTitle: {
    fontFamily:'Gazebo',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  tag: {
    backgroundColor: '#216F3F',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    color: '#fff',
  },
  tag2: {
    backgroundColor: '#086788',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 4,
    color: '#fff',
  },
  dateLocationContainer: {
    flexDirection: 'row', // Organiza os filhos em uma linha
    alignItems: 'center',
    width:'50%',
    marginVertical: 8,
  },
  clockImg: {
    width: 22,
    height: 22,
  },
  clockImg2: {
    width: 32,
    height: 32,
  },
  dateText: {
    color: '#555',
    paddingLeft:10 
  },
  locationText: {
    paddingLeft:10,
    color: '#555',
  },
  button: {
    width: '30%',
    left: '70%',
    marginTop: '-25%',
    backgroundColor: '#FFF',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 4,
    marginVertical: 8,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
  descriptionText: {
    color: '#555',
  },
  ticketsContainer: {
    marginTop: 15,
    borderRadius: 12,
    backgroundColor: '#D3D3D3',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  ticketsContainerChild: {
    flexDirection: 'row',

  },  
  ticketsContainerNeto: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  ticketsContainerNeto2: {
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 90,
    flexDirection: 'row',
  },
  ticketsContainerBisneto: {
    flexDirection: 'row'
  },

  symplaButton: {

  },

  ticketsText: {
    color: '#000',
    marginLeft: 10,
    marginTop:5
  },


  symplaLogo: {
    borderRadius: 87,
    width: 20,
    height: 20,
  },

  contactText: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  contactText2: {
    marginLeft: 3,
    fontSize: 12,
    color: '#000',
    textDecorationLine: 'underline',
  },
  queremIrContainer: {
    backgroundColor: '#FFF',
  },
  horizontalScroll: {
    marginBottom: 10,
  },

  sectionTitle2: {
    marginLeft: 10,
    fontSize: 15,
    marginTop: 4,
  },
  imageIcon: {
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 187,
    width: 44,
    height: 44,
    marginRight: 20, // Espaçamento entre as imagens
  },
  sectionTitle3: {
    color: '#A41623',
    marginLeft: 15,
    fontSize: 20,
    marginTop: 15,
  },
  event:{
    
  },
  eventText:{
    fontSize:15,

  },

  imageIcon2: {
    width: 160,
    height: 99,
    left: 5,
    marginRight:15,
    marginTop:10,
  },
  bottomNavbar: {
    position: 'absolute',
    width: '100%',
    height: 50,
    left: 0,
    bottom: 0,
    backgroundColor: colors.aratuWhite,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomNavCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: colors.aratuGray,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavSelected: {
    backgroundColor: colors.aratuBlue,
  },
  imageInsideCircle: {
    width: 20,
    height: 20,
    opacity: 75,
  },
 
  // mais estilos...
});

export default EventDetailsScreen;

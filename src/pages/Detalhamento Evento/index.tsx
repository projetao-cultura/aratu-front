import React, { useState } from 'react';
import Navbar from '../../components/Navbar.js';
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
import NewImage from '../../assets/Clock1.png';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';



const EventDetailsScreen = () => {
  // Suponha que estas são suas URLs de imagem, você vai substituir com as reais
  const navigation = useNavigation();

  const img  = require('../../assets/ImgEvent.png') 

  const [evento] = useState([
    {
      titulo: 'Carvalheira na Ladeira',
      tag: ['CARNAVAL', 'SHOW'],
      hora: '01/03/2025 • 13:00 à 04/03/2025 • 23:59',
      local: 'Parque Memorial Arcoverde, Olinda - PE',
      banner: img, // Substitua pela sua imagem de banner local
      descricao: 'Depois de quatro dias no nosso lugar mágico, e uma vontade danada de viver tudo novamente, só existe um jeito de fazer essa tristeza de quarta-feira passar: deixando a sua presença no #CarvalheiraNaLadeira2025 mais que CERTA',
      ing: 'https://www.sympla.com.br/evento/carvalheira-na-ladeira-2025/2339071',
      contato: 'contato@carvalheira.com.br',
    },
    // ... outros objetos de evento
  ]);

  const imgQueremIr  = require('../../assets/fotoPerfil.png') 

  const [queremIr] = useState([
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    },
    {
      querIr: imgQueremIr,
    }
  ])


  const bannerSimilarEvent = { uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}

  const [eventParecido] = useState([
    {
      banner: bannerSimilarEvent,
      nomeEvento: 'Evento X'
    },
    {
      banner: bannerSimilarEvent,
      nomeEvento: 'Evento X'
    },
    {
      banner: bannerSimilarEvent,
      nomeEvento: 'Evento X'
    },
    {
      banner: bannerSimilarEvent,
      nomeEvento: 'Evento X'
    },
    {
      banner: bannerSimilarEvent,
      nomeEvento: 'Evento X'
    },
  ])


  const onPressContact = () => {
    Linking.openURL('mailto:${evento[0].contato}');
  };

  const onPressTickets = () => {
    Linking.openURL(evento[0].ing);
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
        <Image source={evento[0].banner} style={styles.eventImage} />
        
        <View style={styles.content}>
          <Text style={styles.eventTitle}>{evento[0].titulo}</Text>
          
          <View style={styles.tagContainer}>
          {evento[0].tag.map((tag, index) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>

          <View style={styles.dateLocationContainer}>
            <Image source={require('../../assets/Clock2.png')} style={styles.clockImg} />
            <Text style={styles.dateText}>{evento[0].hora}</Text>
            
          </View>
          <View style={styles.dateLocationContainer}>
            <Image source={require('../../assets/Location.png')} style={styles.clockImg} />
            <Text style={styles.locationText}>{evento[0].local}</Text>
          </View>

          <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]} // Aplica a cor de fundo dinamicamente
          onPress={toggleButtonState} // Alterna o estado do botão
        >
          <Image style={styles.clockImg2}source={buttonActive ? NewImage : ClockImage}/> 
          <Text style={styles.buttonText}>QUERO IR</Text>
        </TouchableOpacity>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>{evento[0].descricao}</Text>


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
              {queremIr.map((item, index) => (
                <Image
                  key={index} // É importante usar uma key única para cada elemento na lista para ajudar o React a identificar quais itens mudaram.
                  style={styles.imageIcon}
                  resizeMode="cover"
                  source={item.querIr}
                />
              ))}
            </ScrollView>

          </View>
          
          <Text style={styles.sectionTitle3}>Eventos parecidos</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {eventParecido.map((evento, index) => (
              <View key={index} style={styles.event}>
                <Image
                  style={styles.imageIcon2}
                  resizeMode="cover"
                  source={evento.banner}
                />
                <Text style={styles.eventText}>{evento.nomeEvento}</Text>
              </View>
            ))}
          </ScrollView>

          
      </ScrollView>
      <Navbar  navigation={navigation} />

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
    marginLeft:5,
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

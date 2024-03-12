import React, { useEffect, useState } from 'react';
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
import { formatarNomeCategoria} from '../Feed/helper.js'
import { getEvento, getEventosParecidos } from './api';



const EventDetailsScreen = ({ route }) => {

  const { eventId } = route.params;
  const [eventosParecidos, setEventosParecidos] = useState([]);
  const [ eventData, setEvento] = useState({
    titulo: '',
    hora: '',
    local: '',
    banner: '',
    descricao: '',
    ing: '',
    contato: '',
    categoria: [],
    querem_ir: []
  });
  

  useEffect(() => {
    getEvento(eventId)
      .then((evento) => {
  
        const categoriaFormatada = formatarNomeCategoria(evento.categoria)

        const formattedEventData = {
          titulo: evento.nome,
          hora: evento.data_hora,
          local: evento.local,
          banner: evento.banner,
          descricao: evento.descricao,
          ing: evento.onde_comprar_ingressos,
          contato: evento.organizador,
          categoria: categoriaFormatada,
          querem_ir: evento.usuarios_que_querem_ir
        }

        // Atualizando o estado com os dados formatados
        setEvento(formattedEventData)

        if (evento.categoria) {
          getEventosParecidos(evento.categoria)
            .then((eventos) => setEventosParecidos(eventos))
            .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));
        }

      })
      .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));

    // getEventosParecidos(eventData.categoria)
    //   .then((eventos) => setEventosParecidos(eventos))
    //   .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));

  }, []);

  // console.log(eventData)
  // Suponha que estas são suas URLs de imagem, você vai substituir com as reais
  const navigation = useNavigation();

  const onPressContact = () => {
    Linking.openURL('mailto:${eventData.contato}');
  };

  const onPressTickets = () => {
    Linking.openURL(eventData.ing);
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
        <Image source={{uri: eventData.banner}} style={styles.eventImage} />
        
        <View style={styles.content}>
          <Text style={styles.eventTitle}>{eventData.titulo}</Text>
          
          <View style={styles.tagContainer}>
            {Array.isArray(eventData.categoria) ? eventData.categoria.map((categoria, index) => (
              <Text key={index} style={styles.tag}>{categoria}</Text>
            )) : <Text style={styles.tag}>{eventData.categoria}</Text>}
          </View>

          <View style={styles.dateLocationContainer}>
            <Image source={require('../../assets/Clock2.png')} style={styles.clockImg} />
            <Text style={styles.dateText}>{eventData.hora}</Text>
            
          </View>
          <View style={styles.dateLocationContainer}>
            <Image source={require('../../assets/Location.png')} style={styles.clockImg} />
            <Text style={styles.locationText}>{eventData.local}</Text>
          </View>

          <TouchableOpacity
          style={[styles.button, { backgroundColor: buttonBackgroundColor }]} // Aplica a cor de fundo dinamicamente
          onPress={toggleButtonState} // Alterna o estado do botão
        >
          <Image style={styles.clockImg2}source={buttonActive ? NewImage : ClockImage}/> 
          <Text style={styles.buttonText}>QUERO IR</Text>
        </TouchableOpacity>

          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>{eventData.descricao}</Text>


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
              {eventData.querem_ir.map((item, index) => (
                <Image
                  key={index} // É importante usar uma key única para cada elemento na lista para ajudar o React a identificar quais itens mudaram.
                  style={styles.imageIcon}
                  resizeMode="cover"
                  source={ {uri: item.foto_perfil}}
                />
              ))}
            </ScrollView>

          </View>
          
          <Text style={styles.sectionTitle3}>Eventos parecidos</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
            {eventosParecidos.map((evento, index) => (
              <View key={index} style={styles.event}>
                <Image
                  style={styles.imageIcon2}
                  resizeMode="cover"
                  source={{uri: evento.banner}}
                />
                <Text style={styles.eventText}>{evento.nome}</Text>
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

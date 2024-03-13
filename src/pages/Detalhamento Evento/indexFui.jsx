import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Modal
} from 'react-native';
import Navbar from '../../components/Navbar.js';
import colors from '../../assets/colors/colors.js';
import ClockImage from '../../assets/check.png';
import NewImage from '../../assets/check1.png';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

const RatingModal = ({ visible, onRate, onClose }) => {
    const maxRating = [1, 2, 3, 4, 5];
    
    return (
      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={stylesModal.modalContainer}>
          <View style={stylesModal.modalContent}>
            <Text style={stylesModal.modalTitle}>Avalie o Evento</Text>
            <View style={stylesModal.starsContainer}>
              {maxRating.map((rate, index) => (
                <TouchableOpacity key={index} onPress={() => onRate(rate)}>
                  <Icon
                    name="star"
                    size={40}
                    color={index < rate ? "gold" : "grey"}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={stylesModal.modalButton} onPress={onClose}>
              <Text style={stylesModal.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const stylesModal = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
      },
      modalTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 15,
      },
      starsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
      },
      modalButton: {
        backgroundColor: '#086788',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
      },
      modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      rateButton: {
        // Estilos do seu botão "Avaliar"
      },
      buttonText: {
        // Estilos do texto dentro do seu botão "Avaliar"
      },
      // ... restante dos seus estilos ...
    });
  
const EventDetailsScreen = () => {
  const [rating, setRating] = useState(null); // This represents the individual user's rating
  const [averageRating, setAverageRating] = useState(0); // Assuming an initial average rating
  const [ratingCount, setRatingCount] = useState(0); // Assuming there are already 10 ratings for simplicity
  const [modalVisible, setModalVisible] = useState(false);
  
  const renderStars = (currentRating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <Icon
                key={i}
                name={i <= currentRating ? "star" : "star-outline"}
                size={20}
                color={i <= currentRating ? "gold" : "grey"}
            />
        );
    }
    return stars;
};

// This will render the average stars and the numeric rating
const renderRating = () => {
    return (
        <View style={styles.ratingContainer}>
            <Text style={styles.numericRating}> {averageRating.toFixed(1)}</Text>

            {renderStars(averageRating)}
        </View>
    );
};

const handleRating = (newRating) => {
    // Update the user's individual rating
    setRating(newRating);

    // Calculate the new average rating
    const totalRatingSum = averageRating * ratingCount + newRating;
    const newRatingCount = ratingCount + 1;
    const newAverageRating = totalRatingSum / newRatingCount;

    // Update the average rating and rating count
    setAverageRating(newAverageRating);
    setRatingCount(newRatingCount);
    
    // Close the modal
    setModalVisible(false);
};

  const handleOpenRating = () => {
      setModalVisible(true);
    };

  const navigation = useNavigation();

  const img  = require('../../assets/quintaDoGalo.png') 

  const [evento] = useState([
    {
      titulo: 'Quinta no Galo 2024',
      tag: ['CARNAVAL', 'SHOW'],
      hora: '25/01/2024, 19H00 - 22H30',
      local: 'Sede do Galo:  Rua da Concórdia, 984 - São José Recife - PE',
      banner: img, // Substitua pela sua imagem de banner local
      descricao: 'Não percam a prévia do maior bloco do mundo com o melhor da música e da cultura pernambucana! Apresentações de grupos de fantasias, passistas de frevo, caboclinho, maracatus, bloco lírico e muito mais!',
    },
    // ... outros objetos de evento
  ]);

  const imgQueremIr  = require('../../assets/fotoPerfil.png') 

  const [queremIr] = useState([
    {
      querIr: imgQueremIr,
      nota:4
    },
    {
      querIr: imgQueremIr,
      nota:3
    },
    {
      querIr: imgQueremIr,
      nota: 5
    },
    {
      querIr: imgQueremIr,
      nota: 2
    },
    {
      querIr: imgQueremIr,
      nota:4
    },
    {
      querIr: imgQueremIr,
      nota:1
    },
    {
      querIr: imgQueremIr,
      nota: 5
    },
    {
      querIr: imgQueremIr,
      nota: 3
    },
  ])

  const StarRating = ({ rating }) => {
    const maxRating = [1, 2, 3, 4, 5];
    return (
      <View style={styles.starsContainer}>
        {maxRating.map((star, index) => (
          <Icon
            key={index}
            name={index < rating ?  "star" : "star-outline"}
            size={10}
            color={index < rating ? "gold" : "grey"}
          />
        ))}
      </View>
    );
  };

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
          
          <View style={styles.tagAndRatingContainer}>
            <View style={styles.tagContainer}>
              {evento[0].tag.map((tag, index) => (
                <Text key={index} style={styles.tag}>{tag}</Text>
              ))}
            </View>
            {/* Display the stars based on the rating if it exists */}
              {renderRating()}
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
          onPress={() => {
            handleOpenRating();
            toggleButtonState();
          }}        >
          <Image style={styles.clockImg2}source={buttonActive ? NewImage : ClockImage}/> 
          <Text style={styles.buttonText}>EU FUI!</Text>
        </TouchableOpacity>
        <RatingModal
            visible={modalVisible}
            onRate={handleRating}
            onClose={() => setModalVisible(false)}
        />
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>{evento[0].descricao}</Text>

          
        </View>
        <View style={styles.queremIrContainer}>
            <Text style={styles.sectionTitle2}>Foram</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
              {queremIr.map((item, index) => (
                <View key={index} style={styles.listItemContainer}>
                  <Image
                    style={styles.imageIcon}
                    resizeMode="cover"
                    source={item.querIr}
                  />
                  <StarRating rating={item.nota} />
                </View>
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
      
      <Navbar navigation={navigation} />

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
  starsContainer:{
    flexDirection:'row'
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
  averageRating: {
    borderRadius: 4,
    backgroundColor: '#A41623',
    alignItems: 'center',
    color: '#FFF',   
    fontSize: 18,
    marginLeft: 50,
    marginRight:5,
  },
  numericRating:{
    marginRight: 5, // Space between stars and numeric rating
    color: '#000',
  },
  averageRatingContainer: {
    paddingLeft: '25%',

  },
  tagAndRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingContainer: {
    flexDirection: 'row',
    paddingRight:6,
    alignItems: 'center', // Align items in the center vertically.

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
 
 
  // mais estilos...
});

export default EventDetailsScreen;

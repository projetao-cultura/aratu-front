import React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';

export default function Perfil() {
    return(
        
        <View style={styles.container}>
       
        <View style={styles.profileRectangle}>
 <View style={styles.topNavbar}>
      </View>
        <Image
          source={require('../../assets/fotoperfil.jpg')} style={styles.profileImage}
        />
        <Text style={styles.username}>João de Andrade</Text>
        <Text style={styles.description}>@joao_andrade</Text>
        <Text style={styles.bio}>Apaixonada por todas as cores que a arte pode oferecer. 🎭✨</Text>
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
      <View style={styles.segmentedControlStructure}>
      <View style={styles.segmentedControlLeft}>
        <Text style={styles.buttonControlText}>Quero ir</Text>
      </View>
      <View style={styles.segmentedControlRight}>
        <Text style={styles.buttonControlTextSelected}>Já fui</Text>
      </View>
      </View>


          <View style={styles.contentBlock}>
      <View style={styles.contentBlockImage}>
        <Image source={require('../../assets/fotoperfil.jpg')} style={styles.image} />
      </View>
      <Text style={styles.headerContentBlock}>Forte das Cinco Pontas</Text>
      <Text style={styles.timeContentBlock}>8m ago</Text>
      <Text style={styles.descriptionContentBlock}>
        Muito massa, po. Gostei, mas esse texto não vai existir.
      </Text>
      <View style={styles.dividerLineContentBlock} />
    </View>
    <View style={styles.contentBlock}>
      <View style={styles.contentBlockImage}>
        <Image source={require('../../assets/fotoperfil.jpg')} style={styles.image} />
      </View>
      <Text style={styles.headerContentBlock}>STU Nacional</Text>
      <Text style={styles.timeContentBlock}>8m ago</Text>
      <Text style={styles.descriptionContentBlock}>
        Provavelmente vai ser a avaliação aqui.
      </Text>
      <View style={styles.dividerLineContentBlock} />
    </View>
    <View style={styles.contentBlock}>
      <View style={styles.contentBlockImage}>
        <Image source={require('../../assets/fotoperfil.jpg')} style={styles.image} />
      </View>
      <Text style={styles.headerContentBlock}>Teatro do Parque</Text>
      <Text style={styles.timeContentBlock}>8m ago</Text>
      <Text style={styles.descriptionContentBlock}>
        Provavelmente vai ser a avaliação aqui.
      </Text>
      <View style={styles.dividerLineContentBlock} />
    </View>
    </View>

    
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6EFE4',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    profileImage: {
    boxSizing: 'border-box',
    position: 'absolute',
    width: 103,
    height: 101,
    left: 22,
    top: 79,
    backgroundColor: 'url(.png)',
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 103 / 2, // To make it a circle
    shadowColor: '#656565',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    },
    username: {
      position: 'absolute',
    width: 220,
    height: 24,
    left: 153,
    top: 89,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    },
    description: {
      position: 'absolute',
    width: 129,
    height: 17,
    left: 153,
    top: 114,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    color: '#A41623',
    },
    bio: {
     position: 'absolute',
    width: 197,
    height: 32,
    left: 149,
    top: 144,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    textAlign: 'center',
    color: '#000000',
    },
    profileRectangle: {
      position: 'absolute',
      height: 250,
      width: '100%',
      top: '21px',
      backgroundColor: '#DB9F36',
    },
 containerStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    paddingHorizontal: 23,
    position: 'absolute',
    width: 320,
    height: 56,
    left: 20,
    top: 195,
  },
  item: {
    marginHorizontal: 'auto',
    width: 106.67,
    height: 56,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
    textShadowColor: 'rgba(8, 15, 52, 0.04)',
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 14,
    flex: 1,
  },
  text: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
  number: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000000',
  },
  topNavbar: {
    position: 'absolute',
    width: '100%',
    height: 52,
    top: 0,
    backgroundColor: '#ECDDC7',
  },
  segmentedControlStructure: {
    position: 'absolute',
    height: 50,
    left: 9,
    right: 8,
    top: 280,
    backgroundColor: '#F6F6F6',
    borderRadius: 100, 
  },
  segmentedControlLeft: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '50%',
    backgroundColor: '#F6F6F6',
    borderTopLeftRadius: 25, // Half of height
    borderBottomLeftRadius: 25, // Half of height
    alignItems: 'center',
    justifyContent: 'center', // Center text vertically
  },
  segmentedControlRight: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: '50%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center', // Center text vertically
  },
  buttonControlText: {
    position: 'absolute',
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
  },
  buttonControlTextSelected: {
    position: 'absolute',
    fontFamily: 'Inter',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 19,
    color: '#A41623',
  },
contentBlock: {
    position: 'relative',
    height: 77,
    width: '85%',
    top: 360,
    marginBottom: 25,
  },
  contentBlockImage: {
    position: 'absolute',
    width: 50,
    height: 50,
    left: 0,
    top: 0,
    borderRadius: 8,
    backgroundColor: 'pink',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  headerContentBlock: {
    position: 'absolute',
    width: 180,
    height: 19,
    left: 66,
    top: 0,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#000000',
  },
  timeContentBlock: {
    position: 'absolute',
    width: 68,
    height: 17,
    right: 0,
    top: 2,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'right',
    color: '#A41623',
  },
  descriptionContentBlock: {
    position: 'absolute',
    height: 17,
    left: 66,
    right: 8,
    top: 27,
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: '#000000',
  },
  dividerLineContentBlock: {
    position: 'absolute',
    height: 0,
    left: 32,
    right: 34,
    bottom: 0,
    borderWidth: 1,
    borderColor: '#BDC5CD',
  },
  });

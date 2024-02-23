import {StyleSheet, Platform, StatusBar} from 'react-native';
import colors from '../../assets/colors/colors.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.aratuBeige,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  topNavbar: {
    position: 'absolute',
    width: '100%',
    height: 52,
    top: 0,
    backgroundColor: '#ECDDC7',
    flexDirection: 'row', // Make the children align horizontally
    alignItems: 'center',
    justifyContent: 'space-between', // Spread the children apart
    paddingHorizontal: 16, // Add some padding
  },

  arrowIcon: {
    width: 20,
    height: 20,
  },

  gearIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    fontFamily: 'Inter', // Mudar para fonte certa da logo
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
  },
  profileRectangle: {
    position: 'absolute',
    height: 250,
    width: '100%',
    backgroundColor: '#DB9F36',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileInfo: {
    width: 350,
    position: 'relative',
    height: 130,
    alignItems: 'center',
    justifyContent: 'flex-start',
    top: 60,
  },
  profileImage: {
    position: 'absolute',
    width: 95,
    height: 95,
    left: 22,
    marginTop: 10,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 103 / 2, // Para torná-lo um círculo
    shadowColor: '#656565',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 20,
    // Adicione 'elevation' aqui se precisar de sombra no Android
  },
  username: {
    position: 'absolute',
    width: 220,
    height: 24,
    left: 140,
    top: 20,
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
    left: 140,
    top: 50,
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
    left: 140,
    top: 75,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 16,
    color: '#000000',
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
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
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
    textShadowOffset: {width: 0, height: 5},
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
  bottomNavbar: {
    position: 'absolute',
    width: '100%',
    height: 50,
    left: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomNavCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomNavSelected: {
    backgroundColor: '#DB9F36',
  },
  imageInsideCircle: {
    width: 20,
    height: 20,
    opacity: 75,
  },
});

export default styles;
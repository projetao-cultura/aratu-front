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
    backgroundColor: colors.aratuDarkBeige,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    zIndex: 5000,
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
    fontFamily: 'Gazebo',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
  },
  pictureContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: '25%',
    width: '100%',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    borderRadius: 110 / 2,
    shadowColor: '#656565',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
  filter: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Filtro branco com opacidade 60%
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  iconContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -25 }, { translateY: -25 }], // Ajuste conforme necessário para centralizar o ícone
  },
  dataContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    height: 'auto',
    width: '80%',
    marginBottom: 10, 
  },
  label: {
    marginTop: 20,
    marginBottom: 5,
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 18,
    color: colors.aratuBlack,
  },
  input: {
    width: '100%',
    fontFamily: 'Inter',
    height: 40,
    borderBottomWidth: 1,
    borderColor: colors.aratuGray,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontFamily: 'Inter',
    fontSize: 16,
    color: colors.aratuBlack,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    height: '5%',
    width: '80%',
  },
  button: {
    backgroundColor: colors.aratuBlue,
    padding: 10,
    width: '35%',
    height: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 18,
    lineHeight: 19,
    color: colors.aratuWhite
  },
});

export default styles;
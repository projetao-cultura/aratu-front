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
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: '20%',
    width: '100%',
  },
  title: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 32,
    lineHeight: 39,
    textAlign: 'center',
    color: '#000000',
  },
  dataContainer: {
    alignItems: 'flex-start',
    marginTop: 5,
    height: '45%',
    width: '80%',
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
    marginTop: 10,
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
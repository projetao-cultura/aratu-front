import {StyleSheet, Platform, StatusBar} from 'react-native';
import colors from '../../assets/colors/colors.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.aratuBeige,
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
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    fontFamily: 'Gazebo',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
  },
  profileRectangle: {
    position: 'absolute',
    height: '20%',
    width: '100%',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileContainer: {
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '85%',
  },
  containerText: {
    position: 'absolute',
    width: '70%',
    height: '100%',
    left: 0,
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 32,
    lineHeight: 39,
    color: colors.aratuBlack,
    left: 0,
    top: 0,
  },
  text1Highlight: {
    fontWeight: 'bold', // Make the text very bold
    color: colors.aratuRed, // Set the highlight color
  },
  text2: {
    width: 222,
    height: 18,
    left: 0, // Aligns text to the left
    top: 39, // Adjust top value as needed
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    color: '#000000',
  },
  ellipse: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    shadowColor: '#656565',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 20,
    right: 5,
    borderRadius: 103 / 2,
  },
  scrollViewContainer: {
    marginTop: '50%',
    width: '100%',
  },
  titleCarrosel: {
    width: '100%',
    paddingLeft: 20,
    paddingBottom: 5,
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 22,
    color: colors.aratuRed,
  },
  scrollView: {
    width: '100%',
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
});

export default styles;

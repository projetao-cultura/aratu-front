import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../assets/colors/colors.js';

const Header = ({ selectedScreen }) => {
  return (
    <View style={styles.topNavbar}>
      {selectedScreen === 'Perfil' && <Icon name="arrow-back" size={30} color="#000" />}
      <Text style={styles.logo}>aratu</Text>
      {selectedScreen === 'Perfil' && <Icon name="build-outline" size={30} color="#000" />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
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
});

import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../assets/colors/colors.js';

class Navbar extends Component {
  render() {
    const { selectedScreen, navigation } = this.props;

    return (
      <View style={styles.bottomNavbar}>  
        <TouchableOpacity 
          style={[styles.bottomNavCircle, 
                  selectedScreen === 'Feed' && { backgroundColor: colors.aratuBlue }]} 
          onPress={() => navigation.navigate('Feed')}
        >
          <Icon name="home-outline" size={20} color={selectedScreen === 'Feed' ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bottomNavCircle, 
                  selectedScreen === 'Explore' && { backgroundColor: colors.aratuGreen }]} 
          onPress={() => navigation.navigate('Explore')}
        >
          <Icon name="compass-outline" size={20} color={selectedScreen === 'Explore' ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bottomNavCircle, 
                  selectedScreen === 'Likes' && { backgroundColor: colors.aratuRed }]} 
          onPress={() => navigation.navigate('Atividade')}
        >
          <Icon name="heart-outline" size={20} color={selectedScreen === 'Likes' ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.bottomNavCircle, 
                  selectedScreen === 'Profile' && { backgroundColor: colors.aratuYellow }]} 
          onPress={() => navigation.navigate('Perfil')}
        >
          <Icon name="person-outline" size={20} color={selectedScreen === 'Profile' ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Navbar;

const styles = StyleSheet.create({
  bottomNavbar: {
    position: 'absolute',
    width: '100%',
    height: 50,
    left: 0,
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomNavCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
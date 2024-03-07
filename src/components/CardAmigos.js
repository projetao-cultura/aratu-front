import React, {Component} from 'react';
import {View, Text, Image,TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../assets/colors/colors.js';
import { useNavigation } from '@react-navigation/native';

class CardAmigos extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      follow: this.props.follow,
    };
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({
      follow: !prevState.follow,
    }));
  };

  render() {
    const navigation = useNavigation();
     const { imageUri, name } = this.props;
    const { follow } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.contentBlock}>
          <View style={styles.contentBlockImage}>
            <Image source={{ uri: imageUri }} style={styles.image} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PerfilOutro')} style={styles.headerContentBlock}>{name}</TouchableOpacity>
          <TouchableOpacity
            style={[styles.followContentBlock, { backgroundColor: follow ? colors.aratuBlue : colors.aratuRed }]}
            onPress={this.handleButtonClick}
          >
            <Text style={styles.followText}>
              {follow ? 'Seguindo' : 'Seguir'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dividerLineContentBlock} />
      </View>
    );
  }
}
export default CardAmigos;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '85%',
  },
  contentBlock: {
    marginVertical: '2%',
    position: 'relative',
    height: 77,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  contentBlockImage: {
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
  },
  headerContentBlock: {
    flex: 1,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    color: colors.aratuBlack,
  },
  followContentBlock: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  followText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: colors.aratuWhite,
  },
  dividerLineContentBlock: {
    height: 1,
    backgroundColor: colors.aratuGray,
  },
});

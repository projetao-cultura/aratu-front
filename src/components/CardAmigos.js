import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class CardAmigos extends Component {
  render() {
    return (
      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{uri: this.props.imageUri}} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>{this.props.name}</Text>
        <TouchableOpacity
          style={styles.followContentBlock}
          onPress={handleButtonClick}>
          <Text style={styles.text}>
            {this.props.follow ? 'Seguindo' : 'Seguir'}
          </Text>
        </TouchableOpacity>
        <View style={styles.dividerLineContentBlock} />
      </View>
    );
  }
}
export default CardAmigos;

const styles = StyleSheet.create({
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
    color: colors.aratuBlack,
  },
  followContentBlock: {
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
    color: colors.aratuRed,
  },
  dividerLineContentBlock: {
    position: 'absolute',
    height: 0,
    left: 32,
    right: 34,
    bottom: 0,
    borderWidth: 1,
    borderColor: colors.aratuGray,
  },
});

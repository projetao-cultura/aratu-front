import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../assets/colors/colors.js';

class CardPerfil extends Component {
  renderStars = rating => {
    const stars = [];
    if (rating !== null) {
      for (let i = 0; i < rating; i++) {
        stars.push(<Icon key={i} name="star" style={styles.starIcon} />);
      }
    }
    return stars;
  };

  formatTime = time => {
    const parts = time.split('-'); // Split the date string by '-'
    const day = parts[2]; // Extract day part
    const month = parts[1]; // Extract month part
    const year = parts[0]; // Extract year part

    return `${day}/${month}/${year}`; // Return formatted date string
  };

  render() {
    const { imageUri, name, time, rating } = this.props;
    return (
      <View style={styles.container}>
      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{uri: imageUri}} style={styles.image} />
        </View>
        <View style={styles.headerContentBlock}>
          <Text style={{ fontFamily: 'Inter', fontWeight: 'bold' }}>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
            {this.renderStars(rating)}
          </View>
        </View>
        <Text style={styles.timeContentBlock}>{this.formatTime(time)}</Text>
        </View>
        <View style={styles.dividerLineContentBlock} />
      </View>
    );
  }
}
export default CardPerfil;

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
    borderRadius: 8,
  },
  headerContentBlock: {
    flex: 1,
    fontFamily: 'Inter',
    fontSize: 16,
    color: colors.aratuBlack,
  },
  timeContentBlock: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    color: colors.aratuRed,
  },
  starIcon: {
    color: colors.aratuYellow,
    marginRight: 5,
  },
   dividerLineContentBlock: {
    height: 1,
    backgroundColor: colors.aratuGray,
  },
});
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
    return (
      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{uri: this.props.imageUri}} style={styles.image} />
        </View>
        <Text style={styles.headerContentBlock}>{this.props.name}</Text>
        <Text style={styles.timeContentBlock}>{this.props.time}</Text>
        <View style={styles.descriptionContentBlock}>
          {this.renderStars(this.props.rating)}
        </View>
        <View style={styles.dividerLineContentBlock} />
      </View>
    );
  }
}
export default CardPerfil;

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
    color: colors.aratuRed,
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5, // Adjust the padding value as needed
  },
  starIcon: {
    color: colors.aratuYellow,
    marginRight: 5,
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

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import colors from '../assets/colors/colors.js';


class CardExplore extends Component {
  render() {
    const { name, description, imageUri } = this.props;
    
    const truncatedName = name.length > 90 ? name.substring(0, 90) + '...' : name;
    
    const truncatedDescription = description.length > 40 ? description.substring(0, 40) + '...' : description;

    return (
      <View style={{ height: 175, width: 370, borderRadius: 10, backgroundColor: colors.aratuRed, marginBottom: 30}}>
        <View style={{ flex: 3, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
          <Image
            source={{ uri: imageUri }} style={{ flex: 1, resizeMode: 'cover', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 3 }}>
          <Text style={{ color: 'white' }}>{truncatedName}</Text>
          <Text style={{ fontSize: 12, color: 'white' }}>{truncatedDescription}</Text>
        </View>
      </View>
    );
  }
}
export default CardExplore;
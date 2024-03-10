import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

class CardFeed extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={{ height: 130, width: 140, marginLeft: 20 }}>
        <View style={{ flex: 4, borderRadius: 5, overflow: 'hidden' }}>
          <Image
            source={{ uri: this.props.imageUri }}
            style={{ flex: 3, width: null, height: null, resizeMode: 'cover' }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 7, paddingTop: 5 }}>
          <Text>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
export default CardFeed;
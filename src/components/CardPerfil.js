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
    const dataEvento = new Date(time);
    const hoje = new Date();
  
    if (dataEvento > hoje) {
      // Evento no futuro
      const diferencaEmMilissegundos = dataEvento - hoje;
      const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  
      if (diferencaEmDias === 0) {
        return 'Hoje';
      } else if (diferencaEmDias === 1) {
        return 'Amanhã';
      } else if (diferencaEmDias < 7) {
        return `em ${diferencaEmDias}d`;
      } else if (diferencaEmDias < 30) {
        const semanas = Math.floor(diferencaEmDias / 7);
        return `em ${semanas}s`;
      } else if (diferencaEmDias < 365) {
        const meses = Math.floor(diferencaEmDias / 30);
        return `em ${meses}m`;
      } else {
        const anos = Math.floor(diferencaEmDias / 365);
        return `em ${anos}a`;
      }
    } else {
      // Evento no passado
      const diferencaEmMilissegundos = hoje - dataEvento;
      const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
  
      if (diferencaEmDias === 0) {
        return 'Hoje';
      } else if (diferencaEmDias === 1) {
        return 'Ontem';
      } else if (diferencaEmDias < 7) {
        return `há ${diferencaEmDias}d`;
      } else if (diferencaEmDias < 30) {
        const semanas = Math.floor(diferencaEmDias / 7);
        return `há ${semanas}s`;
      } else if (diferencaEmDias < 365) {
        const meses = Math.floor(diferencaEmDias / 30);
        return `há ${meses}m`;
      } else {
        const anos = Math.floor(diferencaEmDias / 365);
        return `há ${anos}a`;
      }
    }
  };
  


  render() {
    const { imageUri, name, time, local } = this.props;

    return (
      <View style={styles.container}>
      <View style={styles.contentBlock}>
        <View style={styles.contentBlockImage}>
          <Image source={{uri: imageUri}} style={styles.image} />
        </View>
        <View style={styles.headerContentBlock}>
          <Text style={{ fontFamily: 'Inter', fontWeight: 'bold', color: 'black' }}>{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: 5 }}>
            {/* {rating? this.renderStars(rating) : <Text style={{ fontFamily: 'Inter', color: 'gray' }}>{local}</Text>} */}
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
    alignItems: 'center',
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
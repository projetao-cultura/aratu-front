import React from 'react';
import { View, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';


export default function Perfil() {
    return(
<View style={styles.container}>
<View style={styles.profileRectangle}>
  <View style={styles.topNavbar}>
      <Icon name="arrow-back" size={30} color="#000" />
      <Text style={styles.logo}>Aratu</Text>
      <Icon name="build-outline" size={30} color="#000" />
    </View>
  
  <View style={styles.profileContainer}>
    <View style={styles.profileInfo}>
    <Image source={require('../../assets/fotoPerfil.png')} style={styles.profileImage} />
      <Text style={styles.username}>
        João de Andrade
      </Text>
      <Text style={styles.description}>
        @joao_andrade
      </Text>
      <Text style={styles.bio}>
        Apaixonado por todas as cores que a arte pode oferecer. 🎭✨
      </Text>
    </View>
    
    <View style={styles.containerStats}>
      <View style={styles.item}>
        <Text style={styles.number}>
          20
        </Text>
        <Text style={styles.text}>
          quero ir
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.number}>
          378
        </Text>
        <Text style={styles.text}>
          já fui
        </Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.number}>
          99
        </Text>
        <Text style={styles.text}>
          gostei
        </Text>
      </View>
    </View>
  </View>
</View>
  <View style={styles.segmentedControlStructure}>
    <View style={styles.segmentedControlLeft}>
      <Text style={styles.buttonControlText}>
        Quero ir
      </Text>
    </View>
    <View style={styles.segmentedControlRight}>
      <Text style={styles.buttonControlTextSelected}>
        Já fui
      </Text>
    </View>
  </View>
  <View style={styles.contentBlock}>
    <View style={styles.contentBlockImage}>
      <Image source={ {uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} style={styles.image} />
    </View>
    <Text style={styles.headerContentBlock}>
      Quinta do Galo
    </Text>
    <Text style={styles.timeContentBlock}>
      3 dias
    </Text>

    <View style={styles.descriptionContentBlock}>
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
      <Icon name="star" />
    </View>
    <View style={styles.dividerLineContentBlock} />
  </View>
  <View style={styles.contentBlock}>
    <View style={styles.contentBlockImage}>
      <Image source={ {uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} } style={styles.image} />
    </View>
    <Text style={styles.headerContentBlock}>
      STU Nacional
    </Text>
    <Text style={styles.timeContentBlock}>
      7 dias
    </Text>
    <Text style={styles.descriptionContentBlock}>
      <Icon name="star"/><Icon name="star"/><Icon name="star"/>
    </Text>
    <View style={styles.dividerLineContentBlock} />
  </View>
  <View style={styles.contentBlock}>
    <View style={styles.contentBlockImage}>
      <Image source={ {uri: 'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
      } style={styles.image} />
    </View>
    <Text style={styles.headerContentBlock}>
      Show Priscilla Senna
    </Text>
    <Text style={styles.timeContentBlock}>
      14 dias
    </Text>
    <Text style={styles.descriptionContentBlock}>
    <Icon name="star"/><Icon name="star"/><Icon name="star"/><Icon name="star"/><Icon name="star"/>
    </Text>
    <View style={styles.dividerLineContentBlock} />
  </View>
    <View style={styles.bottomNavbar}>
      <View style={styles.bottomNavCircle}>
      <Icon name="home-outline" size={20} color="#000" />
      </View>
      <View style={styles.bottomNavCircle}>
      <Icon name="compass-outline" size={20} color="#000" />
      </View>
      <View style={styles.bottomNavCircle}>
      <Icon name="heart-outline" size={20} color="#000" />
      </View>
      <View style={[styles.bottomNavCircle, styles.bottomNavSelected]}>
      <Icon name="person-outline" size={20} color="#000" />
      </View>
    </View>

</View>
    
    )
}



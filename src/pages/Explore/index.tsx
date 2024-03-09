import { View, Text } from 'react-native';
import styles from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import CardExplore from '../../components/CardExplore.js';
import Navbar from '../../components/Navbar.js';

import { useNavigation } from '@react-navigation/native'; 

export default function Feed() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.exploreRectangle}>
        <Text style={styles.titulo}>Explorar eventos</Text>
        
        <View style={styles.searchContainer}>
            <Icon name="search-outline" size={20} color={'black'} style={styles.searchIcon} />
        </View>
      </View>

      <View style={styles.filtrosContainer}>
       <Text style={styles.filtrosText}> Filtrar por <Text style={styles.filtrosTextSelect}> infantil </Text></Text>
      </View>

     

      <View style={styles.scrollViewContainer}>
        <CardExplore imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Home" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
        <CardExplore imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Home" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
      </View>

      <Navbar selectedScreen={'Explore'} navigation={navigation} />

    </View>
  );
}
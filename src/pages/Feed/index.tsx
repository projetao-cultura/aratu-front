import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles';
import CardFeed from '../../components/CardFeed.js';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native'; 
import { useUser } from '../../UserContext';

export default function Feed() {
    const navigation = useNavigation();
    const { user, setUser } = useUser();

    console.log("contexto no feed");
    console.log(user);

  return (
    <View style={styles.container}>
      <View style={styles.profileRectangle}>
        <View style={styles.topNavbar}>
            <Text style={styles.logo}>aratu</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.containerText}>
            <Text style={styles.text1}>Olá, <Text style={styles.text1Highlight}>Maria</Text>!</Text>
            <Text style={styles.text2}>Visite e avalie nossos eventos!</Text>
          </View>
          <View style={styles.ellipse}>
            {/* Use Image component to display the background image */}
            <Image source={require('../../assets/fotoPerfil.png')} style={{ width: '100%', height: '100%', borderRadius: 35 }} />
          </View>
        </View>
      </View>

      <View style={styles.scrollViewContainer}>
        <ScrollView
          scrollEventThrottle={16}
          style={styles.scrollView}
        >
          <View>
            <Text style={styles.titleCarrosel}>
              Eventos populares
            </Text>
              <View style={{ height: 130 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Home"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Experiences"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Resturant"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                </ScrollView>
              </View>
            </View>
            <View>
            <Text style={styles.titleCarrosel}>
              Próximos a você
            </Text>
              <View style={{ height: 130 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Home"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Experiences"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Resturant"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                </ScrollView>
              </View>
            </View>
            <View>
            <Text style={styles.titleCarrosel}>
              Popular entre amigos
            </Text>
              <View style={{ height: 130 }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Home"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Experiences"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                                    <CardFeed imageUri={'https://images.pexels.com/photos/14481773/pexels-photo-14481773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                                        name="Resturant"
                                        onPress = {() => navigation.navigate('Detalhamento')}
                                    />
                </ScrollView>
              </View>
            </View>
          </ScrollView>
        </View>

        <Navbar selectedScreen={'Feed'} navigation={navigation} />

      
    </View>
  );
}
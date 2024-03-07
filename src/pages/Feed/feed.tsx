import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Category from './Category.js';
import { useNavigation } from '@react-navigation/native';
import { getEventosPorInteresse, getEventosProvisorio } from './api';
import { useFeed } from '../../Contexts/FeedContext';

export default function Feed() {
  const navigation = useNavigation();
  const [eventosPorInteresse, setEventosPorInteresse] = useState([]);
  const [eventosMelhorVistos, setEventosMelhorVistos] = useState([]);

  const {
    eventosAmigos, 
    eventosCategoria, 
    eventosAleatorio, 
    getEventosAmigos, 
    getEventosCategoria, 
    getEventosAleatorio 
  } = useFeed()

  useEffect(() => {
    getEventosAmigos();
    getEventosCategoria();
    getEventosAleatorio();
  }, [getEventosAmigos, getEventosCategoria, getEventosAleatorio]);

  return (
    <View style={styles.container}>
      {/* Restante do código do componente Feed */}
      {/* Use os estados eventosPorInteresse e eventosMelhorVistos para renderizar os eventos no seu componente */}
      {eventosCategoria}
    </View>
  );
}

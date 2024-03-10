import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Category from '../../components/CardFeed.js';
import { useNavigation } from '@react-navigation/native';
import { getEventosPorInteresse, getEventosProvisorio } from './api';

export default function Feed() {
  const navigation = useNavigation();
  const [eventosPorInteresse, setEventosPorInteresse] = useState([]);
  const [eventosMelhorVistos, setEventosMelhorVistos] = useState([]);

  useEffect(() => {
    // Substitua 'usuarioId' pelo ID do usuário logado
    const usuarioId = 'usuarioId';

    // Carregar eventos por interesse do usuário
    getEventosPorInteresse(usuarioId)
      .then((eventos) => setEventosPorInteresse(eventos))
      .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));

    // Carregar eventos mais bem vistos
    getEventosProvisorio()
      .then((eventos) => setEventosMelhorVistos(eventos))
      .catch((error) => console.error('Erro ao carregar eventos:', error));
  }, []);

  return (
    <View style={styles.container}>
      {/* Restante do código do componente Feed */}
      {/* Use os estados eventosPorInteresse e eventosMelhorVistos para renderizar os eventos no seu componente */}
    </View>
  );
}

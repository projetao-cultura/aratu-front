import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardExplore from '../../components/CardExplore.js';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native'; 
import { handleExplorer } from '../Explore/handle.tsx';

// Função para obter o rótulo de um determinado valor
const getLabelForValue = (value, filterOptions) => {
  const option = filterOptions.find(option => option.value === value);
  return option ? option.label : value;
};

export default function Feed() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [filterOptions] = useState([
    { value: null, label: 'Nenhum' },
    { value: "SAUDE_BEM_ESTAR", label: "Saúde e Bem-Estar" },
    { value: "MODA_BELEZA", label: "Moda e Beleza" },
    { value: "CURSOS_WORKSHOPS", label: "Cursos e Workshops" },
    { value: "GASTRONOMIA", label: "Gastronomia" },
    { value: "CONGRESSOS_PALESTRAS", label: "Congressos e Palestras" },
    { value: "ARTE_CINEMA_LAZER", label: "Arte, Cinema e Lazer" },
    { value: "ESPORTES", label: "Esportes" },
    { value: "FESTAS_SHOWS", label: "Festas e Shows" },
    { value: "RELIGIAO_ESPIRITUALIDADE", label: "Religião e Espiritualidade" }
  ]);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0].value);
  const [eventos, setEventos] = useState([]);

  const handleSearchIconClick = async () => {
    const categoriesResponse = await handleExplorer(searchText, selectedFilter);
    
    if (categoriesResponse && categoriesResponse.data) {
      const categories = categoriesResponse.data;
      setEventos(categories); // Atualiza o estado com as categorias recebidas da API
    } else {
      console.error("Erro ao buscar categorias");
    }
  };

  const handleFilterClick = async () => {
    const currentIndex = filterOptions.findIndex(option => option.value === selectedFilter);
    const nextIndex = (currentIndex + 1) % filterOptions.length;
    setSelectedFilter(filterOptions[nextIndex].value);

    const categoriesResponse = await handleExplorer(searchText, filterOptions[nextIndex].value);
    
    if (categoriesResponse && categoriesResponse.data) {
      const categories = categoriesResponse.data;
      setEventos(categories); // Atualiza o estado com as categorias recebidas da API
    } else {
      console.error("Erro ao buscar categorias");
    }
  };

  useEffect(() => {
    // Chamada inicial para preencher os eventos quando o componente for montado
    const fetchInitialData = async () => {
      const categoriesResponse = await handleExplorer(searchText, selectedFilter);
      
      if (categoriesResponse && categoriesResponse.data) {
        const categories = categoriesResponse.data;
        setEventos(categories); // Atualiza o estado com as categorias recebidas da API
      } else {
        console.error("Erro ao buscar categorias");
      }
    };

    fetchInitialData();
  }, []); // O segundo argumento [] garante que a função só seja chamada uma vez, quando o componente é montado

  const handleCardPress = (eventId) => {
    navigation.navigate('Detalhamento', { eventId });
  };

  return (
    <View style={styles.container}>
      <View style={styles.exploreRectangle}>
        <Text style={styles.titulo}>Explorar eventos</Text>
        
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Busque o evento"
            placeholderTextColor="black"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
          <TouchableOpacity onPress={handleSearchIconClick} style={styles.searchIconContainer}>
            <Icon name="search-outline" size={25} color={'black'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.filtrosContainer}>
        <TouchableOpacity onPress={handleFilterClick}>
          <Text style={styles.filtrosText}> Filtrar por <Text style={styles.filtrosTextSelect}>{getLabelForValue(selectedFilter, filterOptions)}</Text></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollViewContainer}>
        <ScrollView scrollEventThrottle={16} style={styles.scrollView} >
          {eventos.map((category, index) => (
            <CardExplore
              key={index}
              imageUri={category.banner}
              name={category.nome}
              description={category.descricao}
              eventId={category.id}
              onPress={handleCardPress}
            />
          ))}
        </ScrollView>
      </View>

      <Navbar selectedScreen={'Explore'} navigation={navigation} />
    </View>
  );
}

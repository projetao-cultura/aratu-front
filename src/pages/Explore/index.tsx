import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import CardExplore from '../../components/CardExplore.js';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native'; 
import { handleExplorer } from '../Explore/handle.tsx';

export default function Feed() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [filterOptions] = useState([
    "SAUDE_BEM_ESTAR",
    "MODA_BELEZA",
    "CURSOS_WORKSHOPS",
    "GASTRONOMIA",
    "CONGRESSOS_PALESTRAS",
    "ARTE_CINEMA_LAZER",
    "ESPORTES",
    "FESTAS_SHOWS",
    "RELIGIAO_ESPIRITUALIDADE"
  ]);
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  const [eventos, setEventos] = useState([]);

  const handleSearchIconClick = async () => {
    const categoriesResponse = await handleExplorer(searchText, selectedFilter );
    
    
    if (categoriesResponse && categoriesResponse.data) {
      const categories = categoriesResponse.data;
      setEventos(categories); // Atualiza o estado com as categorias recebidas da API
    } else {
      console.error("Erro ao buscar categorias");
    }
  };

  const handleFilterClick = () => {
    const currentIndex = filterOptions.indexOf(selectedFilter);
    const nextIndex = (currentIndex + 1) % filterOptions.length;
    setSelectedFilter(filterOptions[nextIndex]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.exploreRectangle}>
        <Text style={styles.titulo}>Explorar eventos</Text>
        
        <TextInput
          style={styles.searchContainer}
          placeholder="Busque o evento"
          placeholderTextColor="black"
          value={searchText}
          onChangeText={text => setSearchText(text)} // Atualiza o estado com o texto do TextInput
        />
        
        <TouchableOpacity onPress={handleSearchIconClick}>
          <Icon name="search-outline" size={25} color={'black'} style={styles.searchIcon} />
        </TouchableOpacity>
        
      </View>

      <View style={styles.filtrosContainer}>
        <TouchableOpacity onPress={handleFilterClick}>
          <Text style={styles.filtrosText}> Filtrar por <Text style={styles.filtrosTextSelect}>{selectedFilter}</Text></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.scrollViewContainer}>
        {/* Mapeia as categorias recebidas da API e renderiza um CardExplore para cada uma */}
        {eventos.map((category, index) => (
          <CardExplore
            key={index}
            imageUri={category.banner}
            name={category.nome}
            description={category.descricao}
          />
        ))}
      </View>

      <Navbar selectedScreen={'Explore'} navigation={navigation} />
    </View>
  );
}

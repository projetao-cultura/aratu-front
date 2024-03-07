import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface SelectedCategories {
  [key: string]: boolean;
}


const categories = [
  { key: 'Carnaval', link: 'https://static-00.iconduck.com/assets.00/party-popper-emoji-2045x2048-3cdxvcsw.png' },
  { key: 'Infantil', link: 'https://symbl-world.akamaized.net/i/webp/4f/c36fa4d73da1fcc3952556fe34055d.webp' },
  { key: 'Teatro', link: 'https://images.emojiterra.com/google/android-12l/512px/1f3ad.png' },
  { key: 'Cinema', link: 'https://images.emojiterra.com/google/android-12l/512px/1f37f.png' },
  { key: 'Circo', link: 'https://images.emojiterra.com/google/android-12l/512px/1f3aa.png' },
  { key: 'Gastronomia', link: 'https://images.emojiterra.com/google/android-12l/512px/1f354.png' },
  { key: 'Esportes', link: 'https://i.pinimg.com/originals/f6/ee/a0/f6eea0e9c5ec8b67cb29ac2a436a0d88.png' },
  { key: 'Shows', link: 'https://images.emojiterra.com/google/android-12l/512px/1f3b8.png' },
  { key: 'Religião', link: 'https://images.emojiterra.com/google/android-oreo/512px/1f64f.png' },
  { key: 'Comédia', link: 'https://www.imagensempng.com.br/wp-content/uploads/2021/08/01-44.png' },
  { key: 'Educação', link: 'https://images.emojiterra.com/mozilla/512px/1f393.png' },
  { key: 'Artes', link: 'https://images.emojiterra.com/google/android-12l/512px/1f5bc.png' },
];


const Interesse = () => {
  
  const [selectedCategories, setSelectedCategories] = useState<SelectedCategories>({});

  const navigation = useNavigation();

  const toggleCategory = (key: string) => {
    setSelectedCategories((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };


  const enviarInformacoes = () => {
    const userInformation = global.userInformation;
    console.log('Informações do Usuário:', userInformation);
    console.log('Categorias Selecionadas:', selectedCategories);

  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Por quais eventos você se interessa?</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.key}
            style={[
              styles.categoryButton,
              selectedCategories[category.key] ? styles.selectedCategory : {},
            ]}
            onPress={() => toggleCategory(category.key)}
          >
            <Image source={{ uri: category.link }} style={styles.img} />
            <Text style={styles.buttonText}>{category.key}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.continueButton} onPress={() => {
    enviarInformacoes();
    navigation.navigate('Feed');
  }}>
        <Text style={styles.continueButtonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6EFE4',
  },
  img: {
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  title: {
    fontFamily: 'Brixton',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  categoryButton: {
    fontWeight: 'bold',
    width: '42%',
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 2,
  },
  selectedCategory: {
    backgroundColor: '#A41623',
  },
  buttonText: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
  continueButton: {
    backgroundColor: '#A41623',
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});


export default Interesse;
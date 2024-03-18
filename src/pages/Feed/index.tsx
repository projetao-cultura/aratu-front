import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Category from '../../components/CardFeed.js';
import CardFeed from '../../components/CardFeed.js';
import Navbar from '../../components/Navbar.js';
import { useNavigation } from '@react-navigation/native';
import { getEventosPopulares, getEventosRecomendados, getEventosAmigos, getEventosCategoria, getUserInfo } from './api';
import { useUser } from '../../UserContext';
import { formatarNomeCategoria} from './helper.js'




export default function Feed() {
  const navigation = useNavigation();
  const { user, setUser } = useUser();
  const [eventosPopulares, setEventosPopulares] = useState([]);
  const [eventosRecomendados, setEventosRecomendados] = useState([]);
  const [eventosAmigos, setEventosAmigos] = useState([]);
  const [eventosCategoria, setEventosCategoria] = useState([]);
  const [tituloCategoriaAleatoria, setTituloCategoriaAleatoria] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    biografia: '',
    foto_perfil: '',
    categorias_interesse: [],
    amigos: [],
    eventos_quero_ir: [],
    eventos_fui: []
  });

  
  useEffect(() => {
    if (user && user.id) {
      //carregar informações do usuário
      getUserInfo(user.id)
      .then((userInfo) => {
        // Mapeando os dados para o formato desejado
        const formattedUserInfo = {
          id: userInfo.id,
          nome: userInfo.nome,
          email: userInfo.email,
          telefone: userInfo.telefone,
          biografia: userInfo.biografia,
          foto_perfil: userInfo.foto_perfil,
          categorias_interesse: userInfo.categorias_interesse,
          amigos: userInfo.amigos,
          eventos_quero_ir: userInfo.eventos_quero_ir,
          eventos_fui: userInfo.eventos_fui
        };

        // Atualizando o estado com os dados formatados
        setUserInfo(formattedUserInfo);
      })
      .catch((error) => console.error('Erro ao carregar informações do usuário:', error));

      // Carregar eventos por interesse do usuário
      getEventosPopulares()
        .then((eventos) => setEventosPopulares(eventos))
        .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));
      // Carregar eventos mais bem vistos
      getEventosRecomendados(user.id)
        .then((eventos) => setEventosRecomendados(eventos))
        .catch((error) => console.error('Erro ao carregar eventos:', error));
      // Carrega eventos populares entre amigos
      getEventosAmigos(user.id)
        .then((eventos) => setEventosAmigos(eventos))
        .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));
      // Carrega eventos de uma categoria aleatória do banco de dados
      // getEventosCategoria()
      //   .then((eventos) => setEventosCategoria(eventos))
      //   .catch((error) => console.error('Erro ao carregar eventos por interesse:', error));
      getEventosCategoria()
        .then((eventos) => {
            if (eventos && eventos.length > 0) {
              // Define os eventos do carrossel para a categoria aleatória
              setEventosCategoria(eventos);
              // Retira a categoria do primeiro evento e atualiza o título do carrossel
              const categoriaEvento = eventos[0].categoria;
              const tituloFormatado = formatarNomeCategoria(categoriaEvento);
              setTituloCategoriaAleatoria(tituloFormatado);
            }
        }).catch((error) => {
          console.error('Erro ao carregar eventos da categoria aleatória:', error);
        });
    }

  }, [user.id]);


  return (
    <View style={styles.container}>
      
        <View style={styles.topNavbar}>
            <Text style={styles.logo}>aratu</Text>
        </View>
        <View style={styles.profileRectangle}>
        <View style={styles.profileContainer}>
          <View style={styles.containerText}>
            <Text style={styles.text1}>Olá, <Text style={styles.text1Highlight}>{user.nome}</Text>!</Text>
            <Text style={styles.text2}>Visite e avalie nossos eventos!</Text>
          </View>
          
          <View style={styles.ellipse}>
          
          <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
            {/* Use Image component to display the background image */}
            <Image  source={{ uri: userInfo.foto_perfil }} style={{ width: '100%', height: '100%', borderRadius: 35 }} />
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
      
      <View style={styles.scrollViewContainer}>
        <ScrollView scrollEventThrottle={16} style={styles.scrollView} >

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.titleCarrosel}>
              Eventos populares
            </Text>
            <View style={{ height: 130 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              {eventosPopulares.map((category, index) => (
                  <CardFeed
                    key={`populares-${category.id}`} // Chave única
                    imageUri={category.banner}
                    name= {category.nome}
                    onPress = {() => navigation.navigate('Detalhamento', { eventId: category.id })}
                  />
                ))}          
              </ScrollView>
            </View>
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.titleCarrosel}>
              Recomendados para você
            </Text>
            <View style={{ height: 130 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                {eventosRecomendados.map((category, index) => (
                    <CardFeed
                      key={`recomendados-${category.id}`} // Chave única
                      imageUri={category.banner}
                      name= {category.nome}
                      onPress = {() => navigation.navigate('Detalhamento', { eventId: category.id })}
                    />
                ))}          
              </ScrollView>
            </View>
          </View>
          
          <View>
            {/* Se userInfo estiver carregado e houver amigos */}
            {userInfo && userInfo.amigos.length > 0 && (
              <View style={{ marginBottom: 20 }}>
                <Text style={styles.titleCarrosel}>
                  Popular entre amigos
                </Text>
                <View style={{ height: 130 }}>
                  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {eventosAmigos.map((category, index) => (
                      <CardFeed
                        key={`amigos-${category.id}`} // Chave única
                        imageUri={category.banner}
                        name={category.nome}
                        onPress = {() => navigation.navigate('Detalhamento', { eventId: category.id })}
                      />
                    ))}
                  </ScrollView>
                </View>
              </View>
            )}
          </View>

          <View style={{ marginBottom: 20 }}>
            <Text style={styles.titleCarrosel}>
              {tituloCategoriaAleatoria}
            </Text>
            <View style={{ height: 130 }}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
              {eventosCategoria.map((category, index) => (
                  <CardFeed
                    key={`categoria-${category.id}`} // Chave única
                    imageUri={category.banner}
                    name= {category.nome}
                    onPress = {() => navigation.navigate('Detalhamento', { eventId: category.id })}
                  />
                ))}          
              </ScrollView>
            </View>
          </View>

        </ScrollView>
      </View>

        <Navbar selectedScreen={'Feed'} navigation={navigation} />

      
    </View>
  );
}

import { StyleSheet, Platform, StatusBar } from 'react-native';
import colors from '../../assets/colors/colors.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.aratuBeige,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    color: '#000000',
    top: '5%',
  },
  exploreRectangle: {
    position: 'absolute',
    height: '17%',
    width: '100%',
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    paddingStart: '5%',
    paddingEnd: '1%',
    justifyContent: 'center',
    backgroundColor: colors.aratuYellow,
  },
  searchContainer: {
    marginTop: '7%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50, // Altura do searchContainer
    width: '95%',
    backgroundColor: colors.aratuDarkBeige,
    borderRadius: 25, // Metade da altura para garantir um círculo
  },
  
  searchInput: {
    flex: 1,
    paddingLeft: 15, // Adicionando espaço para o texto no TextInput
  },
  
  searchIconContainer: {
    paddingHorizontal: 15, // Espaçamento horizontal para o ícone
  },
  
  scrollViewContainer: {
    top: '17.5%',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  filtrosContainer: {
    top: '17%',
    height: '5%',
    justifyContent: 'center',
  },
  filtrosText: {
    fontSize: 12,
    lineHeight: 24,
    color: '#000000',
    marginStart: '5%'
  },
  filtrosTextSelect: {
    fontSize: 12,
    lineHeight: 24,
    fontWeight: 'bold',
    color: colors.aratuRed,
  },
  // Estilos para o popup de filtro
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginBottom: 10
  },
  buttonClose: {
    backgroundColor: colors.aratuYellow,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default styles;

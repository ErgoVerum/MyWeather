import React, { createContext, useContext, useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width; //Variavel para puxar a largura da tela. NÃO MEXER.
const Pagina01 = ({ route }) => 
{
const navigation = useNavigation();
const [isSideMenuOpen, setSideMenuOpen] = useState(false);
const [isInputFocused, setInputFocused] = useState(false); // Faz o texto da barra de pesquisa sumir. NÃO MEXER.
const navigateToPagina02 = (cityName) => {navigation.navigate('Pagina02', { cityName }); //Navega para a Pagina2
};
const toggleSideMenu = () => {setSideMenuOpen(!isSideMenuOpen);};
const closeSideMenu = () => {setSideMenuOpen(false);};

  return (    
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleSideMenu}>
        <View style={styles.horizontalLine}></View>
        <View style={styles.horizontalLine}></View>
        <View style={styles.horizontalLine}></View>
      </TouchableOpacity>
      {isSideMenuOpen && (
  <View style={styles.sideMenu}>
    <TouchableOpacity style={styles.overlay} onPress={closeSideMenu} />
    <View style={styles.menuContent}>
      <TouchableOpacity style={styles.closeButton} onPress={closeSideMenu}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <View style={styles.horizontalLineWhite}></View>
      <Text style={styles.menuText}>Histórico</Text>
      <View style={styles.horizontalLineWhite}></View>
      <TouchableOpacity style={styles.sideMenuButton} onPress={() => navigateToPagina02('Brasilia')}>
        <Text style={styles.sideMenuButtonText}>Brasilia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideMenuButton} onPress={() => navigateToPagina02('São Paulo')}>
        <Text style={styles.sideMenuButtonText}>São Paulo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideMenuButton} onPress={() => navigateToPagina02('Rio de Janeiro')}>
        <Text style={styles.sideMenuButtonText}>Rio de Janeiro</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideMenuButton} onPress={() => navigateToPagina02('Serra do Navio')}>
        <Text style={styles.sideMenuButtonText}>Serra do Navio</Text>
      </TouchableOpacity>
    </View>
  </View>
)}
      <View style={styles.imageStack}>
        <Image  source={require('../assets/City.jpg')} style={{ width: screenWidth, height: 201 }}/>
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Selecione a Cidade</Text>
        </View>
      </View>        
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigateToPagina02('Brasilia')}>
          <Image source={require('../assets/CityIcon.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>Brasilia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigateToPagina02('São Paulo')}>
          <Image source={require('../assets/CityIcon.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>São Paulo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigateToPagina02('Rio de Janeiro')}>
          <Image source={require('../assets/CityIcon.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>Rio de Janeiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button1]} onPress={() => navigateToPagina02('Serra do Navio')}>
          <Image source={require('../assets/CitySmall.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>Serra do Navio</Text>
        </TouchableOpacity>
      </View>
     <View style={styles.searchContainer}>
<TextInput
  style={styles.searchInput}
  placeholder={isInputFocused ? '' : 'Pesquisar cidade...'}
  onFocus={() => setInputFocused(true)}
  onBlur={() => setInputFocused(false)}
  placeholderTextColor="#FFFFFF"
/>
        <TouchableOpacity onPress={() => navigateToPagina02('Serra do Navio')}>
          <Image source={require('../assets/Lupa.png')} style={styles.searchIcon}/> 
        </TouchableOpacity>
  
</View>
<View style={styles.smallImagesContainer}>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
  <Image source={require('../assets/CityBottom.png')}style={styles.smallImage}/>
</View>
    </View>  
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009977',
  },
  imageStack: {
    position: 'relative',
  },
  rectangle: {
  width: screenWidth,
  height: 75,
  backgroundColor: '#006044',
  borderWidth: 2, 
  borderColor: '#2e2828',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
},
  rectangleText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white', 
    width: '48%', 
  },
  buttonImage: {
    width: 30,
    height: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  //Se der, criar um style universal para os botoes. Mas por enquanto, funciona desse jeito
  button1: {
    borderColor: '#FF5733',
    backgroundColor: '#000000', 
  },
  searchContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: 20,
  marginTop: 40,
},
searchIcon: {
  width: 20,
  height: 20,
  marginLeft: 10, 
},
searchInput: {
  flex: 1,
  borderBottomWidth: 1,
  borderBottomColor: 'white',
  color: 'white',
  fontSize: 20,
  paddingVertical: 0,
},
smallImagesContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#009977', 
},
smallImage: {
  width: 53,
  height: 30, 
  resizeMode: 'contain', 
  marginHorizontal: 1,
},
  menuButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 30,
    height: 30,
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    zIndex: 1,
  },
  horizontalLine: {
    width: '80%',
    height: 2,
    backgroundColor: 'black',
    marginVertical: 2,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContent: {
    backgroundColor: 'grey',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 25,
    height: 25,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 20,
    color: 'black',
  },
  horizontalLineWhite: {
    width: '90%',
    height: 2,
    backgroundColor: 'white',
    marginVertical: 1,
  },
  menuText: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
  },
   sideMenu: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
},
    sideMenuButton: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 5, 
    borderRadius: 5, 
      marginTop: 10,
  },
  sideMenuButtonText: {
    color: 'white',
    fontSize: 16, 
    textAlign: 'center', 
  },
});

export default Pagina01;

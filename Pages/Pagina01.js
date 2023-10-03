import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity, TextInput } from 'react-native';

const screenWidth = Dimensions.get('window').width; //Variavel para puxar a largura da tela. NÃO MEXER.

const Pagina01 = () => {
    const [isInputFocused, setInputFocused] = useState(false); // Faz o texto da barra de pesquisa sumir. NÃO MEXER.
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={require('../assets/City.jpg')}
          style={{ width: screenWidth, height: 201 }}
        />
        <View style={styles.rectangle}>
          <Text style={styles.rectangleText}>Selecione a Cidade</Text>
        </View>
        <Image
          source={require('../assets/Sun.png')}
          style={styles.overlayImage}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.button1]}>
          <Image
            source={require('../assets/CityIcon.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Brasilia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button2]}>
          <Image
            source={require('../assets/CityIcon.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>São Paulo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.button3]}>
          <Image
            source={require('../assets/CityIcon.png')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Rio de Janeiro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.button4]}>
          <Image
            source={require('../assets/CitySmall.png')}
            style={styles.buttonImage}
          />
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
  <Image
    source={require('../assets/Lupa.png')}
    style={styles.searchIcon}
  />
  {/* Add logic here to navigate to another page when the magnifying glass is clicked */}
</View>
<View style={styles.smallImagesContainer}>
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
  overlayImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 35,
    height: 35,
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
  button2: {
    borderColor: '#FF5733',
    backgroundColor: '#000000', 
  },
  button3: {
    borderColor: '#FF5733',
    backgroundColor: '#000000', 
    marginTop: 10, 
  },
  button4: {
    borderColor: '#FF5733',
    backgroundColor: '#000000', 
    marginTop: 10, 
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
  height: 50, 
  resizeMode: 'contain', 
  marginHorizontal: 1,
},
});

export default Pagina01;

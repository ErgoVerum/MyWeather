import React, { useState } from 'react';
import { View, StyleSheet,TouchableOpacity, Image, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

const Pagina02 = ({ route }) => {
  const currentDate = new Date(); //Puxa a hora atual. Não mexer.
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  const currentTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const { cityName } = route.params; // Transfere o nome da cidade para a Pagina 2.
  const navigation = useNavigation();
  const navigateToPagina01 = () => {navigation.navigate('Pagina01'); //Para voltar a pagina 01
  };
  const toggleSideMenu = () => {setSideMenuOpen(!isSideMenuOpen);};
  const closeSideMenu = () => {setSideMenuOpen(false);};
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);

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
    <View style={styles.ImagemStack}>
        <Image source={require('../assets/Mountain.png')} style={{ width: screenWidth, height: 201 }} />
        <Image source={require('../assets/Park.png')} style={styles.overlayImage} />
      </View>
            <View style={styles.Retangulo}>
  <Text style={styles.CidadeTexto}>{cityName}</Text>
            </View>
<View style={styles.Retangulo}>
  <View style={styles.row}>
    <View style={styles.iconSquare}>
      <Image source={require('../assets/Cloud.png')} style={styles.smallIcon} />
      <View style={styles.iconOverlay}>
        <Text style={styles.redX}>X</Text>
      </View>
    </View>
    <View style={styles.iconSquare}>
      <Image source={require('../assets/WaterDrop.png')} style={styles.smallIcon} />
      <View style={styles.iconOverlay}>
        <Text style={styles.percentage}>27%</Text>
      </View>
    </View>
    <View style={styles.centeredContent}>
      <Text style={[styles.dateTime, styles.centeredText]}>
        {currentMonth} {currentYear}
      </Text>
      <Text style={[styles.currentTime, styles.centeredText]}>{currentTime}</Text>
    </View>
    <View style={styles.centerContent}>
      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>32°C</Text>
        <Image source={require('../assets/Sun.png')} style={styles.sunIcon} />
      </View>
    </View>
  </View>  
</View>
      <View style={styles.Retangulo}>
        <View style={styles.HourRow}>
        <Text style={styles.Bodytext}>06:00</Text>
        <Text style={styles.Bodytext}>10:00</Text>
        <Text style={styles.Bodytext}>14:00</Text>
        <Text style={styles.Bodytext}>18:00</Text>
        <Text style={styles.Bodytext}>22:00</Text>
      </View>
      <View style={styles.HourRow}>
        <Text style={styles.ValuesText}>18°C</Text>
        <Text style={styles.ValuesText}>24°C</Text>
        <Text style={styles.ValuesText}>34°C</Text>
        <Text style={styles.ValuesText}>32°C</Text>
        <Text style={styles.ValuesText}>24°C</Text>
      </View>
      </View>

      <View style={styles.Retangulo}>
        <View style={styles.WeekRow}>
        <Text style={styles.Bodytext}>Dom</Text>
        <Text style={styles.Bodytext}>Seg</Text>
        <Text style={styles.Bodytext}>Ter</Text>
        <Text style={styles.Bodytext}>Qua</Text>
        <Text style={styles.Bodytext}>Qui</Text>
        <Text style={styles.Bodytext}>Sex</Text>
        <Text style={styles.Bodytext}>Sab</Text>
      </View>
      <View style={styles.HourRow}>
        <Text style={styles.ValuesText}>31°C</Text>
        <Text style={styles.ValuesText}>36°C</Text>
        <Text style={styles.ValuesText}>34°C</Text>
        <Text style={styles.ValuesText}>33°C</Text>
        <Text style={styles.ValuesText}>31°C</Text>
        <Text style={styles.ValuesText}>39°C</Text>
        <Text style={styles.ValuesText}>38°C</Text>
      </View>
      </View>  
        <View style={styles.ReturnDiv}>
          <View style={styles.iconOverlay}>
          <TouchableOpacity onPress={navigateToPagina01}>
          <Image source={require('../assets/ReturnIcon.png')} style={styles.IconeSmallReturn}/>   
          </TouchableOpacity>
          </View> 
        </View>    
</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009977',
  },
  Retangulo: {
    width: screenWidth,
    backgroundColor: '#006044',
    borderRadius: 10,
    borderWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: '#2e2828',
    marginBottom: 8,   
  },
  CidadeTexto: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',    
  },
  ImagemStack: {
    position: 'relative',
  },
  overlayImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screenWidth,
    height: 201,
  },
  iconOverlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#2e2828',
  borderRadius: 6,
},
percentage: {
  color: 'white',  
  fontSize: 18,
  textShadowColor: 'black', 
  textShadowOffset: { width: 2, height: 2 },  
  textShadowRadius: 5, 
  textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
},
 row: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: 8,
},
  centeredContent: {
    flex: 1,
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
  },
  iconSquare: {
    width: 40,
    height: 40,
    backgroundColor: '#134b5f',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  smallIcon: {
    width: 30,
    height: 30,
  },
  IconeSmallReturn: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  redX: {
    color: 'red',
    fontSize: 20,
    textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
  },
  dateTime: {
    color: 'white',
    fontSize: 16,
    textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
  },
  currentTime: {
    color: 'white',
    fontSize: 16,
    marginTop: 4,
    textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
  },
  temperature: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#134b5f',
    borderRadius: 6,
  },
  temperatureText: {
    color: 'white',
    fontSize: 26,
    textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
  },
  sunIcon: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },
  HourRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 6,
    marginRight: 2,
  },
  WeekRow: {
     flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 9,
    marginRight: 10,
  },
  Bodytext: {
    color: 'white',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
  },
  ValuesText: {
    color: 'gold',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadow:'-1px -1px 0 black, 1px -1px 0 black,-1px 1px 0 black, 1px 1px 0 black;'
  },  
  ReturnDiv: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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

export default Pagina02;

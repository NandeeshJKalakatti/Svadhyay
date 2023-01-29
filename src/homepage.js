import React, { Component } from 'react';
import { View, Text ,ImageBackground,TouchableOpacity} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
class HomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
         <LinearGradient
        colors={['#4200FF','#343CFC']}
        start={[10, -110]}
        end={[1, -100]}
        style={styles.rectangleBox}
        
        
      >
        <View>
        
        </View>
         
       
         
         <ImageBackground
        source={require('../img/reg.png')}
        style={styles.rect}
      >
        <Text style={styles.txt}>Svadhyay</Text>
      </ImageBackground>
       
      </LinearGradient>
     
      <TouchableOpacity onPress={Text} style={styles.but}>
      <Text>Click me</Text>
    </TouchableOpacity>
      </View>
      
    );
  }
}
const myColor = '#343CFC';
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleBox: {
    width: 420,
    height: 650,
    top:-350,
    borderRadius: 100,
    backgroundColor: myColor,
    // backgroundColor: rgba(66, 0, 255, 1)
    // ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect : {
    width:330 ,
    height: 250,
    alignItems :'center',
    backgroundColor:'white',
    // backgroundimage:'',
    top: 280,
    Left:30,
    borderRadius:100,

  },
  txt :{
    justifyContent: 'center',
    letterSpacing: 2,
    
    fontSize:60,
    color: 'white',
    top:-100,
    
  },
  but:{width:250,
    height: 48,
    Top:507,
    Left:51,

  }
};

export default HomePage;

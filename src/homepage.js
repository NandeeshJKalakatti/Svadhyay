import React, { Component } from 'react';
import { View, Text ,ImageBackground,TouchableOpacity} from 'react-native';
//rnfe
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
     

      <TouchableOpacity onPress={Text}>
      <View style={{ height: 20 }} />
                <Text style={styles.but}>Notes
                </Text>
                <View style={{ height: 20 }} />
                <Text style={styles.but}>Roadmaps
                </Text>
                <View style={{ height: 20 }} />
                <Text style={styles.but}>Qution paper
                </Text>
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
    top:-250,
    borderRadius: 100,
    backgroundColor: myColor,
    // backgroundColor: rgba(66, 0, 255, 1)
    // ,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15
  },
  head1:{
    fontSize:30,
    color: '#E74C3C',
    fontWeight:'700',
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
    elevation:13,
    fontWeight:'200',
    fontSize:50,
    color: 'white',
    marginVertical:10,
      marginHorizontal:10,
      borderColor:'black',
      borderRadius:70,
    top:-100,
   
    
  },
  but:{
    top:-150,
    fontSize:16,
    width:320,
    height: 50,
      colour:'#E74C3C',
      textAlign:'center',
      alignItems:'flex-end',
      marginVertical:10,
      marginHorizontal:60,
      fontWeight:'700',
      backgroundColor:'#fff',
      borderColor:'red',
      borderEndColor:'red',
      borderRadius:50,
      padding:12,
       elevation :10, 
       
       

  }
};

export default HomePage;

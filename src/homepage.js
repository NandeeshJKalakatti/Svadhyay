import React, { Component } from 'react';
import { View, Text ,ImageBackground,TouchableOpacity} from 'react-native';
//rnfe
import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native';
// const navigation = useNavigation();

//   const handleButtonPress = () => {
//     navigation.navigate('Scheme.js');
//   };

  

const HomePage = ({navigation}) => {
    return (
      
     
         
        <View style={styles.container}>
        
           <View style={styles.rectangleBox}>
           <ImageBackground
          source={require('../img/Logo3.png')}
          style={styles.Log}
        >
          
        </ImageBackground>
           
        <ImageBackground
          source={require('../img/reg.png')}
          style={styles.rect}
        >
          
        </ImageBackground>
        
           </View >
         
       
         
        
       
      
        
     
       
     
     

      <TouchableOpacity onPress={()=> navigation.navigate('Br')} style={styles.touch}  >
     
                <Text style={styles.but}>Notes
                </Text>
                <View style={{ height: 20 }} />
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=> navigation.navigate('Br')} style={styles.touch}>
               
                <Text style={styles.but}>Roadmaps
                </Text>
                <View style={{ height: 20 }} />
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=> navigation.navigate('Br')} style={styles.touch}>
                
                <Text style={styles.but}>Question paper
                </Text>
                <View style={{ height: 20 }} />
                
                
            </TouchableOpacity> 
      </View>
      
    );
  
}
const ElevatedView = ({ children, style }) => (
  <View style={[{ elevation:100, shadowColor: 'white' }, style]}>
    {children}
  </View>
);
const myColor = '';
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
    
  },
  touch:{
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    top:-100,
  },
  rectangleBox: {
    // width: 420,
    // height: 650,
   top:-250,
    // borderRadius: 100,
    // backgroundColor: myColor,
    // // backgroundColor: rgba(66, 0, 255, 1)
    // // ,
    // alignItems: 'center',
    // justifyContent: 'center',
    // elevation: 15
    width:420,
    height:650,
    backgroundColor: '#fbb13c',
    borderRadius:100,
    elevation:20,
  },
  head1:{
    fontSize:30,
    color: '#E74C3C',
    fontWeight:'700',
},
  rect : {
    width:342,
    height: 250,
    alignItems :'center',
   
    // backgroundimage:'',
    top: 450,
    right:-40,
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
    // top:-80,
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
      
       
       

  },
  Log:{
    
    width:300,
    height: 55,
    alignItems :'center',
    // backgroundColor:'white',
    // backgroundimage:'',
    top: 400,
    right:-60,
    borderRadius:100,
    ElevatedView
    
   
    
   
  }
};

export default HomePage;

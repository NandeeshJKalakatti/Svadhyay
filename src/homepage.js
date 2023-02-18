import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
//rnfe

import { widthPercentageToDP as wp,heightPercentageToDP as hp, } from 'react-native-responsive-screen';



const HomePage = ({navigation}) => {
    return (
      
     
         
        <View style={styles.container}>
        <View style={styles.inner}>
        {/* <View style={{ height: 20 }} /> */}
           <View style={styles.rectangleBox}>
           <ImageBackground
          source={require('../img/Logo3.png')}
          style={styles.Log}
        >      
         </ImageBackground>  
         <View style={styles.rect}>
          <View >
          <ImageBackground
        source={require('../img/br.png')}
        style={styles.Log2}
         ></ImageBackground>


          </View>
        

         </View>
        {/* <ImageBackground
          source={require('../img/reg.png')}
          style={styles.rect}
        > */}
        {/* </ImageBackground> */}
           </View >
           <View style={{ height: 20 }} />
           {/* <View style={{ height: 20 }} /> */}
           
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
    backgroundColor:'#fff',
   width:'100%',
  },
  inner:{
     backgroundColor:'#fff',
     alignItems: 'center',
     justifyContent:'center',
     width:wp(200),
    height:hp(100),

  },
  touch:{
    flex:0,
    alignItems: 'center',
    justifyContent: 'center',
    top:-100,
  },
  rectangleBox: {
   
   top:-250,
    width:wp(100),
    height:hp(85),
    backgroundColor: '#fbb13c',
    borderRadius:100,
    elevation:20,
  },
  Log2:{
    alignItems :'center',
   
   
    top:20,
   
    // borderRadius:400,
    width:198,
    height:151,
   
  },
  head1: {
    fontSize: 30,
    color: '#E74C3C',
    fontWeight:'700',
},
  rect : {
    
    alignItems :'center',
   
    backgroundColor:'#ffff',
    top: 500,
    right:-40,
    borderRadius:400,
    width:wp(80),
    height:hp(29),
    elevation:90
  },
  txt: {
    justifyContent: 'center',
    letterSpacing: 2,
    elevation: 13,
    fontWeight: '200',
    fontSize: 50,
    color: 'white',
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: 'black',
    borderRadius: 70,
    top: -100,


  },
  but: {
    
    fontSize: 16,
    width: 320,
    height: 50,
    colour: '#E74C3C',
    textAlign: 'center',
    alignItems: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 60,
    fontWeight: '700',
    backgroundColor: '#fff',
    borderColor: 'red',
    borderEndColor: 'red',
    borderRadius: 50,
    padding: 12,
    elevation: 10,
  },
  Log:{
    alignItems :'center',
    top: 400,
    left:(80),
    borderRadius:100,
    ElevatedView,
    width:250,
    height:45,
  }
};

export default HomePage;

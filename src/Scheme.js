import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

const Scheme = ({navigation}) => {
  return (
    <ScrollView>
    <View>
       <ImageBackground
        source={require('../img/reg.png')}
        style={styles.rect}
      >
       <Text style={styles.txt}>Scheme</Text>
      </ImageBackground>
      
      <TouchableOpacity onPress={Text}>
      <View style={{ height:30 }} />
                <Text style={styles.but}>2018 Scheme
                </Text>
               
                </TouchableOpacity>
                <TouchableOpacity onPress={Text}>
      <View style={{ height:30 }} />
                <Text style={styles.but}>2020 Scheme
                </Text>
                </TouchableOpacity>
           
            
                <TouchableOpacity onPress={Text}>
      <View style={{ height:30 }} />
                <Text style={styles.but}>2022 Scheme
                </Text>
                <View style={{ height:100 }} />
                </TouchableOpacity>
            
            
            
      </View>
      </ScrollView>
    
  )
}

export default Scheme

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect:{
    width: 420,
    height: 390,
  
    top:-20,
    borderRadius: 100,
    left:1,
    // backgroundColor: rgba(66, 0, 255, 1)
    // ,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15
  },
  txt :{
    justifyContent: 'center',
    letterSpacing: 1,
    
    fontWeight:"bold",
    fontSize:25,
    color: 'black',
    marginVertical:10,
      marginHorizontal:10,
      borderColor:'red',
      borderRadius:70,
    top:150,
    padding:8
   
    
  },
  but:{
    justifyContent:'center',
    right:12,
    top:10,
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
}
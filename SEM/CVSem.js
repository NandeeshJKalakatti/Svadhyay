import {Text, View,ImageBackground,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

const CVsem = ({navigation}) => {
  return (
     <ScrollView>
    <View>
    <View style={styles.rect2} >
         <ImageBackground
        source={require('../img/br.png')}
        style={styles.rect}
         >
        <View style={{ height:20 }} />
        <Text style={styles.txt}>CSEM</Text>
         </ImageBackground>
      </View>

      <ScrollView>
        <View>
                 <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
      <View style={{ height: 9 }} />         
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('SEMC3')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 3
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('SEMC4')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 4
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('SEMC5')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 5
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('SEMC6')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 6
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('SEMC7')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 7
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('SEMC8')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 8
                </Text>
                </TouchableOpacity>
                </View>
                <View style={{ height: 9 }} />
                <View style={{ height: 9 }} />
                </ScrollView>
      </View>
       </ScrollView>    
  )
}
export default CVsem

const styles = {
  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect: {
    width:270,
    height:205,
    top: -9, 
    left:-5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation:1
  },
  rect2: {
    width:450,
    height:370,
    backgroundColor: 'white',
    top: -20,
    borderRadius: 100,
    left:-15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20
  },
  
  txt :{
    justifyContent: 'center',
    letterSpacing: 1,
    fontWeight:"bold",
    fontSize:20,
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
    
    fontSize:16,
    width:320,
    height: 50,
      
      textAlign:'center',
     
      marginVertical:10,
      marginHorizontal:60,
      fontWeight:'700',
      backgroundColor:'#fff',
      
      
      borderRadius:50,
      padding:12,
       elevation :10, 
       
       

  }
}
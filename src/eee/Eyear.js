import { StyleSheet, Text, View,ImageBackground,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

const MYear = ({navigation}) => {
  return (
     <ScrollView>
    <View>
       <ImageBackground
        source={require('../img/reg.png')}
        style={styles.rect}
      >
       <Text style={styles.txt}>Semester</Text>
      </ImageBackground>


      <ScrollView>
        <View>
                 <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
      <         View style={{ height: 9 }} />
      
                <Text style={styles.but}>Sem 1
                </Text>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 2
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 3
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 4
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 5
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 6
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 7
                </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=> navigation.navigate('Scheme')}>
                <View style={{ height: 9 }} />
                <Text style={styles.but}>Sem 8
                </Text>
                </TouchableOpacity>
                
               
                </View>
                </ScrollView>
           
      </View>
       </ScrollView> 

    
  )
}

export default MYear

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
    top:0,
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
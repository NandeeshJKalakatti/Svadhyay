import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'

const Branch = ({ navigation }) => {
  return (
    
    <View>
      <View style={styles.rect2} >
         <ImageBackground
        source={require('../img/br.png')}
        style={styles.rect}
         >
        <View style={{ height:20 }} />
        <Text style={styles.txt}>Subject</Text>
         </ImageBackground>
      </View>
      <ScrollView>
       <View>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        {/* <View style={{ height: 9 }} /> */}
        <Text style={styles.but}>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: -5}} />
        <Text style={styles.but}>Computer Science
        </Text>
      </TouchableOpacity>
      <View style={{ height: -5 }} />
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: -5 }} />
        <Text style={styles.but}>Mechanical
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <Text style={styles.but}>E&C
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: -5 }} />
        <Text style={styles.but}>CSD
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: -5 }} />
        <Text style={styles.but}>EEE
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        
        <Text style={styles.but}>Civil
        </Text>
      </TouchableOpacity>
      <View style={{ height: 9 }} /> 
      <View style={{ height: 9 }} />
      </View>
      </ScrollView>
    </View>


  )
}

export default Branch
const ElevatedView = ({ children, style }) => (
  <View style={[{ elevation: 4, shadowColor: 'white' }, style]}>
    {children}
  </View>
);

const styles = {
  container: {
    flex: 1,
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
  
  txt: {
    justifyContent: 'center',
    letterSpacing: 1,

    fontWeight: "bold",
    fontSize: 25,
    color: 'black',
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: 'red',
    borderRadius: 70,
    top: 150,
    padding: 8


  },
  but: {
    justifyContent: 'center',
    right: 12,
    top: 0,
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



  }
}
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,ScrollView  } from 'react-native'
import React from 'react'
// import { ScrollView } from 'react-native-gesture-handler'

const Branch = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
        
      <ImageBackground
        source={require('../../img/reg.png')}
        style={styles.rect}
      >
        <Text style={styles.txt}>Subject</Text>
      </ImageBackground>
       
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Construction Management & Entrepreneurship(18CV51) 
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Analysis Of Indeterminate Structures(18CV52)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Design Of RC Structural Elements(18CV53)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <Text style={styles.but}>Basic Geotechnical Engineering(18CV54)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Municipal Waste Water Engineering(18CV55)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Highway Engineering(18CV56)
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Environmental Studies(18CIV59)
        </Text>
      </TouchableOpacity>

    </ScrollView>
  )
}

export default Branch

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rect: {
    width: 420,
    height: 390,

    top: -20,
    borderRadius: 100,
    left: 1,
    // backgroundColor: rgba(66, 0, 255, 1)
    // ,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 15
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
    top: 1,
    fontSize: 16,
    width: 320,
    height: 80,
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
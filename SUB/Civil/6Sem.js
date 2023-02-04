import { StyleSheet, Text, View, ImageBackground, TouchableOpacity,Scoral } from 'react-native'
import React from 'react'

const Branch = ({ navigation }) => {
  return (
    <View>
      <ImageBackground
        source={require('../../img/reg.png')}
        style={styles.rect}
      >
        <Text style={styles.txt}>Subject</Text>
      </ImageBackground>
       
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Design Of Steel Structural Elements(18CV61)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Applied Geotechnical Engineering(18CV62)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Hydrology And Irrigation Engineering(18CV63)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <Text style={styles.but}>Railway,Harbours,Tunnelling & Airports(18CV645)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Remote Sensing & GIS(18CV651)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Occupational Health & Safety(18CV653)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Traffic Engineering(18CV652)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Solid Waste Management(18CV642)
        </Text>
      </TouchableOpacity>
    </View>


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
    top: 0,
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
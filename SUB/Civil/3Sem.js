import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

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
        <Text style={styles.but}>Stength Of Materials (18CV32)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}> Fluids Mechanics (18CV33)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Basic surveying(18CV35)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <Text style={styles.but}>Engineering Geology
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Building Materials and Construction(18CV34)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>M3 (18MAT31)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>CPC(18CPC39/49)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}> geodetic Engineering (21CV32)
        </Text>
      </TouchableOpacity>

      
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}> Earth Resources Engineering (21CV34)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>M3 (21MAT31)
        </Text>
      </TouchableOpacity>
    </View>
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
    top: 0,
    fontSize: 16,
    width: 320,
    height:  80,
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
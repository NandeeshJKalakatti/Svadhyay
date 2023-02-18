import { StyleSheet, Text, View, ImageBackground, TouchableOpacity ,ScrollView, Button} from 'react-native'
import React from 'react'
import * as OpenAnything from "react-native-openanything"
const SEMC4 = ({ navigation }) => {
  return (
    <ScrollView>
    <View>
    <View style={styles.rect2} >
         <ImageBackground
        source={require('../../img/br.png')}
        style={styles.rect}
         >
        <View style={{ height:20 }} />
        <Text style={styles.txt}>Subject</Text>
         </ImageBackground>
      </View>
       
      <TouchableOpacity  onPress={()=> OpenAnything.Pdf('https://drive.google.com/file/d/1NScvKHUYzA8v6fnBfhw_Q-jONcqq02Il/view?usp=sharing')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Applied Hydraulics(18CV43)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Concrete Technology(18CV44)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Advanced Surveying(18CV45)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <Text style={styles.but}>Water Supply and Treatment Engineering(18CV46)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>Analysis Of determinate Structures(18cv42)
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>M4(18MAt41)
        </Text>
      </TouchableOpacity>
    
      <TouchableOpacity onPress={() => navigation.navigate('Year')}>
        <View style={{ height: 9 }} />
        <Text style={styles.but}>CPC(18CPC39/49)
        </Text>
      </TouchableOpacity>
    
    </View>

    </ScrollView>
  )
}

export default SEMC4

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  rect: {
    width:270,
    height:205,
    top: -9, 
    left:-5,
    alignItems: 'center',
    justifyContent: 'center',

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
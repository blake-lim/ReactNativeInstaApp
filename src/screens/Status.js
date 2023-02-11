import { View, Text, SafeAreaView, StatusBar,Image, TouchableOpacity, goBack } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'



const Status = ({route, navigation}) => {

  const {name, image } = route.params;

  return (
    <SafeAreaView
    style={{
      backgroundColor : 'black',
      height : '100%',
      justifyContent : 'center',
    }}
    >
      <StatusBar
      backgroundColor='black'
      barStyle='light-content'
      />
      <View
      style={{
        height : 3,
        width : '95%',
        borderWidth : 1,
        backgroundColor : 'gray',
        position : 'absolute',
        top : 18,
      }}
      >
        
      </View>
      <View style={{
        padding : 15,
        flexDirection : 'row',
        alignItems : 'center',
        position : 'absolute',
        top : 12,
        left : 0,
        width : '90%',
      }}>
      <View 
      style={{
        width : 30,
        height : 30,
        justifyContent : 'center',
        alignItems : 'center',

      }}>
        <Image 
        source={image}
        style={{
          borderRadius : 100,
          backgroundColor : 'orange',
          width : '92%',
          height : '92%',
          resizeMode : 'cover',
        }}
        />
      </View>
      <View style={{
        justifyContent : 'space-between',
        flexDirection : 'row',
        width : '100%',
      }}>
        <Text style={{
          color : 'white',
          fontSize : 15,
          paddingLeft : 10,
        }}>{name}</Text>
        <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionic name='close' style={{
          color : 'white',
          opacity : 0.6,
        }}/>
        </TouchableOpacity>
      </View>
      </View>
        <Image source={image}
        style={{
          position : 'absolute',
          width : '100%',
          height : 600,
        }}
        />
    </SafeAreaView>
  )
}

export default Status
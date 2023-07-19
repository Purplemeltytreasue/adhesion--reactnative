import { View, Text,Image } from 'react-native'
import React from 'react'

const Signup = () => {
  return (
    <View style={{
        flex:1 ,
         alignItems:'center' ,
         justifyContent:'center'}}>
        


      <Text>Signup</Text>
      <Image source={require('/Users/simo/reactnative/p1/AwesomeProject/assets/logo-2.png')} />
    </View>
  )
}

export default Signup
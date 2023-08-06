import { View, Text } from 'react-native'
import React from 'react'
import Routes from './roots'
import { NativeBaseProvider } from "native-base" ;
const App = () => {
  return (
    <NativeBaseProvider isSSR>
      <Routes/>
    </NativeBaseProvider>
  )
}

export default App
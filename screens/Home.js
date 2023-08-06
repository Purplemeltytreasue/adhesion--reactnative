import { View,StyleSheet,Button, ImageBackground} from 'react-native'
import { Image } from 'native-base';
import {Text} from 'native-base';
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const logout = () => {
    AsyncStorage.removeItem('user');
    console.log(AsyncStorage.getItem('user')._k);
};
  return (
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
        }}>
      
      <Image  width={400} resizeMode='cover' borderRadius={10} marginTop='1%' marginBottom='1%' source={require('/Users/simo/reactnative/p1/AwesomeProject/assets/imgbook.png')} />
      <Text  italic m={30} fontSize = {"md"} > La Fondation Mohammed VI pour l'avancement des travaux sociaux pour l'éducation et la 
      formation est une institution sociale marocaine dotée d'un statut public à but non lucratif, d'une personnalité morale et d'une indépendance financière, et est classée parmi les institutions et entreprises publiques stratégiques au Maroc. La création de l'institution a été annoncée le jour du Trône, dans le discours du Trône en juillet 2000,et sous réserve de la loi organisationnelle 73.00 publiée le 11 Jumada al-Awwal 1422 correspondant au 1er août 2001. L'entreprise sociale est basée dans la capitale Rabat. Le roi Mohammed VI supervise l'institution, et sa gouvernance est supervisée par l'actuel président Youssef Al-Baqali, en plus du comité de direction. 
      </Text>

      <Button

          onPress={()=> navigation.navigate('Login')}
          title="LOG OUT"
          color="#007AFF"
          accessibilityLabel="Learn more about this purple button"
          />
    </View>
  )
}
const styles = StyleSheet.create({
  input: {
    borderColor: "white",
    fontSize :16,
    color : 'white',
    width: "90",
    marginTop:10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
  container: {
    margin :0,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBackground :{
  alignItems :'center',
  width : '100%',
  height :'100%',
  display : "flex",
  justifyContent : 'center',
  }
  
});

export default Home
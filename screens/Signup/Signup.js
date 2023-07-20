import { View, Text,Image } from 'react-native'
import React ,{ useState ,useEffect}from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const [user, setuser] = useState();
  //var user=AsyncStorage.getItem('user');
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user');
       //jsonValue != null ? JSON.parse(jsonValue) : null;
       setuser(JSON.parse(jsonValue));
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();

    return () => {
      getData();
      
    }
  }, [user])
  
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
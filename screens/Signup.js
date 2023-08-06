import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Alert, ImageBackground ,ScrollView} from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, VStack, Box, Heading, FormControl, Input, } from "native-base";

const Signup = ({ }) => {
  const [username, setusername] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [city, setcity] = useState('')

  const navigation = useNavigation();


  const signup = () => {
    var inscriptionObject = {
      username: username,
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      city: city
    };
    axios.post('http://127.0.0.1:8000/api/adhesions/create', inscriptionObject)
      .then((response) => {
        if (response.status == 200) {
          console.log(response.data.payload);
          Alert.alert('Info', 'your account was created', [
            { text: ' UNDERSTOOD', onPress: () => console.log(" compte cree ") }
          ])
          navigation.navigate('Login');
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
  })

  return (
    <Center w="100%">
      <Image  width={200} resizeMode='cover' borderRadius={10}   source={require('/Users/simo/reactnative/p1/AwesomeProject/assets/imgbook.png')} />
      <VStack space={3}>
        <ScrollView >
          <Box   m={1} mb={10} w="90%" maxW="290">
          <Heading size={"md"} fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50", }} _text={{color : "indigo.300"}}>
            Enter Your Informations
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }} >Username</FormControl.Label>
              <Input size={"lg"} onChangeText={setusername} value={username} placeholder="username" />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }}>Last name</FormControl.Label>
              <Input size={"lg"} onChangeText={setlastname} value={lastname} placeholder="Enter your last name" />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }}>First name </FormControl.Label>
              <Input size={"lg"} onChangeText={setfirstname} value={firstname} placeholder="Enter your first name" />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }}>E-mail</FormControl.Label>
              <Input size={"lg"} keyboardType="email-address" onChangeText={setemail} value={email} placeholder="Enter your E-mail" />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }}>Password</FormControl.Label>
              <Input size={"lg"} type="password" onChangeText={setpassword} secureTextEntry={true} value={password} placeholder="Enter your password " />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }}>Phone number</FormControl.Label>
              <Input size={"lg"} onChangeText={setphonenumber} value={phonenumber} keyboardType="phone-pad" placeholder="Enter your phone number " />
            </FormControl>
            <FormControl>
              <FormControl.Label _text={{ fontSize: 14 }} >City</FormControl.Label>
              <Input size={"lg"} onChangeText={setcity} value={city} placeholder="where do you live " />
            </FormControl>
          </VStack>
          <Button onPress={() => signup()} size={"lg"} my={3} colorScheme={"indigo"} _text={{ color: "white", fontSize: 20, fontWeight: "bold", }} >SignUp</Button>
        </Box>
        </ScrollView>
        
      </VStack>
    </Center>
  )
}



export default Signup
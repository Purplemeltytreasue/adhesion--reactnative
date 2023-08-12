import { fonts } from '@rneui/base';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image,Alert } from 'react-native';
import { Avatar} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, VStack, Box, Heading, FormControl, Input, } from "native-base";
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import Home from './Home';



const ProfileScreen = () => {

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        // value previously stored
        //setuser(value)
        console.log('value',value)

      }
    } catch (e) {
      // error reading value
    }
  };
  const [username, setusername] = useState('')
  const [numeroadhesion, setnumeroadhesion] = useState('')
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [city, setcity] = useState('')
  const route = useRoute();
  const navigation = useNavigation()

  const adhesion_inscription = () => {
    //this.getData();

    var Adhesionuser = {
      
      username: username,
      n_adhesion  : numeroadhesion,
      lastName: lastname,
      firsName: firstname,
      email: email,
      password: password,
      phoneNumber: phonenumber,
      city: city
    };
  axios.post('http://127.0.0.1:8000/api/adhesions/create', Adhesionuser)
    .then((response) => {
          console.log(response.status);
          console.log(response.data.payload);
          if (response.status == 200) {
            console.log(response.data.payload);
            Alert.alert('Info', 'youre becoming a number ', [
            { text: ' UNDERSTOOD', onPress: () => console.log(" compte cree ") }
            ])
            navigation.navigate('home');
          }
          //AsyncStorage.setItem('user', JSON.stringify(response.data.payload));
          // navigation.replace('Home')
    })
    .catch(function (error) {
        console.log(error);
    });
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Avatar.Image
          size={100}
          source={'/Users/simo/reactnative/p1/AwesomeProject/assets/user.png'}
        />
        <Text style={styles.userName}>{setusername}</Text>

      </View>
      <Heading h={5} ml={6} mt={6}  size={"md"} fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50", }} _text={{ color: "indigo.300" }}>
       integrate to our activities
      </Heading>

      <View w="100%" style ={styles.formcontainer}>
        <VStack space={1}>
          <Box safeArea p="1" py="3" w="90%" maxW="290">
            <VStack space={1} >
            <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Username </FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={setusername} value={username} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Numero adhesion </FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={setnumeroadhesion} value={numeroadhesion} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Last name</FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={setlastname}  value={lastname} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>First name </FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={setfirstname}  value={firstname} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>E-mail</FormControl.Label>
                <Input w={'230'} size={"lg"} keyboardType="email-address" onChangeText={setemail}  value={email} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Password</FormControl.Label>
                <Input w={'230'} size={"lg"} type="password" onChangeText={setpassword}  secureTextEntry={true} value={password} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Phone number</FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={setphonenumber}  value={phonenumber} keyboardType="phone-pad" />
              </FormControl> 
            </VStack>
            <View >
            <Button w={'230'} onPress={() => adhesion_inscription()} size={"lg"} my={3} colorScheme={"indigo"} _text={{ color: "white", fontSize: 20, fontWeight: "bold", }} > Become a number </Button>
            
            </View>
          </Box>
        </VStack>
      </View>


    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom : -20,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: 20,
  },

  formcontainer :{
    marginTop : -20,
    display : 'flex',
    flexDirection : 'row',
    justifyContent : 'center'
  }
});




export default ProfileScreen;

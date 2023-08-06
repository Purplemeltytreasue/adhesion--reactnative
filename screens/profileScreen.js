import { fonts } from '@rneui/base';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Avatar} from 'react-native-paper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Button, Center, VStack, Box, Heading, FormControl, Input, } from "native-base";
import { useRoute } from '@react-navigation/native';

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
  const [firstname, setfirstname] = useState('')
  const [lastname, setlastname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [city, setcity] = useState('')
  const route = useRoute();

  const userinfo = ({}) => {
    //this.getData();

    var user = {
      id:0,
      username: username,
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password,
      phonenumber: phonenumber,
      city: city
    };
    /*axios.post('http://127.0.0.1:8000/api/users/update', user)
    .then((response) => {
          console.log(response.status);
          console.log(response.data.payload);
          //AsyncStorage.setItem('user', JSON.stringify(response.data.payload));
          // navigation.replace('Home')
    })
    .catch(function (error) {
        console.log(error);
    });*/
  };
  
  return (
    <View style={styles.container}>
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
        User Informations
      </Heading>

      <View w="100%" style ={styles.formcontainer}>
        <VStack space={1}>
          <Box safeArea p="1" py="3" w="90%" maxW="290">
            <VStack space={1} >
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Last name</FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={value => setlastname(value)} editable={false} value={lastname} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>First name </FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={value => setfirstname(value)} editable={false} value={firstname} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>E-mail</FormControl.Label>
                <Input w={'230'} size={"lg"} keyboardType="email-address" onChangeText={value => setemail(value)} editable={false} value={email} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Password</FormControl.Label>
                <Input w={'230'} size={"lg"} type="password" onChangeText={value => setpassword(value)} editable={false} secureTextEntry={true} value={password} />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }}>Phone number</FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={value => setphonenumber(value)} editable={false} value={phonenumber} keyboardType="phone-pad" />
              </FormControl>
              <FormControl>
                <FormControl.Label _text={{ fontSize: 14 }} >City</FormControl.Label>
                <Input w={'230'} size={"lg"} onChangeText={value => setcity(value)} editable={false} value={city} />
              </FormControl>
            </VStack>
            <Button w={'230'} onPress={() => userinfo()} size={"lg"} my={3} colorScheme={"indigo"} _text={{ color: "white", fontSize: 20, fontWeight: "bold", }} >Save Changes</Button>
          </Box>
        </VStack>
      </View>


    </View >
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

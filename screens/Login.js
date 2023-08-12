import { SafeAreaView, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Home from './Home';
import { Image, Button, Center, VStack, Box, Heading, FormControl, Input, } from "native-base";


const Login = ({navigation}) => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')



    const login = () => {
        var loginObject = {
            username: username,
            password: password,
        };
        

        //   axios.defaults.baseURL = 'http://127.0.0.1:8000/api';
        // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.post('http://127.0.0.1:8000/api/users/login', loginObject)
            .then((response) => {
                if (response.status == 200 && response.data.payload != "Incorrect username or password !") {
                    console.log(response.status);
                    console.log(response.data.payload);
                    AsyncStorage.setItem('user', JSON.stringify(response.data.payload.user));
                    navigation.navigate('home');
                
                    // console.log('user',AsyncStorage.getItem('user'));

                }
                else {
                    Alert.alert('OOPS', 'username or password incorrect', [
                        { text: ' UNDERSTOOD', onPress: () => console.log(" toujours dans la page connection") }
                    ])
                }

            })
            .catch(function (error) {
                console.log(error);
            });
        return true;
    };

    return (
        <Center w="100%" display={'flex'}>
            <Image resizeMode='cover' borderRadius={10} marginTop='0%' source={require('/Users/simo/reactnative/p1/AwesomeProject/assets/imgbook.png')} alt={"cover"} />
            <VStack space={3} mb="3">
                <Box w="90%" maxW="290">
                    <Heading size={"2xl"} fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50", }} >
                        Welcome
                    </Heading>
                    <Heading size={"md"} mt="1" mb={4} _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" >
                        Connection
                    </Heading>

                    <VStack space={3} mt="5">
                        <FormControl>
                            <FormControl.Label _text={{ fontSize: 18 }} >Email ID</FormControl.Label>
                            <Input size={"2xl"} onChangeText={setusername} value={username} placeholder="username" />
                        </FormControl>
                        <FormControl>
                            <FormControl.Label _text={{ fontSize: 18 }}>Password</FormControl.Label>
                            <Input size={"2xl"} type="password" onChangeText={setpassword} secureTextEntry={true} value={password} placeholder="password" />
                        </FormControl>
                    </VStack>

                    <Button onPress={() => login()} size={"lg"} my={3} colorScheme={"indigo"} _text={{ color: "white", fontSize: 20, fontWeight: "bold", }} >Login</Button>
                    <Button onPress={() => navigation.navigate('SignUp')} size={"md"} _text={{ color: "indigo.500", fontSize: 20, fontWeight: "bold" }} variant={"outline"}>SignUp Here</Button>
                </Box>
            </VStack>
        </Center>
    )

}

export default Login
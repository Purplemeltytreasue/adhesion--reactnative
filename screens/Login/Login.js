import { View, Text, Image, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({ navigation }) => {
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
            .then(function (response) {
                console.log(response.data.payload);
                AsyncStorage.setItem('user', JSON.stringify(response.data.payload));
            })
            .catch(function (error) {
                console.log(error);
            });
        return true;
    };

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        }}>



            <Image source={require('/Users/simo/reactnative/p1/AwesomeProject/assets/logo-2.png')} />
            <TextInput
                style={styles.input}
                onChangeText={setusername}
                value={username}
                placeholder="username"

            />
            <TextInput
                style={styles.input}
                onChangeText={setpassword}
                value={password}
                placeholder="password"
            />
            <Button
                onPress={login}
                title="LOGIN"
                color="blue"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 160,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
export default Login
import React from 'react';
import { Text, StyleSheet, Linking } from 'react-native';
import {View} from 'native-base';

const About = () => {
    const appVersion = '10.01.1123'; // Replace with your app's version number
    const websiteURL = 'https://www.edunation.com'; // Replace with your website URL
    const email = 'contact@example.com'; // Replace with your contact email

    const handleWebsitePress = () => {
        Linking.openURL(websiteURL);
    };

    const handleEmailPress = () => {
        Linking.openURL(`mailto:${email}`);
    };
    
    return (
        <View style={styles.container}>
            <View>
            <Text style={styles.title}>About Us</Text>
            <Text style={styles.version}>Version: {appVersion}</Text>
            </View>
            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel metus sed urna
                tincidunt varius nec nec lectus. Sed et bibendum nulla, vel elementum nisi.
                Loremkncslnclnslkacnjkln sa lksncvksbvcks ks vkjds vk jk vkdsb vk jsd bvksb dvk dsk  
                clnsldvnln 
                slknsln sd'catch j sl n;asldjkcn sjbkj cmn jksnlsc mn cmnx ckjdj nckb cas c skjb vk cacc
                sjdnlkasj  lksdnclns last;sklnvwdbn dslvjbnlkjsd  
                sdklsnlkdnvkjdnvkjn lkdsnvkljkjnkewfwew  fekbvdskbve fkjbkhewb vjkhb ckhjbcjhb sc sjhbcjhabvc scs'
                jscbjabckjb jsbckjsabc clkcjclnc kvsa cja cjgasvc  bkjxb hz kjsbv lahn b sckbsckhv xcmnbs  vasbckj
                svcb nbx kudbhc xkjzxhb n vbc bas v ckjasba bdsn  jxk bdj bvx jkhm xzjs jdsgh jdsvc jhg nhg jgadvcj
                ghas cnbvz bv hgas cjhasvjc sjbcvkdbvm kscbjhsbvcjhasc cv jhasv cjsa dsclbckjsbcnljksanclksanclsnclbn
            </Text>

            <View style={styles.footer}>
            <Text style={styles.link} onPress={handleWebsitePress}>
                Visit our website
            </Text>
            <Text style={styles.link} onPress={handleEmailPress}>
                Contact us via email
            </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 20,
        justifyContent : 'space-around'
        
    },
    title: {
        marginLeft :10,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    version: {
        marginLeft :10,
        color :'silver',
        fontSize: 16,
        marginBottom: 5,
    },
    description: {
        paddingLeft :10,
        paddingRight :10,
        fontStyle : 'italic',
        fontSize: 16,
        marginBottom: 20,
    },
    footer :{
        backgroundColor : 'rgba(130, 73, 207, 0.8)',
        paddingBottom :10,
        paddingTop :30,
        paddingLeft : 20,
        borderRadius : 10,

    },
    link: {
        fontSize: 16,
        color: 'white',
        textDecorationLine: 'underline',
        marginBottom: 10,
    },
});

export default About;

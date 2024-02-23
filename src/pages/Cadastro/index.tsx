import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 


export default function Login() {
    const navigation = useNavigation();
    return(
        
        <View style={styles.container}>
           <Image 
            source={require('../../assets/loginAratu.png')}
            style={{width:'110%', height: `55%`}}
            />
            <Image 
            source={require('../../assets/logo1.png')}
            style={{ marginTop: -170, width: 168, height: 175,  resizeMode: 'contain' }}
            /> 
            <Text style={styles.containerHeader}>aratu</Text>

            <TextInput
            placeholder='Digite seu nome'
            style={styles.input}/>

            <TextInput
            placeholder='Digite seu email'
            style={styles.input}/>

            <TextInput
            placeholder='Digite seu número'
            style={styles.input}/>

            <TextInput
            placeholder='Digite sua senha'
            style={styles.input}/>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Interesse')}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{

        alignItems:'center',
        flex:1,
        backgroundColor:'#DB9F36',
    },

    containerHeader:{
        fontFamily:'Gazebo',
         marginTop: -17,
        marginBottom: '3%',
        color:'#FFF',
        fontSize: 55,
    },
    title:{
        marginTop: 6,
       fontSize: 20,
       paddingRight: 210
    },

    input:{
        marginBottom:9,
        alignItems:'center',
        backgroundColor: '#FFF',
        borderRadius:25,
        width:300
    },
    button :{
        backgroundColor: '#A41623',
        borderRadius: 25,
        width: 120,
        alignItems: 'center',
        height:35,
        paddingVertical: 8,
        marginTop: 10
    },
    buttonText :{
        color: "#FFF",
        fontWeight:'bold'
    },
    buttonR:{
        marginTop:14,
        alignSelf:'center'
    },

    
    
    
})
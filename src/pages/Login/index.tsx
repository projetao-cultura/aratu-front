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
            style={{ marginTop: -190, width: 168, height: 175,  resizeMode: 'contain' }}
            />
            <Text style={styles.containerHeader}>aratu</Text>
            <Text > </Text>
            <TextInput
            placeholder='Digite seu email'
            style={styles.input}/>

            <Text > </Text>
            <TextInput
            placeholder='Digite sua senha'
            style={styles.input}/>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonR} onPress = {() => navigation.navigate('Cadastro')} >
                <Text >Não possui uma conta? 
                Cadastre-se</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonR} onPress = {() => navigation.navigate('Perfil')} >
                <Text >Link para perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'relative', // Garante que o posicionamento dos filhos seja relativo a este container
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


    input:{
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
        marginTop: 30
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
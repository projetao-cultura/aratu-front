import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleCadastro } from './handle';


export default function Cadastro() {
    const navigation = useNavigation();


    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [senha, setSenha] = useState('');


    const handleCadastroPress = async () => {
        // Armazena as informações do usuário no estado global ou em um contexto
        global.userInformation = {
            nome: nome,
            email: email,
            numero: numero,
            senha: senha,
        };


        // Redireciona o usuário para a tela de interesses
        navigation.navigate('Interesse');
    };


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
            style={styles.input}
            value={nome}
            onChangeText={text => setNome(text)}
            />


            <TextInput
            placeholder='Digite seu email'
            style={styles.input}
            value={email}
            onChangeText={text => setEmail(text)}
            />


            <TextInput
            placeholder='Digite seu número'
            style={styles.input}
            value={numero}
            onChangeText={text => setNumero(text)}
            />


            <TextInput
            placeholder='Digite sua senha'
            style={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={text => setSenha(text)}
            />


            <TouchableOpacity style={styles.button} onPress={handleCadastroPress}>
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
})
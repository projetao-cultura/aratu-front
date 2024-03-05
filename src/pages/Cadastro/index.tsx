import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert, PermissionsAndroid, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleCadastro } from './handle';
import Contacts from 'react-native-contacts';



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

    };

    const showPermissionAlert = () => {
        Alert.alert(
            "Permissão Necessária",
            "Este aplicativo precisa de acesso aos seus contatos para continuar.",
            [
                {
                    text: "Não Permitir",
                    onPress: () => {console.log("Permissão negada"); navigation.navigate('Interesse');},
                    style: "cancel"
                },
                { text: "Permitir", onPress: () => requestContactsPermission() }
            ]
        );
    };

    const requestContactsPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                    {
                        title: "Permissão para Acessar Contatos",
                        message: "Este aplicativo precisa acessar seus contatos.",
                        buttonNegative: "Cancelar",
                        buttonPositive: "OK"
                    }
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log("Você pode acessar os contatos");
                    loadContacts();
                } else {
                    navigation.navigate('Interesse');
                    console.log("Permissão para acessar contatos negada");
                    
                }
            } catch (err) {
                navigation.navigate('Interesse');
                console.warn(err);
            }
        } else {
            // Para iOS, o alerta de permissão é gerenciado pelo sistema
            loadContacts();
        }
    };

    const loadContacts = async () => {
        try {
            const contacts = await Contacts.getAll();
            navigation.navigate('Interesse');
            console.log(contacts);
            // Aqui você pode fazer algo com os contatos, como atualizar o estado ou navegar para outra tela
        } catch (error) {
            navigation.navigate('Interesse');
            console.warn('Erro ao acessar contatos:', error);
        }
    };
  
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

            <TouchableOpacity style={styles.button} onPress={showPermissionAlert}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonR} onPress = {() => navigation.navigate('Login')} >
                <Text >Já possui uma conta? 
                login</Text>
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
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { handleLogin } from './handle'; // Importe a função de login
import { useUser } from '../../UserContext';

export default function Login() {
    const navigation = useNavigation();
    const { setUser } = useUser();

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');


    const handleLoginPress = async () => {
        const user = await handleLogin(email, senha, navigation);
        
        setUser({
            id: user.id,
            nome: user.nome,
            email: email,
            numero: user.telefone,
            senha: senha,
            categorias: user.categorias_interesse
        });

    };


    return (
        <View style={styles.container}>
            {/* ... (outros elementos da tela de login) */}
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
                style={styles.input}
                value={email}
                onChangeText={text => setEmail(text)}
            />


            <Text > </Text>
            <TextInput
                placeholder='Digite sua senha'
                style={styles.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={text => setSenha(text)}
            />


            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
                <Text style={styles.buttonText}>Acessar</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonR} onPress={() => navigation.navigate('Cadastro')}>
                <Text >Não possui uma conta? Cadastre-se</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonR} onPress={() => navigation.navigate('Perfil')}>
                <Text >Link para perfil</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        position: 'relative',
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
        marginBottom: 9,
        alignItems:'center',
        backgroundColor: '#FFF',
        borderRadius: 25,
        width: 300
    },
    button:{
        backgroundColor: '#A41623',
        borderRadius: 25,
        width: 120,
        alignItems: 'center',
        height: 35,
        paddingVertical: 8,
        marginTop: 30
    },
    buttonText:{
        color: "#FFF",
        fontWeight:'bold'
    },
    buttonR:{
        marginTop: 14,
        alignSelf: 'center'
    },
});
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index';
import Perfil from '../pages/Perfil/index';
import PerfilEditar from '../pages/Perfil/update';
import PerfilAlterarSenha from '../pages/Perfil/password';
import Interesse from '../pages/Interesse/index';
import Feed from '../pages/Feed/index';
import Atividade from '../pages/Atividade/index';
import Explore from '../pages/Explore/index'
import Detalhamento from '../pages/Detalhamento Evento/index'
import DetalhamentoFui from '../pages/Detalhamento Evento/indexFui'
import PerfilOutro from '../pages/PerfilOutro/index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>  
        <Stack.Screen
            name='Login'
            component={Login}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Atividade'
            component={Atividade}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='DetalhamentoFui'
            component={DetalhamentoFui}
            options={{headerShown: false}}/>  
        <Stack.Screen
            name='Detalhamento'
            component={Detalhamento}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Feed'
            component={Feed}
            options={{headerShown: false}}/>  
        <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Perfil'
            component={Perfil}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='PerfilEditar'
            component={PerfilEditar}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='PerfilAlterarSenha'
            component={PerfilAlterarSenha}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Interesse'
            component={Interesse}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Explore'
            component={Explore}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='PerfilOutro'
            component={PerfilOutro}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
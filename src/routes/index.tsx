import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Lgin from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index';
import Perfil from '../pages/Perfil/index';
import Interesse from '../pages/Interesse/index';
import Feed from '../pages/Feed/index';
import Detalhamento from '../pages/Detalhamento Evento/index'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
         <Stack.Screen
            name='Login'
            component={Lgin}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Feed'
            component={Feed}
            options={{headerShown: false}}/>  
        <Stack.Screen
            name='Detalhamento'
            component={Detalhamento}
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
            name='Interesse'
            component={Interesse}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
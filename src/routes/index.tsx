import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Lgin from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={Lgin}
            options={{headerShown: false}}/>

        <Stack.Screen
            name='Cadastro'
            component={Cadastro}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
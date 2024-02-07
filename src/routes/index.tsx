import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Lgin from '../pages/Login';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Login'
            component={Lgin}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
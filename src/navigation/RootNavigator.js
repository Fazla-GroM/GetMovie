import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="App" component={AppNavigator} />
        </Stack.Navigator>
    )
}

export default RootNavigator

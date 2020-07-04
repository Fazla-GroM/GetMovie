import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useUser } from 'hooks'
import { SignInScreen } from 'screens'
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator()

const RootNavigator = () => {
    const user = useUser()
    console.log(user)
    return (
        <Stack.Navigator headerMode="none">
            {user.isLoggedIn ? (
                <Stack.Screen name="App" component={AppNavigator} />
            ) : (
                <Stack.Screen name="SignIn" component={SignInScreen} />
            )}
        </Stack.Navigator>
    )
}

export default RootNavigator

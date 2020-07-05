import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useUser } from 'hooks'
import { LandingScreen, SignUpScreen } from 'screens'
import AppNavigator from './AppNavigator'

const Stack = createStackNavigator()

const RootNavigator = () => {
    const user = useUser()
    console.log(user)
    return (
        <Stack.Navigator headerMode="none">
            {user.isLoggedIn ? (
                <Stack.Screen name="AppScreen" component={AppNavigator} />
            ) : (
                <>
                    <Stack.Screen name="LandingScreen" component={LandingScreen} />
                    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
                </>
            )}
        </Stack.Navigator>
    )
}

export default RootNavigator

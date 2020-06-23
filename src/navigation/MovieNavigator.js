import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListScreen, DetailScreen } from 'screens'
import { HomeHeader } from 'components'

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={ListScreen} options={{ header: HomeHeader }} />
            <Stack.Screen name="Details" component={DetailScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeNavigator

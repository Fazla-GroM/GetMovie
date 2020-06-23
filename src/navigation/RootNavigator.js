import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import MovieNavigator from './MovieNavigator'

const Drawer = createDrawerNavigator()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Movies" component={MovieNavigator} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator

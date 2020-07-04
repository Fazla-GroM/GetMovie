import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MovieNavigator from './MovieNavigator'

const Drawer = createDrawerNavigator()

const AppNavigator = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Movies" component={MovieNavigator} />
        </Drawer.Navigator>
    )
}

export default AppNavigator

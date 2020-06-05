import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { ListScreen, DetailScreen } from 'screens'

const Drawer = createDrawerNavigator()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={ListScreen} />
                <Drawer.Screen name="Notifications" component={DetailScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator

import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from 'components'
import MovieIcon from 'assets/icons/movie-24dp.svg'
import MovieNavigator from './MovieNavigator'

const Drawer = createDrawerNavigator()

const AppNavigator = () => {
    return (
        <Drawer.Navigator
            drawerType="slide"
            initialRouteName="Movies"
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Movies" options={{ drawerIcon: MovieIcon }} component={MovieNavigator} />
        </Drawer.Navigator>
    )
}

export default AppNavigator

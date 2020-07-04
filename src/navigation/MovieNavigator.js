import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListScreen, ListHeader, DetailScreen, DetailHeader } from 'screens'
import { MovieHomeController, MovieDetailsController } from 'controllers'

const HomeScreen = props => (
    <MovieHomeController {...props}>
        <ListScreen />
    </MovieHomeController>
)

const DetailsScreen = props => (
    <MovieDetailsController {...props}>
        <DetailScreen />
    </MovieDetailsController>
)

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen
                name="Movies"
                options={{
                    header: props => <ListHeader {...props} />
                }}
                component={HomeScreen}
            />
            <Stack.Screen
                name="Details"
                options={{
                    headerTransparent: true,
                    header: props => <DetailHeader {...props} />
                }}
                component={DetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator

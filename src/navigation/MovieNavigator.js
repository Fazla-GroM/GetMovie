import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListScreen, ListHeader, DetailScreen, DetailHeader } from 'screens'

const Stack = createStackNavigator()

const HomeNavigator = () => {
    return (
        <Stack.Navigator headerMode="screen">
            <Stack.Screen
                name="Movies"
                options={{
                    header: props => <ListHeader {...props} />
                }}
                component={ListScreen}
            />
            <Stack.Screen
                name="Details"
                options={{
                    headerTransparent: true,
                    header: props => <DetailHeader {...props} />
                }}
                component={DetailScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigator

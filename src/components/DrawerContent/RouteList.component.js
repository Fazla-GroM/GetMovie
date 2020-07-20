import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView } from 'react-native'
import { CommonActions, DrawerActions } from '@react-navigation/native'
import RouteItem from './RouteItem.component'

const RouteList = ({ state, navigation, descriptors }) => {
    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingHorizontal: 8 }}>
            {state.routes.map((route, i) => {
                const focused = i === state.index
                const { title, drawerLabel, drawerIcon } = descriptors[route.key].options

                return (
                    <RouteItem
                        key={route.key}
                        drawerIcon={drawerIcon}
                        // eslint-disable-next-line no-nested-ternary
                        label={drawerLabel || title || route.name}
                        focused={focused}
                        onPress={() => {
                            navigation.dispatch({
                                ...(focused ? DrawerActions.closeDrawer() : CommonActions.navigate(route.name)),
                                target: state.key
                            })
                        }}
                    />
                )
            })}
        </ScrollView>
    )
}

RouteList.propTypes = {
    state: PropTypes.shape({
        routes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
        index: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired
    }).isRequired,
    descriptors: PropTypes.shape({}).isRequired
}

export default RouteList

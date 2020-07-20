import React from 'react'
import { Pressable } from 'react-native'
import PropTypes from 'prop-types'
import { useTheme } from 'emotion-theming'
import { Root, Label, IconHolder } from './RouteItem.style'

const RouteItem = ({ label, drawerIcon: Icon, focused, onPress }) => {
    const theme = useTheme()
    return (
        <Pressable onPress={onPress}>
            <Root focused={focused}>
                {!!Icon && (
                    <IconHolder>
                        <Icon fill={focused ? theme.colors.pink : theme.colors.textSecondary} />
                    </IconHolder>
                )}
                <Label focused={focused}>{label}</Label>
            </Root>
        </Pressable>
    )
}

RouteItem.propTypes = {
    focused: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    drawerIcon: PropTypes.elementType
}

RouteItem.defaultProps = {
    drawerIcon: undefined
}

export default RouteItem

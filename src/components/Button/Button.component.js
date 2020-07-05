import React from 'react'
import PropTypes from 'prop-types'
import { Root, Text } from './Button.style'

const Button = ({ onPress, activeOpacity, text, endAdornment, startAdornment }) => {
    return (
        <Root
            onPress={onPress}
            activeOpacity={activeOpacity}
            endAdornment={!!endAdornment}
            startAdornment={!!startAdornment}>
            {!!startAdornment && startAdornment}
            <Text>{text}</Text>
            {!!endAdornment && endAdornment}
        </Root>
    )
}

Button.propTypes = {
    onPress: PropTypes.func.isRequired,
    activeOpacity: PropTypes.number,
    text: PropTypes.string,
    endAdornment: PropTypes.element,
    startAdornment: PropTypes.element
}

Button.defaultProps = {
    activeOpacity: 0.6,
    text: undefined,
    endAdornment: null,
    startAdornment: null
}

export default Button

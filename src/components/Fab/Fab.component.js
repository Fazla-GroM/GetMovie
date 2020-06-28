import React, { Children } from 'react'
import PropTypes from 'prop-types'
import { Root } from './Fab.style'

const Fab = ({ activeOpacity, small, underlayColor, onPress, children, style }) => {
    return (
        <Root activeOpacity={activeOpacity} style={style} underlayColor={underlayColor} small={small} onPress={onPress}>
            {Children.only(children)}
        </Root>
        // <TouchableRoot small={small} activeOpacity={activeOpacity} {...rest}>
        //     {children}
        // </TouchableRoot>
    )
}

Fab.propTypes = {
    activeOpacity: PropTypes.number,
    small: PropTypes.bool,
    underlayColor: PropTypes.string
}

Fab.defaultProps = {
    activeOpacity: 0.8,
    small: false,
    underlayColor: 'rgba(255, 44, 85, 0.4)'
}

export default Fab

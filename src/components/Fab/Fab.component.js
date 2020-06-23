import React from 'react'
import PropTypes from 'prop-types'
import { TouchableRoot } from './Fab.style'

const Fab = ({ activeOpacity, small, children, ...rest }) => {
    return (
        <TouchableRoot small={small} activeOpacity={activeOpacity} {...rest}>
            {children}
        </TouchableRoot>
    )
}

Fab.propTypes = {
    activeOpacity: PropTypes.number,
    small: PropTypes.bool
}

Fab.defaultProps = {
    activeOpacity: 0.6,
    small: false
}

export default Fab

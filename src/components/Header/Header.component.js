import React from 'react'
import PropTypes from 'prop-types'
import { Root, Toolbar } from './Header.style'

const Header = ({ children, transparent }) => {
    return (
        <Root transparent={transparent}>
            <Toolbar>{children}</Toolbar>
        </Root>
    )
}

Header.propTypes = {
    transparent: PropTypes.bool
}
Header.defaultProps = {
    transparent: false
}

export default Header

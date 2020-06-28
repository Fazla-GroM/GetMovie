import React from 'react'
import PropTypes from 'prop-types'
import { Root, Text } from './Chip.style'

const Chip = ({ text }) => {
    return (
        <Root>
            <Text>{text}</Text>
        </Root>
    )
}

Chip.propTypes = {
    text: PropTypes.string
}

Chip.defaultProps = {
    text: undefined
}

export default Chip

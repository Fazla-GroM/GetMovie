import React from 'react'
import PropTypes from 'prop-types'
import { Root, Input, Label } from './TextInput.style'

const TextInput = ({ spacing }) => {
    return (
        <Root spacing={spacing}>
            <Input />
            <Label>label</Label>
        </Root>
    )
}

TextInput.propTypes = {
    spacing: PropTypes.bool
}

TextInput.defaultProps = {
    spacing: false
}

export default TextInput

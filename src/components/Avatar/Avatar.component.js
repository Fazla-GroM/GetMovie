import React from 'react'
import PropTypes from 'prop-types'
import FaceIcon from 'assets/icons/face-24dp.svg'
import { Root, Text } from './Avatar.style'

const Avatar = ({ name, image, placeholderIcon: PlaceholderIcon }) => {
    if (name) {
        const letter = name.substring(0, 1)
        return (
            <Root>
                <Text>{letter}</Text>
            </Root>
        )
    }
    // TODO: implement image when camera is set up
    // if(image){

    // }

    return (
        <Root>
            <PlaceholderIcon />
        </Root>
    )
}

Avatar.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    placeholderIcon: PropTypes.elementType
}

Avatar.defaultProps = {
    name: undefined,
    image: undefined,
    placeholderIcon: FaceIcon
}

export default Avatar

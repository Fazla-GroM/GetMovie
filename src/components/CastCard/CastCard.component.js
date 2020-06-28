import React from 'react'
import PropTypes from 'prop-types'
import movieImage from 'assets/images/ford_poster.jpg'
import { TouchableOpacity } from 'react-native'
import { Root, ImageHolder, Image, Text, TextBox } from './CastCard.style'

const CastCard = ({ name, character, onPress, activeOpacity }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
            <Root>
                <ImageHolder>
                    <Image source={movieImage} />
                </ImageHolder>
                <TextBox>
                    <Text>{character}</Text>
                    <Text secondary>{name}</Text>
                </TextBox>
            </Root>
        </TouchableOpacity>
    )
}

CastCard.propTypes = {
    name: PropTypes.string,
    character: PropTypes.string,
    activeOpacity: PropTypes.number
}

CastCard.defaultProps = {
    name: undefined,
    character: undefined,
    activeOpacity: 0.6
}

export default CastCard

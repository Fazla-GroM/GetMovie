/* eslint-disable camelcase */
import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import { Root, ImageHolder, Image, Text, TextBox } from './CastCard.style'

const CastCard = ({ name, character, profile_path, onPress, activeOpacity }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={activeOpacity}>
            <Root>
                <ImageHolder>
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w185${profile_path}`
                        }}
                    />
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
    profile_path: PropTypes.string,
    activeOpacity: PropTypes.number
}

CastCard.defaultProps = {
    name: undefined,
    character: undefined,
    profile_path: undefined,
    activeOpacity: 0.6
}

export default CastCard

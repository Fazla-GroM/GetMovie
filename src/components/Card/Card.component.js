import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Root, Image, Gradient, Title } from './Card.style'

const Card = ({ title, image, poster_path, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
            <Root>
                {!!poster_path && (
                    <Image
                        source={{
                            uri: `https://image.tmdb.org/t/p/w500${poster_path}`
                        }}
                    />
                )}
                <Gradient colors={['rgba(29, 30, 39, 0)', 'rgba(29, 30, 39, 0.2)', 'rgba(29, 30, 39, 0.8)']}>
                    <Title>{title}</Title>
                </Gradient>
            </Root>
        </TouchableOpacity>
    )
}

Card.propTypes = {
    title: PropTypes.string,
    image: PropTypes.number
}

Card.defaultProps = {
    title: undefined,
    image: undefined
}

export default Card

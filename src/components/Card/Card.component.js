import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Root, Image, Gradient, Title } from './Card.style'

const Card = ({ title, image, onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={onPress}>
            <Root>
                <Image source={image} />
                <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,0.8)']}>
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

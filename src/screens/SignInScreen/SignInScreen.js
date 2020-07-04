import React from 'react'
import bg from 'assets/images/movie_poster.jpg'
import { Root, ImageBackground, Gradient } from './SignInStyle'

const SignInScreen = () => {
    return (
        <Root>
            <ImageBackground source={bg}>
                <Gradient colors={['rgba(29, 30, 39, 0.8)', 'rgba(29, 30, 39, 0.2)', 'rgba(29, 30, 39, 0.8)']} />
            </ImageBackground>
        </Root>
    )
}

export default SignInScreen

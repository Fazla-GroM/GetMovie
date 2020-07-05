import React from 'react'
import { Platform, View } from 'react-native'
import { useTheme } from 'emotion-theming'
import { Button, TextInput } from 'components'
import bg from 'assets/images/movie_poster.jpg'
import IOSForward from 'assets/icons/arrow_forward_ios-black-24dp.svg'
import AndroidForward from 'assets/icons/arrow_forward-black-24dp.svg'
import { Root, ImageBackground, Gradient, Container, Box, Text, Bar } from './SignUpScreen.style'

const SignUpScreen = () => {
    const { OS } = Platform
    const theme = useTheme()

    return (
        <Root>
            <ImageBackground source={bg}>
                <Gradient colors={['rgba(29, 30, 39, 0.8)', 'rgba(29, 30, 39, 0.3)', 'rgba(29, 30, 39, 0.8)']}>
                    <Container>
                        <View style={{ flex: 3 }}>
                            <TextInput spacing />
                            <TextInput spacing />
                            <TextInput spacing />
                        </View>
                        <View style={{ flex: 2 }}>
                            <Box>
                                <Bar />
                                <View>
                                    <Text>Find</Text>
                                    <Text title>Your Movies</Text>
                                    <Text>Anywhere</Text>
                                </View>
                            </Box>
                        </View>
                        <Button text="Submit" onPress={() => alert('pressed')} />
                    </Container>
                </Gradient>
            </ImageBackground>
        </Root>
    )
}

export default SignUpScreen

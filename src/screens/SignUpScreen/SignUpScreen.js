import React, { useState, useCallback } from 'react'
import { Platform, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { setUser } from 'reducers'
import { useTheme } from 'emotion-theming'
import { Button, TextInput } from 'components'
import bg from 'assets/images/movie_poster.jpg'
import SendIcon from 'assets/icons/send-24dp.svg'
import { Root, ImageBackground, Gradient, Container, Box, Text, Bar } from './SignUpScreen.style'

const INITIAL_STATE = {
    fullName: '',
    eMail: '',
    password: ''
}

const SignUpScreen = () => {
    const [formValue, setFormValue] = useState(INITIAL_STATE)
    const theme = useTheme()
    const dispatch = useDispatch()

    const handleSubmit = useCallback(() => dispatch(setUser(formValue)), [dispatch, formValue])

    const handleFormChange = useCallback(
        (text, name) => {
            setFormValue(currentVal => ({ ...currentVal, [name]: text }))
        },
        [setFormValue]
    )

    return (
        <Root>
            <ImageBackground source={bg}>
                <Gradient colors={['rgba(29, 30, 39, 0.8)', 'rgba(29, 30, 39, 0.3)', 'rgba(29, 30, 39, 0.8)']}>
                    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                        <View style={{ flex: 3 }}>
                            <TextInput
                                spacing
                                label="Full Name"
                                name="fullName"
                                value={formValue.fullName}
                                setValue={handleFormChange}
                            />
                            <TextInput
                                spacing
                                label="Email"
                                name="eMail"
                                value={formValue.eMail}
                                setValue={handleFormChange}
                            />
                            <TextInput
                                spacing
                                label="Password"
                                name="password"
                                value={formValue.password}
                                setValue={handleFormChange}
                            />
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
                        <Button
                            text="Submit"
                            endAdornment={<SendIcon fill={theme.colors.white} />}
                            onPress={handleSubmit}
                        />
                    </Container>
                </Gradient>
            </ImageBackground>
        </Root>
    )
}

export default SignUpScreen

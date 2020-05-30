import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { View, Text } from 'react-native'
import theme from './theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <View>
                <Text>Hello World</Text>
            </View>
        </ThemeProvider>
    )
}

export default App

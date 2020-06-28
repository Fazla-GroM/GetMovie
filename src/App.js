import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'emotion-theming'
import { RootNavigator } from 'navigation'
import theme from './theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="light-content" />
            <RootNavigator />
        </ThemeProvider>
    )
}

export default App

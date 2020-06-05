import 'react-native-gesture-handler'
import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { RootNavigator } from 'navigation'
import theme from './theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <RootNavigator />
        </ThemeProvider>
    )
}

export default App

import 'react-native-gesture-handler'
import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'emotion-theming'
import Navigation from 'navigation'
import { store, persistor } from 'store'

import theme from './theme'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <StatusBar barStyle="light-content" />
                    <Navigation />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default App

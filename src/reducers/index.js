import AsyncStorage from '@react-native-community/async-storage'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import user from './userReducer'
import movies from './movieReducer'

export * from './movieReducer'
export * from './userReducer'

const persistConfig = {
    // Root
    key: 'root',
    // Storage Method (React Native)
    storage: AsyncStorage,
    // Whitelist (Save Specific Reducers)
    whitelist: ['user']
    // Blacklist (Don't Save Specific Reducers)
    // blacklist: ['sasa']
}

const rootReducer = combineReducers({
    user,
    movies
})

export default persistReducer(persistConfig, rootReducer)

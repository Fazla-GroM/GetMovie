import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'remote-redux-devtools'
import reducers from 'reducers'

const middleware = [thunk]
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 })
const store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))
const persistor = persistStore(store)

export { store, persistor }

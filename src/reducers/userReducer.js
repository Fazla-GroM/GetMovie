const SET_USER = 'GETMOVIE/USER/SET_USER'

const INITIAL_STATE = {
    name: '',
    isLoggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default userReducer

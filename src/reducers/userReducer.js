const SET_USER = 'GETMOVIE/USER/SET_USER'

const INITIAL_STATE = {
    fullName: '',
    eMail: '',
    password: '',
    isLoggedIn: false
}

export const setUser = user => {
    return {
        type: SET_USER,
        payload: { ...user, isLoggedIn: true }
    }
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

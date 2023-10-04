const SET_AUTH = 'SET_AUTH'

const defaultState = {
    isAuth: false,
    accessToken: '',
    expire: ''
}

export default function authReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_AUTH:
            return ({
                ...state,
                isAuth: action.payload.isAuth,
                accessToken: action.payload.accessToken,
                expire: action.payload.expire
            })

        default:
            return state
    }
}

export const setAuth = (bool) => (
    {
        type: SET_AUTH,
        payload: bool
    }
)


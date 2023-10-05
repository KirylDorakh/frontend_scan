const SET_AUTH = 'SET_AUTH'

const defaultState = {
    isAuth: false,
    expire: ''
}

export default function authReducer(state=defaultState, action) {
    switch (action.type) {
        case SET_AUTH:
            return ({
                ...state,
                isAuth: action.payload.isAuth,
                expire: action.payload.expire
            })

        default:
            return state
    }
}

export const setAuth = (data) => (
    {
        type: SET_AUTH,
        payload: data
    }
)


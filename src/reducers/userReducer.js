const SET_USER = 'SET_USER'

const defaultState = {
    usedCompanyCount: 0,
    companyLimit: 0
}

export default function userReducer(state=defaultState, action){
    switch(action.type) {
        case SET_USER:
            return ({
                ...state,
                usedCompanyCount: action.payload.usedCompanyCount,
                companyLimit: action.payload.companyLimit
            })
        default:
            return state
    }
}

export const setUser = (data) => (
    {
        type: SET_USER,
        payload: data
    }
)
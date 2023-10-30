// cases
const SET_USER = 'SET_USER'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

//default state
const defaultState = {
    usedCompanyCount: 0,
    companyLimit: 0,
    isFetching: false
}

//reducer
export default function userReducer(state=defaultState, action){
    switch(action.type) {
        case SET_USER:
            return ({
                ...state,
                usedCompanyCount: action.payload.usedCompanyCount,
                companyLimit: action.payload.companyLimit,
                isFetching: false
            })
        case SET_IS_FETCHING:
            return ({
                ...state,
                isFetching: action.payload
            })
        default:
            return state
    }
}

// action creator
export const setUser = (data) => ({type: SET_USER, payload: data})
export const setIsFetching = (bool) => ({type: SET_IS_FETCHING, payload: bool})
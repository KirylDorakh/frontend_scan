// cases
const SET_INN = 'SET_INN'
const SET_TON = 'SET_TON'
const SET_LIMIT = 'SET_LIMIT'
const SET_DATE = 'SET_DATE'

//default state
const defaultState = {
    inn: '',
    tonality: 'any',
    limit: 0,
    startDate: '',
    endDate: ''
}

//reducer
export default function searchReducer(state=defaultState, action){
    switch(action.type) {
        case SET_INN:
            return ({
                ...state,
                inn: action.payload
            })
        case SET_TON:
            return ({
                ...state,
                tonality: action.payload
            })
        case SET_LIMIT:
            return ({
                ...state,
                limit: parseInt(action.payload)
            })
        case SET_DATE:
            return ({
                ...state,
                startDate: action.payload.startDate+'T00:00:00+03:00',
                endDate: action.payload.finishDate+'T23:59:59+03:00'
            })

        default:
            return state
    }
}

// action creator
export const setValInn = (inn) => ({type: SET_INN, payload: inn})
export const setTon = (tonality) => ({type: SET_TON, payload: tonality})
export const setLimit = (limit) => ({type: SET_LIMIT, payload: limit})
export const setDate = (data) => ({
    type: SET_DATE, payload: data
})


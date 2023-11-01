// cases
const SET_HISTOGRAMS = 'SET_HISTOGRAMS'
const SET_OBJECT = 'SET_OBJECT'


//default state
const defaultState = {
    histogramsData: '',
    objectSearch: ''
}

//reducer
export default function resultsReducer(state=defaultState, action){
    switch(action.type) {
        case SET_HISTOGRAMS:
            return ({
                ...state,
                histogramsData: action.payload
            })
        case SET_OBJECT:
            return ({
                ...state,
                objectSearch: action.payload
            })

        default:
            return state
    }
}

// action creator
export const setHistograms = (data) => ({type: SET_HISTOGRAMS, payload: data})
export const setObject = (data) => ({type: SET_OBJECT, payload: data})



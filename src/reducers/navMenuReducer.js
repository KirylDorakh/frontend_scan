const SET_CHECKED_INPUT = "SET_CHECKED_INPUT"

const defaultState ={
    checkedInput: false
}

export default function navMenuReducer(state= defaultState, action) {
    switch (action.type) {
        case SET_CHECKED_INPUT:
            return ({
                ...state,
                checkedInput: action.payload
            })

        default:
            return state
    }
}

export const setCheckedInput = (bool) => (
    {
        type: SET_CHECKED_INPUT,
        payload: bool
    }
)

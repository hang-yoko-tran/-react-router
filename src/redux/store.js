import { createStore } from 'redux';

const initialState = {
    email: '',
    password: '',
}

function userReducer (state = initialState, action) {
    switch (action.type) {
        case "LOGIN":
            console.log(action.payload)
            return {...state,  ...action.payload}
                    
        default:
            return state
    }
}

let store = createStore(userReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
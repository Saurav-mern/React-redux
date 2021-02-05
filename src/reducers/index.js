import {combineReducers} from 'redux'
import counter from './counter'
import isLogged from './isLogged'
import getdata from './getdata'


const rootReducer = combineReducers({potato: counter, tomato: isLogged, mango: getdata})

export default rootReducer

// export default combineReducers({potato: counter, tomato: isLogged})

import {combineReducers} from 'redux'
import postReducer from './postReducer'
import userReducer from './userReducer'


// const dummyReducer = ()=>{
//     return null
// }



export default combineReducers({
    posts : postReducer,
    users : userReducer
})
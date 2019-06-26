import {combineReducers} from 'redux'
import postReducer from './postReducer'

// const dummyReducer = ()=>{
//     return null
// }



export default combineReducers({
    posts:postReducer
})
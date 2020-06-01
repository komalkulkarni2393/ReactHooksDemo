import { loginReducer } from './login'; 
import { combineReducers, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    loginReducer
},applyMiddleware(thunk));

export default rootReducer;
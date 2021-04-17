import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authRegister from './reducers/authReducer';

const rootReducer = combineReducers({
    authRegister
})

const middleware = [thunk]
const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default Store;
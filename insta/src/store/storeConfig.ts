import { createStore,combineReducers, compose, applyMiddleware } from "redux";
import  userReducer  from "./reducers/user";
import thunk from "redux-thunk";
import postsReducer from './reducers/posts'


const reducers = combineReducers({
    user:userReducer,
    posts: postsReducer
})
const storeConfig = () => {
    return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig
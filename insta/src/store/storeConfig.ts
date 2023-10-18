import { createStore,combineReducers } from "redux";
import  userReducer  from "./reducers/user";

import postsReducer from './reducers/posts'


const reducers = combineReducers({
    user:userReducer,
    posts: postsReducer
})
const storeConfig = () => {
    return createStore(reducers)
}

export default storeConfig
import { ADD_COMMENT, ADD_POST } from "./actionTypes";
import axios from 'axios';


export const addPost = (post:any) => {
    
    return (dispatch:any) => {
        axios.post('/posts.json', {...post})
        .catch(err => console.log(err))
        .then(res=>console.log(res))
    }
    
    // return {
    //     type: ADD_POST,
    //     payload:post
    // }
}
export const addComment = (payload:any) => {
    return {
        type: ADD_COMMENT,
        payload:payload
    }
}
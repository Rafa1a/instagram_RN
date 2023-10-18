import { ADD_POST } from "./actionTypes";


export const addPost = (post:any) => {
    return {
        type: ADD_POST,
        payload:post
    }
}
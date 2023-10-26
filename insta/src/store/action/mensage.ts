import { SET_MESSAGE } from "./actionTypes";

export const setMessage = (message:any)=>{
    return {
        type:SET_MESSAGE,
        payload:message
    }
}
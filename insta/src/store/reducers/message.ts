import { SET_MESSAGE } from "../action/actionTypes";

const initialState:any={
    title:'',
    text:''
}
const reducer = (state = initialState, action:any)=>{
    switch(action.type) {
        case SET_MESSAGE:
            return{
                ...state,
                title:  action.payload.title,
                text:   action.payload.text,
            }
        default: 
            return state
    }
}
export default reducer
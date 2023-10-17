import { USER_LOGGED_IN,USER_LOGGED_OUT } from "../action/actionTypes";
interface users {
    name :string,
    email:string
}
interface actions {
    type :string,
    payload:users
}
const initialState:users = {
    name :'',
    email:''
}
const reducer = (state = initialState, action:actions) => {
    switch(action.type) {
        case USER_LOGGED_IN : 
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email
            }
        case USER_LOGGED_OUT :
            return {
                ...state,
                name : '',
                email:''
            }
        default : 
            return state
    
        }   
}
export default reducer
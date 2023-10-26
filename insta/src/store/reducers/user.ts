import { USER_LOGGED_IN,USER_LOGGED_OUT,LOADING_USER,USER_LOADED } from "../action/actionTypes";
interface users {
    name :string,
    email:string,
    isLoading:boolean,
    token:string
}
interface actions {
    type :string,
    payload:users
}
const initialState:users = {
    name :'',
    email:'',
    isLoading:false,
    token:''
}
const reducer = (state = initialState, action:actions) => {
    switch(action.type) {
        case USER_LOGGED_IN : 
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                token:action.payload.token
            }
        case USER_LOGGED_OUT :
            return {
                ...initialState
                
            }
        case LOADING_USER : 
            return{
                ...state,
                isLoading:true
            }
        case USER_LOADED : 
        return{
            ...state,
            isLoading:false
        }
        
        default : 
            return state
    
        }   
}
export default reducer
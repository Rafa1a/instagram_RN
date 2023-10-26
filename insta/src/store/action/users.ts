import axios from "axios";
import { USER_LOGGED_IN, USER_LOGGED_OUT,LOADING_USER,USER_LOADED } from "./actionTypes";

interface users {
    name :string,
    email:string,
    
}


const authBaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const Api_Key = 'AIzaSyALGmg_tPy31HLBc_ylCag83J8NXuf6_to'
////////////////////////////////////////////////////////////////
export const userLogged = (user:users) => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}

// export const login = (user:users) => {
//     return {
//         type: USER_LOGGED_IN,
//         payload: user
//     }
// }
export const logout = () => {
    return {
        type: USER_LOGGED_OUT,
        
    }
}

export const createUser = (user:any) => {
    return (dispatch:any)=>{
        dispatch(loadingUser())
        axios.post(`${authBaseUrl}/signupNewUser?key=${Api_Key}`,{
            email:user.email,
            password:user.password,
            returnSecureToken:true
        }).catch(err=>console.log({error:err}))
        .then((res:any)=> {
            if(res.data.localId){
                axios.put(`users/${res.data.localId}.json`, {
                    name:user.name
                })
                .catch(err=>console.log({errerr:err}))
                .then(() =>{
                    dispatch(login(user))
                })
            }
        })
    }
}



export const loadingUser = () => {
    return {
        type: LOADING_USER,
        
    }
}

export const userLoaded = () => {
    return {
        type: USER_LOADED,
        
    }
}

export const login = (user:any) => {
        return (dispatch:any)=> {
            dispatch(loadingUser())
            axios.post(`${authBaseUrl}/verifyPassword?key=${Api_Key}`, {
                email:user.email,
                password:user.password,
                returnSecureToken:true
            }).catch(err=>console.log({error:err}))
            .then((res:any)=>{
                if(res.data.localId){
                    user.token=res.data.idToken
                    axios.get(`users/${res.data.localId}.json`)
                    .catch(err=>console.log({error:err}))
                    .then((res:any)=> {
                        delete user.password
                        user.name=res.data.name
                        dispatch(userLogged(user))
                        dispatch(userLoaded())
                    })
                }
            })
        }
    }
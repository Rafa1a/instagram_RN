import { USER_LOGGED_IN, USER_LOGGED_OUT } from "./actionTypes";
interface users {
    name :string,
    email:string
}
export const login = (user:users) => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    }
}
export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    }
}
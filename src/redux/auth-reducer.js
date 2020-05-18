import {authAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA='SET_USER_DATA';

let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state,
                ...action.data
            }
        default:
            return state;
    }
}

export const getAuthUserData =()=>{return(dispatch)=>{
    return authAPI.getAuthData()
        .then(response => {
                if (response.data.resultCode === 0) {
                    //let {id,login,email} = response.data.data;
                    dispatch(setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email,true))
                }
            }
        )
}}


export const setAuthUserData=(id,login,email,isAuth)=>{
    return{
        type:SET_USER_DATA,
        data:{id,login,email,isAuth}
    }
}

export const login =(email,password,rememberMe)=>{return(dispatch)=>{
    authAPI.login(email,password,rememberMe)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(response.data.data.id, response.data.data.login, response.data.data.email,
                        true))
                }else{
                    let  message=response.data.messages.length>0?response.data.messages[0]:"Some error"
                    dispatch(stopSubmit('login',{_error:message}))
                }
            }
        )
}}
export const logout =()=>{return(dispatch)=>{
    authAPI.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
}}

export default authReducer;
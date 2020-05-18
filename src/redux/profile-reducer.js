import {authAPI, profileAPI} from "../API/api";
import {setAuthUserData} from "./auth-reducer";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState = {
    posts: [
        {id: 1, post: 'Hi,how are u?', like: 17},
        {id: 2, post: 'Where are u man?', like: 14},
        {id: 3, post: 'Nice photo, awesome?', like: 14}],
    profile: null,
    status:""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 2,
                post: action.newPostText,
                like: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: action.newPostText
            };
        case SET_STATUS:
            return {
                ...state,
                status:action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }
}

export const setStatus=(status)=>{
    return{
        type:SET_STATUS,
        status
    }
}

export const setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile
    }
}
export const addPostActionCreator = (newPostText) => {
    return {
        type: 'ADD_POST',
        newPostText
    }
};

export const getUsersProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
}
}
export const getStatus=(userId)=>{
    return (dispatch)=>{
        profileAPI.getStatus(userId).then(response=>{
            dispatch(setStatus(response.data))
        })
    }
}
export const updateStatus=(status)=>{
    return (dispatch)=>{
        profileAPI.updateStatus(status).then(response=>{
            if(response.data.resultCode===0){
                debugger
            dispatch(setStatus(status))}
        })
        // profileAPI.updateStatus(status).then(response=>{
        //     if(response.data.resultCode===0){
        //         const responseObj=response.config.data
        //         responseObj.forEach(o=>{const status=o[0]})
        //         dispatch(setStatus(response.config.data))}
        // })
    }
}
export default profileReducer;
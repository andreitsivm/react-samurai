import {getAuthUserData} from "./auth-reducer";

const INITIALIZATION_SUCCESS='INITIALIZATION_SUCCESS';

let initialState = {
    initialized:false

}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return { ...state,
                initialized:true
            }
        default:
            return state;
    }
}

export const initializeApp =()=>(dispatch)=>{
    let promise=dispatch(getAuthUserData())
    promise.then(()=>{
        dispatch(initializationSuccess())
    })

}


export const initializationSuccess=()=>{
    return{
        type:INITIALIZATION_SUCCESS
    }
}


export default appReducer;
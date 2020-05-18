import React from 'react';
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps=(state)=>{
    return {
        dialogs:state.dialogsPage.dialogs,
        messages:state.dialogsPage.messages,
        newMessageBody:state.dialogsPage.newMessageBody,
        isAuth:state.auth.isAuth
    }
 }

const mapDispatchToProps=(dispatch)=>{
 return {
     sendMessage:(newMessageBody)=>{
         dispatch(sendMessageActionCreator(newMessageBody))
     }
 }
}
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect)(Dialogs)

import React from 'react';
import style from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from "./Message/Message";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";

const AddMessageForm=(props)=>{
    return  <form onSubmit={props.handleSubmit}>
        <Field name={'newMessageBody'} component={'textarea'} value={props.newMessageBody}
               placeholder='Введите сообщение'></Field>
        <button>Send message</button>
    </form>
}
const ReduxAddMessageForm= reduxForm({form:'addMessage'})(AddMessageForm)

const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d =>
        <Dialog name={d.name} id={d.id}/>);

    let messageElements = props.messages.map(m =>
        <Message message={m.message} id={m.id}/>);

    let addNewMessage=(value)=>{
        props.sendMessage(value.newMessageBody);
    }
        if(!props.isAuth){
            return <Redirect to={`/login`}/>
        }
    return <div><div className={style.dialog}>
            <div className={style.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={style.messages_items}>
                {messageElements}
            </div>
            <ReduxAddMessageForm onSubmit={addNewMessage}/>

    </div></div>

}




export default Dialogs;

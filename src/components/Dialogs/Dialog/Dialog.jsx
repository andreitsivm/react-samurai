import React from 'react';
import {NavLink, Route} from 'react-router-dom'
import style from './Dialog.module.css'



const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.dialog}>
            {/*<div className={style.user}>*/}
            {/*    <img src='https://cdn.minval.az/2019/02/a70.jpg'/>*/}
            {/*</div>*/}
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
export default Dialog;

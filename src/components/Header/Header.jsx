import React from 'react';
import logo from './GOTOVE_LOGO.png'
import style from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Redirect} from "react-router";
import {createRenderer} from "react-dom/test-utils";

const Header = (props) => {

    return (
        <header className={style.app_header}>
            <div className={style.logo}>
                <img src={logo}/></div>
            <div>
                <h1>INCANTO PARFUMERY</h1>
            </div>
            <div className={style.login}>
                {props.isAuth
                    ? <div>
                        <NavLink className={style.name} to={'/profile/' + props.id}>
                            <h1>{props.login}</h1></NavLink>
                        <button onClick={props.logout}>Exit</button> </div>
                    :<div> <Redirect to={'/login'}/>
                    <NavLink to={'/login'}><h2>Login</h2></NavLink></div>}
            </div>

        </header>
    )
}
export default Header;

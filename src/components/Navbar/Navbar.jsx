import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <ul>
                <li><NavLink to="/profile" className={style.a} data-text="Profile">Profile</NavLink></li>
                <li><NavLink to="/dialogs" className={style.a} data-text="Dialogs">Dialogs</NavLink></li>
                <li><NavLink to="/users" className={style.a} data-text="Users">Users</NavLink></li>
                <li><NavLink to="/news" className={style.a} data-text="News">News</NavLink></li>
                <li><NavLink to="/settings" className={style.a} data-text="Settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;

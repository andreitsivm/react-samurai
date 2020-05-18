import React, {useState} from 'react'
import style from './Users.module.css'
import userPhoto from './../../user.png'
import {NavLink} from "react-router-dom";
import {Pagination} from "antd";
import 'antd/dist/antd.css'



let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        {pages.map(p => {
            return <span className={props.currentPage === p && style.selectedPage}
                         onClick={(e) => {
                             props.onPageChanged(p);
                         }}>{p}</span>
        })
        }
        {props.users.map(u => <div className={style.user} key={u.id}>
        <div><NavLink to={'profile/' + u.id}><img src={u.photos.large != null ? u.photos.large : userPhoto}/></NavLink>
            <div>{u.followed
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.unFollow(u.id)
                }}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                          onClick={() => {
                              props.follow(u.id)
                          }}>Follow</button>}
            </div>
        </div>
        <NavLink to={'profile/' + u.id}>
            <div>{u.name}</div>
        </NavLink>

        <div>{u.status}</div>
        <div>{"u.location.city"}</div>
        <div>{"u.location.country"}</div>
    </div>)
    }
    </div>
}
export default Users;
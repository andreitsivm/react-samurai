import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <div className={style.user_photo}>
                <img src='https://cdn.minval.az/2019/02/a70.jpg'/>
            </div>
            <div>
                <p>{props.post}</p>
                <div>{props.likes}</div>
            </div>
        </div>
    )
}
export default Post;

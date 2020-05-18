import React from 'react';
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx'
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";

const Profile =(props)=>{
  return(
    <div className='profile'>
    <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    <MyPostsContainer/>
    </div>
  )
}
export default Profile;

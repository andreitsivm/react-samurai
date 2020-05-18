import React, {useEffect, useState} from 'react';
import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusHooK from "./ProfileStatusHooK";

const ProfileInfo =(props)=>{
  if(!props.profile){
  return <Preloader/>
}
  return(
    <div className={style.profileInfo}>
    <div className={style.user_photo}>
      <img src={props.profile.photos.large}/>

    </div>
    <div className={style.user_info}>
      <ProfileStatusHooK status={props.status} updateStatus={props.updateStatus}/>
    <ul>
    <li>{props.profile.fullName}</li>
    <li>{props.profile.aboutMe}</li>
    <li>{props.profile.contacts.vk}</li>
    <li>{props.profile.lookingForAJob}</li>
    <li>{props.profile.lookingForAJobDescription}</li>
    </ul>
    </div>
    </div>
  )
}
export default ProfileInfo;

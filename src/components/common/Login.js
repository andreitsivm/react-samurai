import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import s from './Formcontrol.module.css'

const LoginForm=(props)=>{
    return <form onSubmit={props.handleSubmit}>
        <div><Field placeholder={"email"} name={"email"} component={"input"}/></div>
        <div><Field placeholder={"password"} name={"password"} component={"input"} type={'password'}/></div>
        <div><Field component={"input"} name={"rememberMe"} type={"checkbox"} checked/>remember me</div>
        <div><button>Login</button></div>
        {props.error&&<div className={s.generalError}>
            {props.error}
        </div>}
    </form>
}
const LoginReduxForm=reduxForm({form:'login'})(LoginForm)
const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>

    </div>
}

const mapStateToProps=(state)=>{
    return{
        isAuth:state.auth.isAuth
    }
}
export default connect(mapStateToProps,{login,logout})(Login);
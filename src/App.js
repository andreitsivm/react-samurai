import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import {Route} from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/common/Login";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized){
        return <Preloader/>}
        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <div className='app_content'>
                    <Route path='/profile/:userId?'> <ProfileContainer {...this.props}/> </Route>
                    <Route path='/login'> <Login/> </Route>
                    <Route exact path='/dialogs'> <DialogsContainer store={this.props.store}/> </Route>
                    <Route path='/users'><UsersContainer/> </Route>
                </div>
                <Footer/>
            </div>

        );
    }
}
const mapStateToProps=(state)=>{
    return{
        initialized:state.app.initialized
    }
}
export default compose(connect(mapStateToProps,{initializeApp}),withRouter) (App)

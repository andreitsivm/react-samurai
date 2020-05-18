import React from 'react';
import {connect} from "react-redux";
import Header from "./Header";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />

    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        id: state.auth.id
    }
}
export default connect(mapStateToProps, {getAuthUserData,logout})(HeaderContainer);


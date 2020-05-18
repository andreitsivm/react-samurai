import React from 'react'
import {connect} from 'react-redux';
import Users from './Users';
import {follow, requestUsers, setPage, toggleIsProgress, unFollow} from "../../redux/users-reducer";
import Preloader from '../common/Preloader';
import {compose} from "redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {
    getCurrentPage,
    getFollowingProgerss,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../../redux/user-selectors";


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize)

    }

    render() {
        return <>
            {this.props.isFetching ?<Preloader/>:null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}
const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingProgerss(state)
    }
}

// const mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followUserCreator(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowUserCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersCreator(users))
//         },
//         setPage: (currentPage) => {
//             dispatch(setPageCreator(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersAC(totalUsersCount))
//         },
//         toggleIsFetching:(isFetching)=>{
//              dispatch(setIsFetchingAC(isFetching))
//         }
//         // setNextPageBlock:(currentBlockPage)=>{
//         //   dispatch(showNextPageBlockAC(currentBlockPage))
//         // }
//     }
// }
export default compose(connect(mapStateToProps, {follow,unFollow,
    setPage,toggleIsProgress,getUsers:requestUsers}),withAuthRedirect
) (UsersAPIComponent);
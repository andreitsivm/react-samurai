import {userAPI} from "../API/api";

const SHOW_NEXT_PAGES = 'SHOW_NEXT_PAGES';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: null,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NEXT_PAGES:
            return {...state, currentBlockPage: action.currentBlockPage};
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            };
        case SET_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            };
        case SET_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.isProgress
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}
export const toggleIsProgress = (isProgress, userId) => {
    return {
        type: TOGGLE_FOLLOWING_IN_PROGRESS,
        isProgress, userId
    }
}

export const followSuccess = (userId) => {
    return {
        type: 'FOLLOW_USER',
        userId: userId
    }
};
export const unFollowSuccess = (userId) => {
    return {
        type: 'UNFOLLOW_USER',
        userId: userId
    }
};
export const setUsers = (users) => {
    return {
        type: 'SET_USERS',
        users: users
    }
};
export const setPage = (currentPage) => {
    return {
        type: 'SET_PAGE',
        currentPage: currentPage
    }
};
export const setTotalUsers = (totalUsersCount) => {
    return {
        type: 'SET_TOTAL_COUNT',
        totalUsersCount: totalUsersCount
    }
};
export const toggleIsFetching = (isFetching) => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching: isFetching
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsProgress(true, id));
        userAPI.followUser(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id))
                dispatch(toggleIsProgress(false, id))
            }
        })
    }
}
export const unFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleIsProgress(true, id));
        userAPI.unFollowUser(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollowSuccess(id))
                dispatch(toggleIsProgress(false, id))
            }
        })
    }
}

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setPage(page))
        userAPI.getUsers(page, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsers(data.totalCount));

        });

    }
}
export default usersReducer;

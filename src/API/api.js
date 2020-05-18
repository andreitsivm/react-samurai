import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "be9114e3-c683-4e98-8c32-6caf10864119"
    },

})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`/users?page=${currentPage} &count=${pageSize}`)
            .then(response => {
                return response.data

            })
    },
    followUser(id) {
        return instance.post(`follow/${id}`)
    },
    unFollowUser(id) {
        return instance.delete(`follow/${id}`)
    }
}
export const profileAPI={
    getUserProfile(id){
        return instance.get(`profile/${id}`)
    },
    getStatus(id){
        return instance.get(`profile/status/${id}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`,{status})
    },
    uploadPhoto(photo){
        return instance.put(`profile/status`,{photo})
    }
}

export const authAPI={
    getAuthData(){
        return instance.get('auth/me')
    },
    login(email,password,rememberMe=false){
        return instance.post('auth/login',{email,password,rememberMe})
    },
    logout(){
        return instance.delete('auth/login')
    },
}
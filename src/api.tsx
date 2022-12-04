import axios from "axios";

const API = {
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": `2ab039b3-0657-432a-993c-8a114bc9f9d4`}
}


export const instance = axios.create(API)

export const usersAPI = {
    getUsers (currentPage:number, pageSize:number) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId:number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId:number) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile (userId:string) {
        return profileAPI.getProfile(userId)

    }
}

export const authApi = {
    authMe () {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
      getProfile (userId:string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId:string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status:string) {
        return instance.put(`profile/status`, { status: status})
    }

}


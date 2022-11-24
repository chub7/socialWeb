import axios from "axios";

const API = {
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {"API-KEY": `2ab039b3-0657-432a-993c-8a114bc9f9d4`}
}


export const instance = axios.create(API)

export const getUsers = (currentPage:number, pageSize:number) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}
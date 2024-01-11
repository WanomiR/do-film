import axios from "axios";
import {IUserData} from "../types/users";


const api = axios.create({
    baseURL: "http://localhost:8000",
})

export const fetchAllUsers = async (): Promise<Array<IUserData>> => {
    const response = await api.get("/users/")
    return response.data
}
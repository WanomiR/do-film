import api from "./api";
import {IUserData} from "../types/users";


export const fetchAllUsers = async (): Promise<Array<IUserData>> => {
    const res = await api.get("/users/")
    return res.data
}


export const postNewUser = async (data: IUserData): Promise<IUserData> => {
    const res = await api.post("/users/", data);
    return res.data
}
import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../services/hooks";
import {fetchUsers} from "../../services/counter-slice";


// @ts-ignore
const User = ({userData}) => {
    const {first_name, last_name, email, nickname, id} = userData;

    return (
        <li className={"row gap-3"}>
            <div className={"col-auto"}>{id}</div>
            <div className={"col-auto"}>{first_name}</div>
            <div className={"col-auto"}>{last_name}</div>
            <div className={"col-auto"}>{email}</div>
            <div className={"col-auto"}>{nickname ? nickname : "No nickname"}</div>
        </li>
    )
}



export const Users = () => {

    const dispatch = useAppDispatch();
    const usersList = useAppSelector(state => state.users.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])


    return (
        <div>
            <h3 className={"mb-3"}>Users List</h3>
            <ul>
                {usersList.map((userData, index) =>
                    <User userData={userData} key={index}/>)}
            </ul>
        </div>
    )
}
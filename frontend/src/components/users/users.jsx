import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../services/hooks";

import {fetchUsers} from "../../services/users-slice";
import {User} from "./user/user";
import {CreateUser} from "./create-user/create-user";


export const Users = () => {

    const dispatch = useAppDispatch();
    const usersList = useAppSelector(state => state.users.users);
    const postUserStatus = useAppSelector(state => state.users.postUserStatus);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [postUserStatus])


    return (
        <section>
            <div>
                <h3 className={"m-4"}>Add new user</h3>
                <CreateUser/>
            </div>
            <div>
                <h3 className={"m-4"}>All users list</h3>
                <ul>
                    {usersList.map((userData, index) =>
                        <User userData={userData} key={index}/>)}
                </ul>
            </div>
        </section>
    )
}
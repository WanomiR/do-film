import React, {useEffect} from "react";
import {useAppDispatch} from "../../services/hooks";
import {fetchUsers} from "../../services/counter-slice";


export const Users: React.FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [])


    return (
        <p>Not void.</p>
    )
}
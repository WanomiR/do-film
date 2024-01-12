// @ts-nocheck
import {useRef, useState} from "react";
import {useAppDispatch} from "../../../services/hooks";
import {postUser} from "../../../services/users-slice";


export const CreateUser = () => {

    const dispatch = useAppDispatch();

    const initialFormState = {
        firstName: "",
        lastName: "",
        nickname: "",
        email: "",
        password: ""
    };
    const [formState, setFormState] = useState(initialFormState);
    const firstFieldRef = useRef(null);


    const handleInputChange = event => {

        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        setFormState({
            ...formState,
            [name]: value,
        });
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(postUser(formState));
        setFormState(initialFormState);
        firstFieldRef.current?.focus()
    }

    return (
        <form className={"m-4"} onSubmit={handleFormSubmit}>
            <div className={""}>
                <label htmlFor={"firstName"} className={"form-label"}>
                    First name
                    <input
                        className={"form-control"}
                        type={"text"}
                        id={"firstName"}
                        name={"firstName"}
                        value={formState.firstName}
                        onChange={handleInputChange}
                        ref={firstFieldRef}
                        required
                    />
                </label>
            </div>
            <div className={""}>
                <label htmlFor={"lastName"} className={"form-label"}>
                    Last name
                    <input
                        className={"form-control"}
                        type={"text"}
                        id={"lastName"}
                        name={"lastName"}
                        value={formState.lastName}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className={""}>
                <label htmlFor={"nickname"} className={"form-label"}>
                    Nickname
                    <input
                        className={"form-control"}
                        type={"text"}
                        id={"nickname"}
                        name={"nickname"}
                        value={formState.nickname}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <div className={""}>
                <label htmlFor={"email"} className={"form-label"}>
                    Email
                    <input
                        className={"form-control"}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <div className={"mb-2"}>
                <label htmlFor={"password"} className={"form-label"}>
                    Password
                    <input
                        className={"form-control"}
                        type={"text"}
                        id={"password"}
                        name={"password"}
                        value={formState.password}
                        onChange={handleInputChange}
                        required
                    />
                </label>
            </div>
            <button className={"btn btn-primary"} type={"submit"}>
                Submit
            </button>
        </form>
    )
}
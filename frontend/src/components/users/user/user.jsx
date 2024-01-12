// @ts-ignore
export const User = ({userData}) => {
    const {firstName, lastName, email, nickname, id} = userData;

    return (
        <li className={"row gap-3"}>
            <div className={"col-auto"}>{id}</div>
            <div className={"col-auto"}>{firstName}</div>
            <div className={"col-auto"}>{lastName}</div>
            <div className={"col-auto"}>{email}</div>
            <div className={"col-auto"}>{nickname ? nickname : "No nickname"}</div>
        </li>
    )
}




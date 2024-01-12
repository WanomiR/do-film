

export interface IUserData {
    firstName: string;
    lastName?: string;
    nickname?: string;
    email: string;
    password: string;
    id: number;
}

export interface UsersState {
    users: Array<IUserData | null>;
    fetchUsersStatus: "idle" | "loading" | "failed";
    postUserStatus: "idle" | "pending" | "failed";
}





export interface IUserData {
    first_name: string;
    last_name?: string;
    nickname?: string;
    email: string;
    password: string;
    id: number;
}

export interface UsersState {
    users: Array<IUserData | null>
    status: "idle" | "loading" | "failed";
}



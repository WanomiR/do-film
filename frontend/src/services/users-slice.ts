import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {RootState, AppThunk} from "./store";
import {fetchAllUsers, postNewUser} from "../api/users-api";
import {IUserData, UsersState} from "../types/users";



const initialState: UsersState = {
    users: [],
    fetchUsersStatus: "idle",
    postUserStatus: "idle",
}


export const fetchUsers: any = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await fetchAllUsers();
    }
)

export const postUser: any = createAsyncThunk(
    "users/postNewUser",
    async (data: IUserData) => {
        return await postNewUser(data);
    }
)

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.fetchUsersStatus = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<IUserData>>) => {
                state.fetchUsersStatus = "idle";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, state => {
                state.fetchUsersStatus = "failed";
            })
            .addCase(postUser.pending, state => {
                state.postUserStatus = "pending"
            })
            .addCase(postUser.fulfilled, state => {
                state.postUserStatus = "idle"
            })
            .addCase(postUser.rejected, state => {
                state.postUserStatus = "failed"
            })
    },
});


export default usersSlice.reducer;
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {RootState, AppThunk} from "./store";
import {fetchAllUsers} from "../api/users-api";
import {IUserData, UsersState} from "../types/users";



const initialState: UsersState = {
    users: [],
    status: "idle"
}


export const fetchUsers: any = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        return await fetchAllUsers();
    }
)

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<Array<IUserData>>) => {
                state.status = "idle";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, state => {
                state.status = "failed";
            });
    },
});


export default usersSlice.reducer;
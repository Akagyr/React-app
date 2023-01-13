import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        return data;
    }
);

const initialState = {
    startUsersCount: 0,
    endUsersCount: 3,
    items: [],
    showItems: [],
    statusApi: "",
    currentUser: {},
    isShowUserInfo: false,
    isShowUserAdd: false,
    isShowUserEdit: false,
    isShowUserDelete: false,
    modalTitle: "",
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        showStartUsers: (state) => {
            state.showItems = state.items.slice(state.startUsersCount, state.endUsersCount);
        },
        showNextUsers: (state) => {
            state.startUsersCount += 3;
            state.endUsersCount += 3;
            const addItems = state.items.slice(state.startUsersCount, state.endUsersCount);
            state.showItems = state.showItems.concat(addItems);
        },
        openModalUserInfo: (state, action) => {
            state.currentUser = state.showItems.find(item => item.id === action.payload);
            state.isShowUserInfo = true;
            state.modalTitle = "Info user";
        },
        openModalUserAdd: (state) => {
            state.isShowUserAdd = true;
            state.modalTitle = "Create new user";
        },
        addUser: (state, action) => {
            if (action.payload.title === "" || action.payload.body === "") {
                alert("User didn't create! Please fill in all fields! ");
            } else {
                state.showItems.push(action.payload);
                state.isShowUserAdd = false;
            }
        },
        openModalUserEdit: (state, action) => {
            state.currentUser = state.showItems.find(item => item.id === action.payload);
            state.isShowUserEdit = true;
            state.modalTitle = "Edit user";
        },
        updateUser: (state, action) => {
            state.currentUser = state.showItems.find(item => item.id === action.payload.id);
            state.currentUser.name = action.payload.name;
            state.currentUser.username = action.payload.username;
            state.currentUser.email = action.payload.email;
            state.currentUser.phone = action.payload.phone;
            state.currentUser.website = action.payload.website;
            state.isShowUserEdit = false;
        },
        openModalUserDelete: (state, action) => {
            state.currentUser = state.showItems.find(item => item.id === action.payload);
            state.isShowUserDelete = true;
            state.modalTitle = "Delete user";
        },
        deleteUser: (state, action) => {
            state.currentUser = state.showItems.find(item => item.id === action.payload);
            state.showItems = state.showItems.filter(item => item.id !== action.payload);
            state.isShowUserDelete = false;
        },
        closeModalUser: (state) => {
            state.isShowUserInfo = false;
            state.isShowUserAdd = false;
            state.isShowUserEdit = false;
            state.isShowUserDelete = false;
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.statusApi = "loading";
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.statusApi = "success";
            state.items = action.payload;
        },
        [fetchUsers.rejected]: (state) => {
            state.statusApi = "error";
        },
    }
});

export const {
    showStartUsers,
    showNextUsers,
    openModalUserInfo,
    openModalUserAdd,
    addUser,
    openModalUserEdit,
    updateUser,
    openModalUserDelete,
    deleteUser,
    closeModalUser
} = usersSlice.actions;

export default usersSlice.reducer;
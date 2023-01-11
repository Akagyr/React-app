import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async () => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        return data;
    }
);

const initialState = {
    startCountPosts: 0,
    endCountPosts: 3,
    items: [],
    showItems: [],
    statusApi: "",
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        showStartPosts: (state) => {
            state.showItems = state.items.slice(state.startCountPosts, state.endCountPosts);
        },
        showNextPosts: (state) => {
            state.startCountPosts += 3;
            state.endCountPosts += 3;
            const addItems = state.items.slice(state.startCountPosts, state.endCountPosts);
            state.showItems = state.showItems.concat(addItems);
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.statusApi = "loading";
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.statusApi = "success";
            state.items = action.payload;
        },
        [fetchPosts.rejected]: (state) => {
            state.statusApi = "error";
        },
    }
});

export const {
    showStartPosts,
    showNextPosts
} = postsSlice.actions;

export default postsSlice.reducer;
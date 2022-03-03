import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPosts, createPost } from './postAPI'


const initialState = {
    items: [],
    item: {},
    status: 'idle'
}

export const fetchPostsAsync = createAsyncThunk(
    'poster/fetchPosts',
    async () => {
        // const data = await fetchPosts()
        // return data // return 'Payload'
        ///////////////////////////////////
        const res = await fetchPosts()
        return res.data // return 'Payload'
    }
)

export const createPostAsync = createAsyncThunk(
    'poster/createPost',
    async (newPost) => {
        const res = await createPost(newPost)
        return res.data // return 'Payload'
    }
)

export const postSlice = createSlice({
    name: 'post_slice',
    initialState,
    reducers: {
        // addItem: state => {
        //     state.items = [ state.item, ...state.items ]
        // },
    },
    extraReducers: builder => {
        builder.addCase(fetchPostsAsync.pending, (state) => {
                state.status = 'loading' 
            }).addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.items = action.payload
            })
        builder.addCase(createPostAsync.pending, (state) => {
                state.status = 'loading'
            }).addCase(createPostAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.item = action.payload
                // Is this the best way???
                state.items = [ action.payload, ...state.items] // ???
            })  
    }
})

// const { addItem } = postSlice.actions

export const selectPosts = state => state.post.items // <- The name of the reducer from store.js

// const selectPost = state => state.post.item
// export const addPost = () => (dispatch, getState) => {
//     const post = selectPost(getState())
//     console.log(post)
//     if (!post) {
//         dispatch(addItem())
//     }
// }

export default postSlice.reducer
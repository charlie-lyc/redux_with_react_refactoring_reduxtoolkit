import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchPosts, createPost } from './postsAPI'


const initialState = {
    items: [],
    status: 'idle' // 'loading', 'succeeded', 'failed'
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
    name: 'poster',
    initialState,
    reducers: {
        reset: state => {
            state.status = 'idle'
        },
        // otherAction: (state, action) => {
        //     state.other = action.payload
        // }
    },
    extraReducers: builder => {
        builder.addCase(fetchPostsAsync.pending, state => {
                state.status = 'loading' 
            }).addCase(fetchPostsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            }).addCase(fetchPostsAsync.rejected, state => {
                state.status = 'failed'
                state.items = []
            })
        builder.addCase(createPostAsync.pending, state => {
                state.status = 'loading'
            }).addCase(createPostAsync.fulfilled, (state, action) => {
                state.status = 'succeeded'

                // state.items = [action.payload, ...state.items]
                /////////////////////////////////////////////////
                state.items.unshift(action.payload)

            }).addCase(createPostAsync.rejected, state => {
                state.status = 'failed'
                state.items = []
            })
    }
})

export const { reset } = postSlice.actions

export const selectPosts = state => state.posts.items // <- The name of the reducer from store.js
export const selectStatus = state => state.posts.status

// export const someAction = () => (dispatch, getState) => {
//     const status = selectStatus(getState())
//     if (status === 'succeeded' || status === 'failed') {
//         dispatch(otherAction())
//     }
// }

export default postSlice.reducer
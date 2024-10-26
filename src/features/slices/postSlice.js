import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'

export const activeRedditPostSlice = createSlice({
    name: 'activeRedditPost',
    initialState: {
        posts: [],
        filterPosts: []
    },
    reducers: {
        loadActiveRedditPost: (state, action) => {
            state.posts.push(action.payload)
        },
        clearPosts: (state) => {
            state.posts = []
            state.filteredPosts = []
        },
        filterFromSearch: (state, action) => {
            const data = current(state.posts)
            const userInput = action.payload.toLowerCase()
            if(action.payload.length < 1) state.filteredPosts = data
            state.filteredPosts = data.filter(post => {
                const postTitle = post.title.toLowerCase()
                const postText = post.text.toLowerCase()

                if(postTitle.toLowerCase().includes(userInput)) {
                    return postTitle.toLowerCase().includes(userInput)
                } else if(postText.toLowerCase().includes(userInput)) {
                    return postText.toLowerCase().includes(userInput)
                } else return
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchActiveRedditPost.fulfilled, (state, action) => {
            action.payload.forEach(each => state.posts.push(each))
            action.payload.forEach(each => state.filteredPosts.push(each))
        })
    }
})

export const {loadActiveRedditPost, clearPosts, filterFromSearch} = activeRedditPostSlice.actions
export const selectActiveRedditPost = (state) => state.activeRedditPostsSlice
export default activeRedditPostSlice.reducer

export const fetchActiveRedditPost = createAsyncThunk('fetch/activeRedditPost', async (activeReddit) => {
    const response = await fetch(`https://www.reddit.com/r/${activeReddit}.json`)
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    const dataList = data.children
    const posts = dataList.map((reddit) => {
        const data = reddit.data
        return {
            title: data.title,
            text: data.selftext,
            author: data.author,
            comments: data.num_comments,
            upVotes: data.ups,
            downVotes: data.downs,
            timeSince: data.created_utc,
            img: data.url,
        }
    })
    return posts
})
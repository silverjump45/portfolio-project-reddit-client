import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const subRedditSlice = createSlice({
    name: 'allSubReddit',
    intitialState: {
        subReddits: [{name: 'Home', img: 'self'}]
    },
    reducers: {
        pushSubReddit: (state, action) => {
            console.log(action.payload)
            state.subReddits.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubReddit.fulfilled, (state, action) => {
            const checkAgainst = []
            action.payload.forEach(each => {
                if(checkAgainst.some(one => one.name === each.name )) return
                checkAgainst.push(each)
                state.subReddits.push(each)
            })
        })
    }
})

export const pushSubReddit = subRedditSlice.actions
export const slectSubReddit = (state) => state.allSubReddit
export default subRedditSlice.reducer

export const fetchSubReddit = createAsyncThunk('fetch/subReddits', async () => {
    const response = await fetch('http://www.reddit.com/r/popular.json')
    const jsonResponse = await response.json()
    const data = jsonResponse.data
    const dataList = data.children
    const names = dataList.map((reddit) => {
        return {
            name: reddit.data.subreddit,
            img: reddit.data.thumbnail
        }
    })
    return names
})
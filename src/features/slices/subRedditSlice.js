import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'


export const subRedditsSlice = createSlice({
    name: 'allSubReddits',
    initialState: {
        subReddits: [{name: 'Home', img: 'self'}]
    },
    reducers: {
        pushSubReddit: (state, action) => {
            console.log(action.payload)
            state.subReddits.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSubReddits.fulfilled, (state, action) => {
            const checkAgainst = []
            action.payload.forEach(each => {
                if(checkAgainst.some(one => one.name === each.name )) return
                checkAgainst.push(each)
                state.subReddits.push(each)
            })
        })
    }
})

export const pushSubReddit = subRedditsSlice.actions
export const selectSubReddits = (state) => state.allSubReddits
export default subRedditsSlice.reducer

export const fetchSubReddits = createAsyncThunk('fetch/subReddits', async () => {

    const response = await fetch('https://www.reddit.com/r/popular.json')
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
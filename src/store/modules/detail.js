import { createSlice } from '@reduxjs/toolkit'

const DetailSlice = createSlice({
    name: 'detail',
    initialState: {
        roomDetail: {},
    },
    reducers: {
        setDetail(state, { payload }) {
            state.roomDetail = payload
        },
    },
})

export const { setDetail } = DetailSlice.actions

export default DetailSlice.reducer

// 全局模块Reducer
import { getEntireRoomList } from '@/api/modules/entire'
import { createSlice } from '@reduxjs/toolkit'

const EntireSlice = createSlice({
    name: 'entire',
    initialState: {
        loading: true,
        list: [], // 房源列表
        totalCount: 0, // 总条数
    },
    reducers: {
        setList(state,{ payload }) {
            state.list = payload
        },
        setTotal( state, { payload }) {
            state.totalCount = payload
        },
        setLoading( state, { payload }) {
            state.loading = payload
        }
    }
})

export const getRoomListAction = (page) => async (dispatch) => {
    dispatch(setLoading(true))
    const res = await getEntireRoomList(page * 20, 20)
    dispatch(setList(res.list))
    dispatch(setTotal(res.totalCount))
    dispatch(setLoading(false))
}

// 导出action
export const { setList, setTotal, setLoading } = EntireSlice.actions

// 导出reducer
export default EntireSlice.reducer

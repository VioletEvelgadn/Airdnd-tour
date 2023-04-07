import { createSlice } from "@reduxjs/toolkit"

const GlobalSlice = createSlice( {
    name: 'global',
    initialState: {
        headerConfig:{
            isFixed: false,
            topTM: false,
        }
    },
    reducers: {
        setHeaderConfig(state, { payload }) {
            state.headerConfig = { ...state.headerConfig, ...payload}
        }
        }
} )

// 导出action
export const { setHeaderConfig } = GlobalSlice.actions

export default GlobalSlice.reducer

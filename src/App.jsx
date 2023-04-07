import React, { memo } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'

const App = memo(() => {
    return <RouterProvider router={router}></RouterProvider>
})

export default App

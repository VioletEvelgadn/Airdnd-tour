import { createRoot } from 'react-dom/client'
import '@/style/reset.scss'
import '@/style/common.scss'
import { Provider } from 'react-redux'
import store from '@/store'

import App from './App'

// 项目需要使用的包:
// npm i react-router-dom @reduxjs/toolkit react-redux axios styled-components classnames

const root = createRoot(document.querySelector('#root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

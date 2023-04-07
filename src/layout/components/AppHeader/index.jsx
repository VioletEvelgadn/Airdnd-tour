import React, {memo, useRef, useState} from "react";
import {HeaderWrapper} from "./style";
import HeaderLeft from './components/HeaderLeft/index';
import HeaderCenter from "./components/HeaderCenter/index";
import HeaderReact from "./components/HeaderReact/index";
import { ThemeProvider } from 'styled-components'
import classNames from "classnames";
import {shallowEqual, useSelector} from "react-redux";
import useScroll from '@/hooks/useScroll'

const Homer = memo( () => {
    const { isFixed, topTM } = useSelector(
        ({ global }) => global.headerConfig,
        shallowEqual
    )
    const [isSearch, setIsSearch] = useState(false)
    const {scrollY} = useScroll()
    const prevScrollY = useRef()

    // 什么时候展开搜索框?  1. 点击搜索栏【isSearch】  2. 滚动时 Y为0
    // 特殊场景:  点击搜索栏展开搜索后 再次滚动隐藏搜索框
    if (!isSearch) prevScrollY.current = scrollY
    if (isSearch && scrollY - prevScrollY.current > 30) setIsSearch(false)

    // 头部透明条件:  1. topTM为true  2. Y为0
    // 面临的问题:  如何将透明度传递给所有后代组件 ->  themeContext
    const isTM = topTM && scrollY === 0

    return (
        <ThemeProvider theme={{ isTM }}>
            <HeaderWrapper className={classNames({ fixed: isFixed })} isSearch={isSearch || isTM} >
                <div className='top'>
                {/*  左  */}
                <HeaderLeft />
                {/*  中  */}
                <HeaderCenter isSearch={isSearch || isTM} clickSearch={() => setIsSearch(true)} />
                {/*  右  */}
                <HeaderReact />
                    {/* 搜索内容承载容器 */}
                    <div className='wrapper'></div>
                </div>
                {/* 搜索内容遮罩 */}
                {isSearch && <div className="mask" onClick={() => setIsSearch(false)}></div>}
            </HeaderWrapper>
        </ThemeProvider>
    )
})

Homer.displayName = 'Homer'

export default Homer

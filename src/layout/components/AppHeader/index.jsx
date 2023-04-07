import React, {memo, useState} from "react";
import {HeaderWrapper} from "./style";
import HeaderLeft from './components/HeaderLeft/index';
import HeaderCenter from "./components/HeaderCenter/index";
import HeaderReact from "./components/HeaderReact/index";
import classNames from "classnames";
import {shallowEqual, useSelector} from "react-redux";

const Homer = memo( () => {

    // 将svg图片封装成组件的形式去使用
    // 优点: 动态的控制宽高与颜色
    const { isFixed } = useSelector(
        ({ global }) => global.headerConfig,
        shallowEqual
    )
    const [isSearch, setIsSearch] = useState(false)

    return (
        <HeaderWrapper className={classNames({ fixed: isFixed })} isSearch={isSearch} >
            <div className='top'>
            {/*  左  */}
            <HeaderLeft />
            {/*  中  */}
            <HeaderCenter isSearch={isSearch} clickSearch={() => setIsSearch(true)} />
            {/*  右  */}
            <HeaderReact />
                {/* 搜索内容承载容器 */}
                <div className='wrapper'></div>
            </div>
            {/* 搜索内容遮罩 */}
            { isSearch && <div className='mask' onClick={() => setIsSearch(false)}></div>}
        </HeaderWrapper>
    )
})

Homer.displayName = 'Homer'

export default Homer

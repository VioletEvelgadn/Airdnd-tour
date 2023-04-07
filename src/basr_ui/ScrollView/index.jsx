import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import React, {memo, useEffect, useRef, useState} from "react";
import {ViewWrapper} from './style'


// 使用条件: *1. 规定类名  *2. 规定嵌套结构【滚动元素】
// 移动大小： 下一个元素距离容器左边距离
const ScrollView = memo(({children}) => {
    const [index, setIndex] = useState(0)
    // 控制左方按钮
    const [showLeft, setShowLeft] = useState(false)
    // 控制右方按钮
    const [showRight, setShowRight] = useState(false)
    // 总宽度
    const scrollRef = useRef()
    // 可滚动宽度
    // .current.clientWidth 获取宽度 scrollWidth
    const scrollableWidth = useRef()

    useEffect(() => {
        // 判断是否能显示 左侧 | 右侧
        // 容器宽度 clientWidth
        const clientWidth = scrollRef.current.clientWidth
        // 滚动条宽度  scrollWidth
        const scrollWidth = scrollRef.current.scrollWidth
        // 可滚动宽度 = 滚动条宽度 - 容器宽度
        scrollableWidth.current = scrollWidth - clientWidth
        setShowLeft(index > 0)
        setShowRight(scrollableWidth.current > 0)
    }, [])

    const move = (isRight) => {
    // 移动下标
        const nextIndex = isRight ? index + 1 : index - 1
        // 获取元素距离容器左边距离
        const nextEl = scrollRef.current.children[nextIndex]
        const leftWidth = nextEl.offsetLeft
    //     移动容器
        scrollRef.current.style.transform = `translateX(-${leftWidth}px)`
    //     更新
        setIndex(nextIndex)
        setShowLeft(nextIndex > 0)
        setShowRight(scrollableWidth.current > leftWidth)
    }

    return (
        <ViewWrapper>
            {/*左按钮 onClick={() => move()} */ }
            { showLeft && <div className='control_btn left' onClick={() => move()}>
                <IconArrowLeft/>
            </div>}
            {/*右按钮*/}
            { showRight && <div className='control_btn right' onClick={() => move(true)}>
                <IconArrowRight/>
            </div>}
            {/*滚动容器*/}
            <div className='wrapper'>
                <div className='scroll-wrapper' ref={scrollRef} >
                    {children}
                </div>
            </div>
        </ViewWrapper>
    )
})

export default ScrollView

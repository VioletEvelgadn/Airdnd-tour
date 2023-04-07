import React, {memo, useEffect, useRef} from "react";
import { IndicatorWrapper } from "@/basr_ui/Indicator/style";

const Indicator = memo(({ children, current }) => {
    const scrollRef = useRef()

    // 条件: 1. 移动距离大于容器一半时   2.  不能超过总滚动距离
    useEffect(() => {
        const nextEl = scrollRef.current.children[current]
        const leftWidth = nextEl.offsetLeft
        const elWidth = nextEl.clientWidth

        const clientWidth = scrollRef.current.clientWidth
        const scrollWidth = scrollRef.current.scrollWidth
        const totalWidth = scrollWidth - clientWidth

    //     计算每次移动距离
        let width = leftWidth + elWidth /2 - clientWidth /2
        // 移动距离小于0  不移动了
        if( width < 0 ) width = 0
        // 移动距离大于总移动距离
        if( width > totalWidth ) width = totalWidth

        scrollRef.current.style.transform = `translateX(-${width}px)`
    }, [current])

    return (
        <IndicatorWrapper>
            <div className='content'>
                <div ref={scrollRef} className='wrapper'>
                    {children}
                </div>
            </div>
        </IndicatorWrapper>
    )
})

Indicator.displayName = 'Indicator'

export default Indicator

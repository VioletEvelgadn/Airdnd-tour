import React, {memo, useEffect, useRef, useState} from "react";
import {RoomWrapper} from "@c/Roomltem/style";
import PropTypes from 'prop-types'
import { Carousel, Rate } from 'antd'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import classNames from 'classnames'
import Indicator from '@/basr_ui/Indicator'




const RoomItem = memo(( { item, width = '25%', itemClick }) => {
    const sliderRef = useRef()
    const [current, setCurrent] = useState(0)
    const changeSlider = (isRight, event) => {
        isRight ? sliderRef.current.next() : sliderRef.current.prev()
        event.stopPropagation()
    }
    // 多图
    const SlideEl = (
        <div className='slider'>
            {/* 控制按钮 */}
            <div className='control'>
                <div className='left' onClick={(e) => changeSlider(false, e)}>
                    <IconArrowLeft width='18' height='18' />
                </div>
                <div className='right' onClick={(e) => changeSlider(true, e)}>
                    <IconArrowRight width='18' height='18' />
                </div>
            </div>

            {/* 指示器 */}
            <div className='indicator'>
                <Indicator current={current}>
                    {item.picture_urls?.map((item, index) => (
                        <div
                            className={classNames('item', { active: current === index })}
                            key={item}
                        >
                            <div className='dot'></div>
                        </div>
                    ))}
                </Indicator>
            </div>

            {/*/!* 走马灯 *!/*/}
            {/*   ref={sliderRef}
                dots={false}
                beforeChange={(from, to) => setCurrent(to)}*/}
            <Carousel
                ref={sliderRef}
                dots={false}
                beforeChange={(from, to) => setCurrent(to)}
            >
                {item.picture_urls?.map((item) => (
                    <div className='cover' key={item}>
                        <div> {item} </div>
                        <img src={item} alt='' />
                    </div>
                ))}
            </Carousel>
        </div>
    )

    // 单图
    const PictureEl = (
        <div className='cover'>
            <img src={item.picture_url} alt='' />
        </div>
    )

    // 跳转方法
    const goPage = () => {
        itemClick && itemClick(item)
    }

    return (
        <RoomWrapper
            rateColor={ item.star_rating_color }
            textColor={item.verify_info.text_color}
            width={width}
        >
            <div className='content'  onClick={goPage} >
                {/* 轮播图显示条件:  picture_urls  */}
                {item.picture_urls ? SlideEl : PictureEl}
                <div className='desc'>{item.verify_info.messages.join(' · ')}</div>
                <div className='name mle'>{item.name}</div>
                <div className='price'>{item.price_format}/晚</div>
                <div className='bottom'>
                    <Rate
                        className='rate'
                        allowHalf
                        disabled
                        defaultValue={item.star_rating}
                    />
                    <span className='count'>{item.reviews_count}</span>
                    {item.bottom_info && ' · ' + item.bottom_info.content}
                </div>
            </div>
        </RoomWrapper>
    )
})

RoomItem.propTypes = {
    item: PropTypes.object,
    width: PropTypes.string
}

RoomItem.displayName = 'RoomItem'

export default RoomItem

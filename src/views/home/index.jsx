import React, {memo, useEffect, useState} from 'react'
import { HomeWrapper } from './style'
import HomeBanner from "@v/home/HomeBanner";
import HomeSection from "@v/home/HomeSection";
import HomeSection2 from "@v/home/HomeSection2";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getHomeDateAction} from "@/store/modules/home";
import { setHeaderConfig } from "@/store/modules/gobal";
import HomeSection3 from "@v/home/HomeSection3";
import {Skeleton} from "antd";
import HomeSection4 from "@v/home/HomeSection4";

const Home = memo(() => {
    const { good, high, discount, hot, plus, longfor, isLoading } = useSelector(({ home }) => home, shallowEqual)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHomeDateAction())
        dispatch(setHeaderConfig({isFixed: false}))
    }, [])

  return (
    <HomeWrapper>
      <HomeBanner />
        <div className='content'>
            <Skeleton
                className='skeleton'
                loading={isLoading}
                active
                paragraph={{ rows: 8 }}
            >
            {/* 折扣房源 */}
            <HomeSection2 infoData={discount} />
            {/* 热门房源 */}
             <HomeSection2 infoData={hot} />
            {/* 你可能想去 */}
            <HomeSection4 infoData={longfor} />
            {/* 高性价比房源 */}
            <HomeSection infoData={good} />
            {/* 高分好评房源 */}
            <HomeSection infoData={high} />
            {/* PLUS房源 */}
            <HomeSection3 infoData={plus} />
            </Skeleton>
        </div>
    </HomeWrapper>
  )
})

Home.displayName = 'Home'

export default Home

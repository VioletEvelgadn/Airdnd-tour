import React, {memo} from "react";
import RoomItem from "@c/Roomltem";
import {ListWrapper} from "@v/entire/components/EntireList/style"
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setDetail } from '@/store/modules/detail'

const EntireList = memo(() => {
    const { list, totalCount, loading } = useSelector(
        ({ entire }) => entire,
        shallowEqual
    )
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const goDetail = (item) => {
        // 跨页面传递参数 ->   1. 查询字符串   2.  动态路由    3. redux
        navigate('/detail')
        dispatch(setDetail(item))
    }

    return (
        <ListWrapper>
            {!!totalCount && <h2 className='title'>{totalCount}多处住所</h2>}
        <div className='list'>
            { list.map( item => (
                <RoomItem
                key={item.id}
                item={item}
                width='20%'
                itemClick={goDetail}
            />) ) }
        </div>
            {loading && <div className='mask'></div>}
        </ListWrapper>
    )
})

EntireList.displayName = 'EntireList'

export default EntireList

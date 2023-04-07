import { getRoomListAction } from '@/store/modules/entire'
import { Pagination } from 'antd'
import React, { memo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PaginationWrapper } from './style'

const EntirePagination = memo(() => {
    const totalCount = useSelector(({ entire }) => entire.totalCount)
    const [current, setCurrent] = useState(1)
    const pageSize = 20

    // 滚动处理: 1. 页码改变时置顶  2. 跳转页面时置顶
    const dispatch = useDispatch()
    const pageChange = (page) => {
        window.scrollTo({ top: 0 })
        setCurrent(page)
        dispatch(getRoomListAction(page - 1))
    }

    const start = pageSize * (current - 1) + 1
    const end = current * pageSize

    return (
        <PaginationWrapper>
            <Pagination
                current={current}
                onChange={pageChange}
                pageSize={pageSize}
                total={totalCount}
                showSizeChanger={false}
            />
            <div className='info'>
                第 {start} - {end} 个房源, 共超过 {totalCount} 个
            </div>
        </PaginationWrapper>
    )
})

export default EntirePagination

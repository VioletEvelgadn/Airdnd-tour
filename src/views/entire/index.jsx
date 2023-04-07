import React, {memo, useEffect} from 'react'
import { EntireWrapper } from './style'
import EntireFilter from "@v/entire/components/EntireFilter";
import EntireList from "@v/entire/components/EntireList";
import { useDispatch } from 'react-redux'
import { setHeaderConfig } from '@/store/modules/gobal'
import { getRoomListAction } from '@/store/modules/entire'
import EntirePagination from "@v/entire/components/EntirePagination";

const Entire = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: true }))
    dispatch(getRoomListAction())
  }, [dispatch])

  return <EntireWrapper>
    <EntireFilter />
    <EntireList />
    <EntirePagination />
  </EntireWrapper>
})

Entire.displayName = 'Entire'

export default Entire

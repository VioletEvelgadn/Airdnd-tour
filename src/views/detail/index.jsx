import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPictures from "@v/detail/components/DetailPictures";
import DetailContent from "@v/detail/components/DetailContent";
import { useDispatch } from 'react-redux'
import { setHeaderConfig } from '@/store/modules/gobal'

const Detail = memo(() => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setHeaderConfig({ isFixed: false }))
  })

  return(
      <DetailWrapper>
        <DetailPictures />
        <DetailContent />
      </DetailWrapper>
  )})

Detail.displayName = 'Detail'

export default Detail

import React, {memo, useState} from "react";
import {PicturesWrapper} from "@v/detail/components/DetailPictures/style";
import { useSelector } from 'react-redux'
import PictureBrowser from '@/basr_ui/PictureBrowser'

const DetailPictures = memo(() => {

    const { picture_urls = [] } = useSelector( ( { detail } ) => detail.roomDetail )
    const [show, setShow] = useState(false)

    const showPreView = () => {
        setShow(true)
        document.querySelector('body').style.overflow = 'hidden'
    }

    const hidePreView = () => {
        setShow(false)
        document.querySelector('body').style.overflow = 'auto'
    }

    return (
        <PicturesWrapper>
            <div  className='list'>
                <div className='left'>
                    <div className='item' onClick={showPreView}>
                        <img src={picture_urls[0]} alt='' />
                        <div className='mask'></div>
                    </div>
                </div>
                <div className='right'>
                    {picture_urls.slice(1, 5).map((item) => (
                        <div className='item' key={item} onClick={showPreView}>
                            <img src={item} alt='' />                            <div className='mask'></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='show-btn'>
                显示照片
            </div>
            {show && <PictureBrowser closeClick={hidePreView} imgList={picture_urls} />}
        </PicturesWrapper>
    )
})

DetailPictures.displayName = 'DetailPictures'

export default DetailPictures

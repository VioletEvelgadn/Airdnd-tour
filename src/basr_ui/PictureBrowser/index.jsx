import React, { memo, useState } from 'react'
import { PicturesWrapper } from './style'
import IconClose from '@/assets/svg/icon-close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleArrowBottom from '@/assets/svg/icon-triangle-arrow-bottom'
import Indicator from '../Indicator'
import classNames from 'classnames'
import IconTriangleArrowTop from '@/assets/svg/icon-triangle-arrow-top'

const PictureBrowser = memo(({ closeClick, imgList = [] }) => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  const changeIndex = (isRight) => {
    let nIndex = isRight ? index + 1 : index - 1
    // 判断阈值
    if (nIndex < 0) nIndex = imgList.length - 1
    if (nIndex > imgList.length - 1) nIndex = 0
    setIndex(nIndex)
  }

  return (
    <PicturesWrapper>
      <div className='top'>
        <div className='close-btn' onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className='center'>
        <div className='control'>
          <div className='btn left' onClick={() => changeIndex()}>
            <IconArrowLeft width='72' height='72' />
          </div>
          <div className='btn right' onClick={() => changeIndex(true)}>
            <IconArrowRight width='72' height='72' />
          </div>
        </div>
        <div className='cover'>
          <img src={imgList[index]} alt='' />
        </div>
      </div>
      <div className='bottom'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>
                {index + 1}/{imgList.length}:
              </span>
              <span>room apartment图片{index + 1}</span>
            </div>
            <div class='toggle' onClick={() => setShow(!show)}>
              <span>{show ? '隐藏' : '显示'}照片列表</span>
              {show ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
            </div>
          </div>
          <div className='list2'>
            {show && (
              <Indicator current={index}>
                {imgList.map((item, index2) => (
                  <div
                    className={classNames('item', { active: index2 === index })}
                    key={item}
                    onClick={() => setIndex(index2)}
                  >
                    <img src={item} alt='' />
                  </div>
                ))}
              </Indicator>
            )}
          </div>
        </div>
      </div>
    </PicturesWrapper>
  )
})

PictureBrowser.displayName = 'PictureBrowser'

export default PictureBrowser

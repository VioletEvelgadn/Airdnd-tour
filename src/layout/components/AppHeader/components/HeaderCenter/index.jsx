import IconSearchBar from '@/assets/svg/icon-search-bar'
import React, { memo } from 'react'
import { CenterWrapper } from '../style'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo(() => {
    return (
        <CenterWrapper>
            <CSSTransition classNames="bar" timeout={250}>
                <div className='search-bar'>
                    <div className='text'>搜索房源和体验</div>
                    <div className='icon'>
                        <IconSearchBar />
                    </div>
                </div>
            </CSSTransition>
            {/*<CSSTransition className='tabs'>*/}
            {/*    123*/}
            {/*</CSSTransition>*/}
            {/*<div className='search-bar'>*/}
            {/*    <div className='text'>搜索房源和体验</div>*/}
            {/*    <div className='icon'>*/}
            {/*        <IconSearchBar />*/}
            {/*    </div>*/}
            {/*</div>*/}

        </CenterWrapper>
    )
})

export default HeaderCenter

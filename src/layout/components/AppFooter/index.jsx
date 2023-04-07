import React, {memo} from "react";
import {FooterWrapper} from "@/layout/components/AppFooter/style";
import footerData from '@/assets/data/footer_data'
const AppFooter = memo(() => {
    return (
        <FooterWrapper>
            <div className='wrapper'>
                <div className='service'>
                    {
                     footerData.map( item => {
                         return (
                             <div className='item' key={item.name}>
                                <div className='name'>{item.name}</div>
                                 <div className='list'>
                                     { item.list.map( list => {
                                         return (
                                             <div className='item2' key={list}>
                                                 {list}
                                             </div>
                                         )
                                     } ) }
                                 </div>
                             </div>
                         )
                     } )
                    }
                </div>
                <div className='statement'>
                    © 2023 Airbnb, Inc. All rights reserved.条款 · 隐私政策 · 网站地图 ·
                    全国旅游投诉渠道 12301
                </div>
            </div>
        </FooterWrapper>
    )
})

export default AppFooter

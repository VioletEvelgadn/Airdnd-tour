import React, {memo, useEffect, useState} from "react";
import {RightWrapper} from "../style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderReact = memo( () => {
        const [ show, setShow ] = useState( false )
    useEffect( () => {
    //     使用事件捕获
        window.addEventListener( 'click', hideShow, true )

        function hideShow() {
            setShow(false)
        }

        return () => {
            window.removeEventListener('click', hideShow)
        }

    }, [] )

    const panel = (
        <div className='panel'>
            <div className='top'>
                <div className='item login'>注册</div>
                <div className='item'>登录</div>
            </div>
            <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
            </div>
        </div>
    )

    return (
        <RightWrapper>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
            <IconGlobal />
          </span>
            </div>
            <div className='profile' onClick={ () => setShow( true ) } >
                <IconMenu />
                <IconAvatar />
                { show && panel }
            </div>
        </RightWrapper>
    )
} )

export default HeaderReact

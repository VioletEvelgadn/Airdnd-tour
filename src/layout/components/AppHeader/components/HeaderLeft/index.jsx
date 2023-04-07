import React, {memo} from "react";
import IconLogo from "@/assets/svg/icon_logo";
import { useNavigate } from 'react-router-dom'
import {LeftWrapper} from "../style";

const HeaderLeft = memo( () => {
    const navigate = useNavigate()
    return (
        <LeftWrapper>
            <div className='logo'>
                <div className='icon' onClick={() => navigate('/')}>
                    <IconLogo />
                </div>
            </div>
        </LeftWrapper>
    )
} )

export default HeaderLeft

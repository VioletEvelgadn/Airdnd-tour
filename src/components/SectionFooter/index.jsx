import React, {memo} from "react";
import IconMoreArrow from "@/assets/svg/icon-more-arrow";
import {FooterWrapper} from "./style";
import {useNavigate} from "react-router-dom";

const SectionFooter = memo(({ name }) => {
    const navigate = useNavigate()
    const goMore = () => {
        navigate('/entire')
    }

    const moreText = name ? `显示更多${name}` : '显示全部'

    return (
        <FooterWrapper name={name}>
            <div className='more' onClick={goMore}>
                {moreText}
                <div className='icon'>
                    <IconMoreArrow />
                </div>
            </div>

        </FooterWrapper>
    )
})

export default SectionFooter

import React, {memo} from "react";
import {HeaderWrapper} from "./style";

const SectionHeader = memo(( { title, subtitle } ) => {
    return (
        <HeaderWrapper>
            <h2 className='title'>{ title }</h2>
            {/* 副标题 */}
            {subtitle && <h3 className='subtitle'>{ subtitle }</h3> }
        </HeaderWrapper>
    )
})

export default SectionHeader

import React, {memo} from "react";
import {SectionWrapper} from "@v/home/HomeSection/style";
import SectionHeader from "@c/SectionHeader";
import SectionList from "@c/SectionList";
import SectionFooter from "@c/SectionFooter";

const HomeSection = memo(({ infoData = {} }) => {
    return (
        <SectionWrapper>
            {/* 头 */}
            <SectionHeader title = { infoData.title } subtitle = { infoData.subtitle } />
            {/* 内容列表 */}
            <SectionList list={infoData.list} width="25%" />
            {/* 底部 */}
            <SectionFooter />
        </SectionWrapper>
    )
})


HomeSection.displayName = 'HomeSection'

export default HomeSection

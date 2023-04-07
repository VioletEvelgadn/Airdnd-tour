import React, {memo, useCallback, useMemo, useState} from "react";
import {SectionWrapper} from "@v/home/HomeSection/style";
import SectionHeader from "@c/SectionHeader";
import SectionList from "@c/SectionList";
import SectionFooter from "@c/SectionFooter";
import SectionTabs from "@c/SectionTabs";

const HomeSection = memo(({ infoData = {} }) => {
    // 默认第一个字段的name作为初始显示
    const [name, setName] = useState(infoData.dest_address[0].name)
    // 处理tabs需要的数据
    const tabList = useMemo( () => infoData.dest_address.map((item) => item.name), [infoData])
    // 处理tab改变
    const tabChange = useCallback( (i) => { setName(tabList[i]) }, [tabList] )

    return (
        <SectionWrapper>
            {/* 头 */}
            <SectionHeader title = { infoData.title } subtitle = { infoData.subtitle } />
            {/* 滚动框 */}
            <SectionTabs tabList={tabList} tabChange={tabChange}  />
            {/* 内容列表 */}
            <SectionList list={infoData.dest_list[name]} width="33.3333%" />
            {/* 底部 */}
            <SectionFooter name={name} />
        </SectionWrapper>
    )
})


HomeSection.displayName = 'HomeSection'

export default HomeSection

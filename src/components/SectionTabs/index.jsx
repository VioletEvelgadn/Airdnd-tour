import React, {memo, useState} from "react";
import {TabsWrapper} from "@c/SectionTabs/style";
import classNames from "classnames";
import ScrollView from "@/basr_ui/ScrollView";

const SectionTabs = memo(({tabList = [], tabChange}) => {
    const [current, setCurrent] = useState(0)
    const changeCount = (i) => {
        setCurrent(i)
        tabChange && tabChange(i)
    }
    return (
        <TabsWrapper>
            <ScrollView>
                {tabList.map( (item,index) =>
                    (<div
                    key={item}
                    className={classNames('item', { active: index === current })}
                    onClick={() => changeCount(index)}
                >{ item } </div>) )  }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.displayName = 'SectionTabs'

export default SectionTabs

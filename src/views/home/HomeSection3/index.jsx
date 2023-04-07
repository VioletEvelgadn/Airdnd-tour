import React, {memo, useEffect} from "react";
import {SectionWrapper} from "@v/home/HomeSection/style";
import SectionHeader from "@c/SectionHeader";
import SectionFooter from "@c/SectionFooter";
import ScrollView from "@/basr_ui/ScrollView";
import RoomItem from "@c/Roomltem";

const HomeSection3 = memo(({ infoData = {} }) => {
    return (
        <SectionWrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
            <div className='content'>
                <ScrollView>
                    {infoData.list.map((item) => (
                        <RoomItem key={item.id} item={item} width='20%'></RoomItem>
                    ))}
                </ScrollView>
            </div>
            <SectionFooter name={infoData.type} />
        </SectionWrapper>
    )
})


HomeSection3.displayName = 'HomeSection'

export default HomeSection3

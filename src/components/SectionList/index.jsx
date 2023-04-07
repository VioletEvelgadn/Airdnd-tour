import React, {memo} from "react";
import {ListWrapper} from "@c/SectionList/style";
import RoomItem from "@c/Roomltem";
const SectionList = memo(({ list = [], width }) => {
    return (
        <ListWrapper>
            {list.slice(0, 8).map((item) => (
                <RoomItem key={item.id} item={item} width={width} />
            ))}
        </ListWrapper>
    )
})


SectionList.displayName = 'SectionList'

export default SectionList

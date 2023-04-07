import React, {memo} from "react";
import { ContentWrapper } from "@v/detail/components/DetailContent/style";

const DetailContent = memo(() => {
    return (
        <ContentWrapper>---详细内容---</ContentWrapper>
    )
})

DetailContent.displayName = 'DetailContent'

export default DetailContent

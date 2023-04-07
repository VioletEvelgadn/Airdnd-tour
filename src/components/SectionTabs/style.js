import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  margin: 8px 0;
  .item {
    /* 是否flex压缩 */
    flex-shrink: 0;
    /* flex最低分配宽度 */
    flex-basis: 120px;
    /* min-width: ; */
    padding: 14px 16px;
    border: 0.5px solid rgb(216, 216, 216);
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    margin-right: 16px;
    cursor: pointer;
    white-space: nowrap;
    box-sizing: border-box;
    &.active {
      background-color: var(--p-color2);
      color: #FFF;
    }
  }
`

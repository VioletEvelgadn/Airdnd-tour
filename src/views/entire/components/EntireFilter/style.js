import styled from "styled-components";

export const  FilterWrapper = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background-color: #fff;
  border-bottom: 1px solid rgb(242, 242, 242);
  height: 48px;
  padding-left: 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  z-index: 9;

  .item {
    margin: 0px 4px 0px 8px;
    padding: 6px 12px;
    border: 1px solid rgb(220, 224, 224);
    border-radius: 4px;
    color: rgb(72, 72, 72);
    cursor: pointer;
    &.active {
      background-color: var(--p-color2);
      border-color: var(--p-color2);
      color: #fff;
    }
  }
`

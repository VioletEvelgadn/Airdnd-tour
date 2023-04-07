import styled from "styled-components";

export const HeaderWrapper = styled.div`
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }

  .top {
    display: flex;
    height: 80px;
    align-items: center;
    background-color: #FFF;
    border-bottom: 1px solid var(--bg-color);
    padding: 0 24px;
    box-sizing: border-box;
    z-index: 9999;
    position: relative;
  }

  .wrapper {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    background-color: #FFF;
    transition: height .25s ease;
    height: ${props => props.isSearch ? 100 : 0}px;
    z-index: -1;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 99;
  }
`
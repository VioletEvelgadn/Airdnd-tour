import styled from 'styled-components'

export const ViewWrapper = styled.div`
  position: relative;
  width: 100%;

  .control_btn {
    width: 28px;
    height: 28px;
    background-color: rgb(255, 255, 255);
    border: 2px solid rgb(255, 255, 255);
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    z-index: 9;
    &.left {
      left: 0;
      transform: translateX(-50%) translateY(-50%);
    }
    &.right {
      right: 0;
      transform: translateX(50%) translateY(-50%);
    }
  }

  /* 滚动容器 */
  .wrapper {
    overflow: hidden;
    .scroll-wrapper {
      display: flex;
      transition: transform .3s ease;
    }
  }
`

import styled from 'styled-components'

export const PicturesWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333333;
  z-index: 999;
  display: flex;
  flex-direction: column;

  .top {
    height: 86px;
    position: relative;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .center {
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .cover {
      user-select: none;
    }

    .control {
      position: absolute;
      z-index: 1;
      inset: 0px;
      display: flex;
      justify-content: space-between;
      color: rgb(255, 255, 255);

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }
  }

  .bottom {
    height: 100px;
    .info {
      width: 105vh;
      margin: 0 auto;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;
      }

      .list2 {
        height: 67px;
        margin-top: 5px;
        .item {
          margin-right: 15px;
          cursor: pointer;
          img {
            height: 72px;
            opacity: 0.5;
          }
          &.active img {
            opacity: 1;
          }
        }
      }
    }
  }
`

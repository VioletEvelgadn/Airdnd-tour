import styled from "styled-components";

export const PicturesWrapper = styled.div`
  position: relative;
  .list {
    display: flex;
    height: 440px;
    &:hover .mask {
      opacity: 1 !important;
    }

    .item {
      width: 100%;
      height: 100%;
      border: 1px solid rgb(0, 0, 0);
      box-sizing: border-box;
      position: relative;
      cursor: pointer;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
      }

      .mask {
        background-color: rgba(0, 0, 0, 0.3);
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: all 0.2s ease;
      }

      &:hover {
        img {
          transform: scale(1.1);
        }
        .mask {
          opacity: 0 !important;
        }
      }
    }

    .left {
      width: 50%;
    }

    .right {
      width: 50%;
      display: flex;
      flex-wrap: wrap;

      .item {
        width: 50%;
        height: 50%;
      }
    }
  }

  .show-btn {
    position: absolute;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    line-height: 22px;
    border-radius: 4px;
    padding: 6px 15px;
    background-color: rgb(255, 255, 255);
    cursor: pointer;
    font-weight: 700;
  }
`

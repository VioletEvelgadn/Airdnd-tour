import styled from 'styled-components'

export const RoomWrapper = styled.div`
  width: ${(props) => props.width};
  flex-shrink: 0;
  padding: 8px;
  box-sizing: border-box;
  .content {
    width: 100%;
    height: 100%;

    .slider {
      position: relative;
      cursor: pointer;
      &:hover .control {
        display: flex;
      }

      .control {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: none;
        justify-content: space-between;
        z-index: 1;

        > div {
          width: 83px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .left {
          background-image: linear-gradient(
                  90deg,
                  rgb(0 0 0 / 25%),
                  transparent
          );
        }

        .right {
          background-image: linear-gradient(
                  -90deg,
                  rgb(0 0 0 / 25%),
                  transparent
          );
        }
      }

      .indicator {
        width: 30%;
        margin: 0px auto;
        position: absolute;
        bottom: 10px;
        left: 0px;
        right: 0px;
        z-index: 9;

        .item {
          width: 14.29%;
          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;
          &.active .dot{
            width: 8px;
            height: 8px;
          }
          .dot {
            width: 6px;
            height: 6px;
            background-color: rgb(255, 255, 255);
            border-radius: 50%;
            margin: 0px;

          }
        }
      }
    }
    .cover {
      /* padding的百分比以宽度作为依据 */
      padding: 33.33% 0;
      border-radius: 3px;
      overflow: hidden;
      position: relative;

      img {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
      }
    }

    .desc {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.textColor};
    }

    .name {
      font-size: 16px;
      font-weight: 700;
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.textColor};
      .rate {
        transform: translateY(-1.5px);
        font-size: 12px;
        color: ${(props) => props.rateColor};
        .ant-rate-star {
          margin-inline-end: 0px;
        }
      }

      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`

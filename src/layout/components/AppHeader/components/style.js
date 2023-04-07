import styled from 'styled-components'
const shadow = `
  transition: box-shadow 200ms ease 0s;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  }
`

const fc = `
  display: flex;
  align-items: center;
  justify-content: center;
`

// 中间
export const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 48px;
  
  .search-bar {
    position: absolute;
    ${fc};
    justify-content: space-between;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    transform-origin: center top;
    

    ${shadow}
    .text {
      color: var(--text-color2);
      font-weight: 600;
      padding: 0 14px;
    }

    .icon {
      ${fc};
      width: 32px;
      height: 32px;
      color: #fff;
      background-color: var(--p-color);
      border-radius: 50%;
    }
  }

  .search-tabs {
    position: relative;
    transform-origin: center top;

    .tabs {
      display: flex;
      color: #222;

      .tab {
        width: 64px;
        cursor: pointer;
        margin: 0 16px;
        padding: 10px 0;
        box-sizing: border-box;
        font-size: 16px;

        &.active {
          border-bottom: 2px solid #333;
        }
      }
    }

    .items {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 99;

      .bar {
        display: flex;
        width: 850px;
        height: 66px;
        border-radius: 32px;
        border: 1px solid rgb(221, 221, 221);
        background-color: rgb(255, 255, 255);

        .item {
          flex: 1;
          height: 100%;
          display: flex;
          align-items: center;
          border-radius: 32px;

          &:hover {
            background-color: #eeeeee;
          }

          .info {
            padding: 0 30px;
            flex: 1;

            .city {
              font-size: 12px;
              font-weight: 800;
              color: rgb(34, 34, 34);
            }

            .wtf {
              font-size: 14px;
              color: rgb(102, 102, 102);
            }
          }

          .divider {
            height: 32px;
            width: 1px;
            background-color: rgb(221, 221, 221);
          }


        }
      }
    }
  }

  //  bar
  .bar-enter {
    opacity: 0;
    transform: translateY(40px) scale(1.5);
  }

  .bar-enter-active {
    opacity: 1;
    transform: translateY(0px) scale(1);
    transition: all .25s ease;
  }

  .bar-exit {
    opacity: 0;
  }

  //  tabs
  .tabs-enter {
    opacity: 0;
    transform: translateY(-40px) scale(0.6);
  }

  .tabs-enter-active {
    opacity: 1;
    transform: translateY(0) scale(1);
    transition: all .25s ease;
  }

  .tabs-exit {
    opacity: 1;
    transform: translateY(0) scale(1);
  }

  .tabs-exit-active {
    opacity: 0;
    transform: translateY(-40px) scale(0.6);
    transition: all .25s ease;
  }
`

// 左边
export const LeftWrapper = styled.div`
  flex: 1;
  cursor: pointer;
  .logo {
    color: var(--p-color);
  }
  .icon {
    display: inline-block;
  }
`

// 右边
export const RightWrapper = styled.div`
  flex: 1;
  ${fc};
  justify-content: flex-end;
  .btns {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-right: 5px;
    .btn {
      padding: 11px 14px;
      cursor: pointer;
      border-radius: 22px;
      &:hover {
        background-color: rgb(245, 245, 245);
      }
    }
  }

  .profile {
    ${fc};
    width: 77px;
    height: 42px;
    justify-content: space-around;
    border: 1px solid var(--bg-color);
    border-radius: 25px;
    cursor: pointer;
    ${shadow};
    position: relative;

    .panel {
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
      color: #666;
      font-weight: 600;

      .top,
      .bottom {
        padding: 10px 0;

        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &.login {
            color: var(--text-color2);
          }
          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        border-bottom: 1px solid #ddd;
      }
    }
  }
`

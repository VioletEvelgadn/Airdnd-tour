import styled from "styled-components";

export const ListWrapper = styled.div`
  position: relative;
  margin-top: 128px;
  padding: 30px 20px;

  .title {
    font-size: 22px;
    font-weight: 700;
    color: rgb(34, 34, 34);
    margin: 0px 0px 10px 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255,255,255,0.5);
    z-index: 8;
    height: 100%;
  }
`

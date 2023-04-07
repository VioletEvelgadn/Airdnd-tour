import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .ant-pagination-item {
    border-radius: 50%;
    margin: 0 9px;

    &.ant-pagination-item-active {
      background-color: #222;
      border: 0;
      a {
        color: #fff;
      }
    }
    &:hover {
      text-decoration: underline;
    }
  }

  .info {
    margin-top: 16px;
  }
`

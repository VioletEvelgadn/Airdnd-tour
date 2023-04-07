import styled from 'styled-components'

export const SectionWrapper = styled.div`
  margin-top: 30px;
  .wrapper {
    margin: 0 -8px;

    .longfor-item {
      width: 20%;
      height: 239px;
      flex-shrink: 0;
      padding: 8px;
      box-sizing: border-box;

      .content {
        width: 100%;
        height: 100%;
        border-radius: 3px;
        overflow: hidden;
        position: relative;

        .cover {
          width: 100%;
        }

        .info {
          position: absolute;
          left: 8px;
          right: 8px;
          bottom: 0px;
          color: #fff;
          z-index: 9;
          padding-bottom: 32px;
          text-align: center;
          .city {
            font-size: 18px;
            font-weight: 600;
          }
          .price {
            font-size: 14px;
            margin-top: 5px;
          }
        }

        .bg {
          height: 60%;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: linear-gradient(
            0deg,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0)
          );
        }
      }
    }
  }
`

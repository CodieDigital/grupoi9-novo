import { styled } from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: fit-content;
  margin: 0 auto;

  .title-shop {
    text-align: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    font-family: "LATO";
  }

  .title-shop + * {
    margin-top: 25px;
  }

  .street {
    text-align: center;
    margin-bottom: clamp(8px, 0.572917vw, 11px) 0;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .contact-box {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      display: flex;
      align-items: center;
      gap: clamp(6px, 0.520833vw, 11px);

      .icon {
        display: flex;
        width: 16px;

        svg {
          width: 100%;
          height: auto;
          fill: #000;
        }
      }
    }

    span + span {
      margin-left: clamp(18px, 2.45vw, 47px);
    }
  }

  .redes-box {
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    a {
      color: #000;
    }

    span {
      display: block;
      margin: 0 auto;
      width: fit-content;

      svg {
        width: 16px;
        height: auto;
      }
    }

    a:hover {
      transform: scale(1.2);
    }
  }

  @media only screen and (max-width: 768px) {
    .contact-box {
      span {
        .icon {
          width: 14px;
        }
      }
    }

    .redes-box {
      gap: 10px;

      span {
        svg {
          width: 14px;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    [class*="paragraph-1"] {
      font-size: 1.2rem;
    }
  }
`;

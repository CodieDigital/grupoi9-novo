import styled from "styled-components";

interface IContactStyles {
  $isPage?: boolean;
}

export const Contact = styled.section<IContactStyles>`
  padding-top: ${({ $isPage }) => ($isPage ? "220px" : "10px")};
  padding-bottom: 80px;
  background-color: #e3f3f2;

  .container {
    display: flex;
    justify-content: space-between;
    gap: ${({ $isPage }) => $isPage && "30px"};
  }

  .contact-content {
    padding: 123px 0 100px;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;

    .box-title {
      h3 {
        color: var(--tertiary-color);

        & + * {
        }
      }

      h2 {
        color: var(--primary-color);
        margin-bottom: 20px;
      }

      p {
        color: var(--text-color);
        max-width: 530px;
        width: 100%;
      }
    }

    .contacts-box {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.primaryColor};

      a {
        width: 100%;
        max-width: fit-content;
        color: #171717;
        display: flex;
        gap: 10px;

        &:hover {
          color: var(--primary-color);

          > svg {
            fill: var(--secondary-color);
          }
        }
      }

      svg {
        width: 100%;
        max-width: 20px;
        aspect-ratio: 1;
        height: auto;
        fill: var(--primary-color);
      }
    }
  }

  .right {
    width: 100%;
    max-width: 48vw;

    form {
      input,
      textarea {
        box-shadow: initial;
        background-color: transparent;
      }

      .buttons {
        display: flex;
        align-items: center;
        gap: 30px;
        margin-top: 15px;

        .button-form {
          width: 100%;
          height: 46px;
          color: #fff;
          border-color: transparent;
          border-radius: 24px;
          background-size: 300%;
          background-position: left;
          background-image: linear-gradient(
            99deg,
            #c78c21 0%,
            #dcb351 33%,
            #c0851d 67%,
            #dcb251 100%
          );

          &:disabled {
            cursor: not-allowed;
            background: #c78c21;
            opacity: 0.75;
          }

          &:hover {
            background-position: right;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1600px) {
    padding-top: ${({ $isPage }) => ($isPage ? "200px" : "10px")};
    padding-bottom: 70px;

    .contact-content {
      padding: 110px 0 90px;
    }

    .left {
      .contacts-box {
        row-gap: 26px;

        .icon {
          max-width: 44px;
          margin-right: 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-top: ${({ $isPage }) => ($isPage ? "180px" : "10px")};
    padding-bottom: 60px;

    .contact-content {
      padding: 100px 0 80px;
    }

    .left {
      .contacts-box {
        row-gap: 22px;

        .icon {
          max-width: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-top: ${({ $isPage }) => ($isPage ? "160px" : "10px")};
    padding-bottom: 50px;

    .contact-content {
      padding: 90px 0 70px;
    }

    .left {
      .contacts-box {
        row-gap: 20px;

        .icon {
          max-width: 38px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      flex-direction: column;
    }

    .left,
    .right {
      max-width: 60vw;
      margin: 0 auto;
    }

    .contact-content {
      padding: 80px 0 60px;
    }

    .left {
      gap: 30px;

      .box-title {
        text-align: center;

        p {
          text-align: center;
          margin: 0 auto;
        }
      }

      .contacts-box {
        row-gap: 18px;

        a {
          margin: 0 auto;
        }
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .contact-content {
      padding: 70px 0 50px;
    }

    .left {
      max-width: 80vw;
      margin: 0 auto;

      .box-title {
        text-align: center;
      }

      .contacts-box {
        a {
          margin: 0 auto;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .contact-content {
      padding: 60px 0 45px;
    }

    .left {
      .contacts-box {
        column-gap: 0px;
        row-gap: 10px;

        .icon {
          max-width: 36px;
        }
      }
    }
  }

  @media only screen and (max-width: 700px) {
    .contact-content {
      padding: 55px 0 40px;
    }

    .left {
      .contacts-box {
        column-gap: 0px;
        row-gap: 10px;

        .icon {
          max-width: 35px;
        }
      }
    }
  }

  @media only screen and (max-width: 650px) {
    form {
      .buttons {
        flex-direction: column;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .contact-content {
      padding: 50px 0 40px;
    }

    .left {
      .contacts-box {
        row-gap: 13px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding-top: ${({ $isPage }) => ($isPage ? "150px" : "10px")};
    padding-bottom: 30px;

    .contact-content {
      padding: 30px 0 30px;
    }

    .left {
      max-width: 100%;

      .contacts-box {
        row-gap: 12px;
        column-gap: 20px;
      }
    }
  }

  @media only screen and (max-width: 390px) {
    padding-top: ${({ $isPage }) => ($isPage ? "130px" : "10px")};
  }
`;

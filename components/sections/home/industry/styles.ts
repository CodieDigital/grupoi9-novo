import styled from "styled-components";

export const Industry = styled.section`
  padding: 200px 0;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 8%;
  }

  .box-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    width: 40%;
  }

  .title {
    line-height: 1.4;
    color: var(--primary-color);
    font-size: 2.09vw;

    p {
      text-align: start;
    }
  }

  .box-title {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .text {
    line-height: 1.2;

    span {
      background-color: unset !important;
    }
  }

  .box-image {
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
  }

  .card {
    width: 100%;
    border-radius: 20px;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 5px;
    padding: 2.5vw;

    h2,
    span {
      color: #fff;
    }
  }

  .paper {
    position: absolute;
    aspect-ratio: 1;
    width: 62%;
    height: auto;
    right: 0;
    top: 40%;
    transform: translateY(-50%);

    img {
      object-fit: contain;
    }
  }

  .button-industry {
    min-width: 50%;
    width: fit-content;
    padding-left: 8px;
    padding-right: 8px;
    position: relative;
    z-index: 2;

    &.show-mobile {
      display: none !important;
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 160px 0;

    .box-text {
      gap: 50px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding: 120px 0;

    .box-text {
      gap: 30px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 110px 0;

    [class*="link-1"] {
      font-size: 1.45rem;
    }

    .button-industry {
      width: 51%;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 80px 0;

    .container {
      gap: 5%;
    }

    .box-image {
      width: 65%;
    }

    .button-industry {
      width: 53%;
    }
  }

  @media only screen and (max-width: 900px) {
    padding: 80px 0 30px;

    .title {
      font-size: 2.12vw;
    }

    .box-text {
      gap: 20px;
    }

    .paper {
      top: 25%;
      width: 58%;
    }

    .button-industry {
      width: 100vw;
      max-width: 290px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 30px 0 60px;

    .container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 100px;
    }

    .box-text {
      text-align: center;
      width: 80%;
      gap: 15px;
    }

    .box-title {
      gap: 5px;
    }

    .title {
      font-size: 20px;
    }

    .box-image {
      width: 70%;
      gap: 30px;
    }

    .paper {
      top: 30%;
      width: 60%;
      right: -25px;
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 20px 0 40px;

    .container {
      gap: 70px;
    }

    .title {
      font-size: 18px;
    }

    .paper {
      width: 70%;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 20px 0 30px;

    .box-image {
      width: 100%;
      gap: 20px;
    }

    .card {
      padding: 20px;
    }

    .paper {
      right: 0;
    }
  }

  @media only screen and (max-width: 390px) {
    .button-industry {
      &.hide-mobile {
        display: none !important;
      }

      &.show-mobile {
        display: flex !important;
      }
    }

    .container {
      gap: 18vw;
    }

    .paper {
      top: 50%;
    }
  }
`;

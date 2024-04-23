import styled from "styled-components";

export const CardProduct = styled.div`
  //sobe
  width: 100%;
  aspect-ratio: 486/593;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 2px;

  .product-image {
    aspect-ratio: 486/416;
    width: 100%;

    img {
      transition: all 0.3s ease-in-out 0s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  h2 {
    color: #000;

    & + * {
      margin-top: 12px;
    }
  }

  .box-text {
    padding: 5%;
  }

  .description {
    text-align: center;
    color: #848484;
    height: 112px;
  }

  @media only screen and (max-width: 1600px) {
    .description {
      height: 107px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .description {
      height: 105px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .description {
      height: 95px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .description {
      height: 91px;
    }
  }

  @media only screen and (max-width: 900px) {
    .description {
      height: 82px;
    }
  }

  @media only screen and (max-width: 768px) {
    .description {
      height: 80px;
    }
  }

  @media only screen and (max-width: 650px) {
    .description {
      height: 73px;
    }
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

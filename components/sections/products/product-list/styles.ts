import styled from "styled-components";

export const ProductsList = styled.section`
  .title {
    text-align: center;

    & + * {
      margin-top: 50px;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  .products {
    margin-top: 25px;
    display: none;
  }

  .swiper {
    padding-bottom: 30px;
  }

  @media only screen and (max-width: 1600px) {
    .container {
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    .container {
      display: none;
    }

    .products {
      display: block;
    }
  }

  @media only screen and (max-width: 650px) {
    padding-bottom: 40px;
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

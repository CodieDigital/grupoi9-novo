import styled from 'styled-components';

export const TextImage2 = styled.section`
  .container {
    display: flex;
    align-items: center;
  }

  .box-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 745px;
  }

  .box-text {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title {
    color: var(--primary-color);
  }

  .image {
    width: 100%;
    max-width: 640px;
    aspect-ratio: 1;

    img {
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    .image {
      display: none;
    }

    .box-left {
      gap: 20px;
    }

    .box-text {
      text-align: center;
      gap: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
    padding-top: 35px;
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

import styled from "styled-components";

interface ITextImageStyles {}

export const TextImage = styled.section<ITextImageStyles>`
  padding: 0 0 60px;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .box-left,
  .box-right {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }

  .box-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 7.93%;
    border-radius: 20px;
    background-color: var(--tertiary-color);
  }

  .box-title {
    color: var(--primary-color);
  }

  .next-image img {
    object-fit: contain;
  }

  .leafs {
    aspect-ratio: 1;
    max-width: 680px;
  }

  .photo {
    aspect-ratio: 720/700;
    max-width: 716px;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    .box-text {
      gap: 30px;
      padding: 6.5%;
    }
  }

  @media only screen and (max-width: 1200px) {
    .box-left {
      gap: 20px;
    }

    .box-right {
      gap: 0;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    padding: 0 0 40px;

    .box-left {
      max-width: 570px;
      margin: 0 auto;
    }

    .box-right {
      display: none;
    }

    .box-text {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 768px) {
    .box-left {
      gap: 15px;
    }
  }

  @media only screen and (max-width: 650px) {
    .box-text {
      padding: 5.5%;
    }

    .box-title {
      text-align: center;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 0 0 30px;
  }

  @media only screen and (max-width: 390px) {
  }
`;

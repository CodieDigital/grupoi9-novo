import styled from 'styled-components';

export const Technology = styled.section`
  .container {
    display: flex;
    justify-content: space-between;
    gap: 3%;
  }

  .title {
    color: var(--primary-color);
  }

  .box-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .box-icons {
    width: 100%;
    background-color: var(--tertiary-color);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2%;
    gap: 10px;
  }

  .card {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .image-card {
    width: 100%;
    max-width: 40px;
    height: auto;
    aspect-ratio: 1;

    img {
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    .title {
      font-size: 3.3rem;
    }

    /* .box-icons {
      width: 50%;
      grid-template-columns: 1fr;
      padding: 2%;
      gap: 20px;
    } */
  }

  @media only screen and (max-width: 1200px) {
    .title {
      font-size: 2.9rem;
    }

    .container {
      gap: 1%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 20px;
    }

    .box-text {
      text-align: center;
      gap: 15px;
    }

    .box-icons {
      padding: 4%;
      gap: 10px;
      row-gap: 25px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    .box-icons {
      grid-template-columns: 1fr;
      padding: 7%;
      gap: 18px;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

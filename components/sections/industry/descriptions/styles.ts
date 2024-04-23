import styled from 'styled-components';

export const Descriptions = styled.section`
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
  }

  .box-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .title {
    color: var(--primary-color);
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
    .container {
      flex-direction: column;
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
    padding-top: 40px;
  }

  @media only screen and (max-width: 500px) {
    padding-top: 35px;
  }

  @media only screen and (max-width: 390px) {
  }
`;

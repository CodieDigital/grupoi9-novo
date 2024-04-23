import styled from 'styled-components';

export const Launch = styled.section`
  background-color: #d1d8f3;

  .title {
    text-align: center;
    color: var(--primary-color);

    & + * {
      margin-top: 50px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 1024px) {
    .title + * {
      margin-top: 30px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

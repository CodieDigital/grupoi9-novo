import styled from 'styled-components';

interface ITitleTextStyles {
  $type?: 'text';
}

export const TitleText = styled.section<ITitleTextStyles>`
  .container {
    display: flex;
    justify-content: ${({ $type }) =>
      $type === 'text' ? 'center' : 'space-between'};
    gap: 2%;
  }

  .title {
    width: 100%;
    line-height: 1.3;
    color: var(--primary-color);
    font-size: 4rem;
  }

  .text {
    width: 100%;
    max-width: 745px;
    text-align: justify;
  }

  @media only screen and (max-width: 1600px) {
    .title {
      font-size: 3.6rem;
    }
  }

  @media only screen and (max-width: 1400px) {
    .title {
      font-size: 3.1rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .title {
      font-size: 2.8rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .container {
      flex-direction: column;
      gap: 20px;
      text-align: center;
    }

    .text {
      max-width: unset;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    .container {
      gap: 15px;
    }

    .title {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 650px) {
    .title {
      font-size: 2.3rem;
    }
  }

  @media only screen and (max-width: 500px) {
    .title {
      font-size: 2.1rem;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

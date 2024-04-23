import styled from 'styled-components';

interface ICountUpNumbersStyles {
  $color?: 1 | 2;
}

export const CountUpNumbers = styled.section<ICountUpNumbersStyles>`
  padding-top: 0;

  .container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .box-number {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${({ $color }) =>
      $color === 1 ? 'var(--primary-color)' : 'var(--text-color)'};
  }

  .text {
    font-size: 2.4rem;
    color: var(--text-color);
  }

  @media only screen and (max-width: 1600px) {
    .text {
      font-size: 2.2rem;
    }
  }

  @media only screen and (max-width: 1400px) {
    .text {
      font-size: 2rem;
    }
  }

  @media only screen and (max-width: 1200px) {
    .number {
      font-size: 3.6rem;
    }

    .text {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    .number {
      font-size: 3.2rem;
    }

    .text {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 900px) {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      max-width: 500px;
    }

    .text {
      font-size: 1.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
    .container {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .text {
      font-size: 1.7rem;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

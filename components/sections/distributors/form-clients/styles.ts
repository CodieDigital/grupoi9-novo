import styled from 'styled-components';

export const FormClients = styled.section`
  padding: 150px 0;

  .titles {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
      color: var(--primary-color);
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
  }

  .client-form {
    width: 80%;
  }

  .radio-container {
    display: flex;
    align-items: center;
    gap: 15px;

    & + * {
      margin-top: 20px;
    }
  }

  .box-inputs {
    display: flex;
    align-items: center;
    gap: 15px;

    .input-content input {
      margin-top: 5px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
  }

  .button-form {
    width: 50%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background-size: 300%;
    background-position: left;
    transition: all 0.4s ease-in-out;
    color: var(--button-color-bg);
    border: none;
    background-image: linear-gradient(
      99deg,
      var(--bt-linear-gradient-1) 0%,
      var(--bt-linear-gradient-2) 33%,
      var(--bt-linear-gradient-1) 67%,
      var(--bt-linear-gradient-2)
    );

    &:hover {
      background-position: right;
      color: var(--button-color-bg-hover);
    }
  }

  @media only screen and (max-width: 1600px) {
    padding: 110px 0;
  }

  @media only screen and (max-width: 1400px) {
    padding: 100px 0 60px;
  }

  @media only screen and (max-width: 1200px) {
    padding: 90px 0 50px;

    .container {
      gap: 30px;
    }

    .box-inputs {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    .container {
      gap: 20px;
    }

    .client-form {
      width: 95%;
    }
  }

  @media only screen and (max-width: 768px) {
    .buttons {
      gap: 10px;
    }
  }

  @media only screen and (max-width: 650px) {
    .client-form {
      width: 100%;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 80px 0 30px;

    .buttons {
      flex-direction: column;
      gap: 10px;
    }

    .button-form {
      max-width: 304px;
      width: 100%;
    }

    .titles {
      br {
        display: none;
      }
    }
  }

  @media only screen and (max-width: 390px) {
    .container {
      padding-left: 8px;
      padding-right: 8px;
    }
  }
`;

import styled from "styled-components";

export const NewsLetter = styled.div`
  display: flex;

  .text {
    margin-right: 120px;
    max-width: fit-content;

    h3 {
      margin-bottom: 10px;
      color: #fff;
    }
  }

  form {
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;

    input {
      height: 2.4vw;
      min-height: 36px;
      width: 320px;
      border: 0;
      padding-left: 6px;
    }

    button {
      border: 0;
      padding: 0;
      width: 100%;
      height: 2.4vw;
      min-height: 36px;
      max-width: 120px;
      background-color: red;
      color: #fff;
    }
  }

  @media only screen and (max-width: 1024px) {
    justify-content: space-between;
    padding-bottom: 30px;
    gap: 1.56vw;

    .text {
      margin: 0;
    }

    form {
      button {
        max-width: 120px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .text {
      h3 {
        text-align: center;
      }
    }

    form {
      input {
      }

      button {
        max-width: 120px;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    form {
      width: 300px;
      flex-direction: column;

      input {
        width: 100%;
      }

      button {
        max-width: 120px;
      }
    }
  }
`;

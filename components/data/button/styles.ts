import styled from "styled-components";

export const Button = styled("div")`
  a,
  button {
    width: 100%;
    max-width: fit-content;
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
  }

  a,
  button {
    &:hover {
      background-position: right;
      color: var(--button-color-bg-hover);
      fill: var(--button-hover-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    a,
    button {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a,
    button {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a,
    button {
      height: 40px;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1024px) {
    a,
    button {
      height: 38px;
    }
  }

  @media only screen and (max-width: 768px) {
    a,
    button {
      height: 36px;
    }
  }

  @media only screen and (max-width: 500px) {
    a,
    button {
      height: 34px;
      max-width: unset;
    }
  }
`;

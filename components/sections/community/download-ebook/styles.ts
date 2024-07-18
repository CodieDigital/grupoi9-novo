import { styled } from "styled-components";

export const DownloadEbook = styled("section")`
  .content {
    margin: 0 auto;
    max-width: 60%;
    padding: 3rem;
    background-color: var(--primary-color);
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    position: relative;
  }

  h3 {
    padding-top: 5rem;
    color: var(--button-color-bg);
  }

  .image {
    position: absolute;
    top: 0;
    left: 50%;
    width: 10rem;
    transform: translate(-50%, -50%);
  }

  a {
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
    padding: 0 2rem;
  }

  a {
    &:hover {
      background-position: right;
      color: var(--button-color-bg-hover);
      fill: var(--button-hover-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    a {
      height: 46px;
    }
  }

  @media only screen and (max-width: 1400px) {
    a {
      height: 42px;
    }
  }

  @media only screen and (max-width: 1200px) {
    a {
      height: 40px;
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .content {
      max-width: 80%;
      gap: 2rem;

      h3 {
        padding-top: 4rem;
      }
    }

    .image {
      width: 8rem;
    }

    a {
      height: 38px;
    }
  }

  @media only screen and (max-width: 768px) {
    a {
      height: 36px;
    }
  }

  @media only screen and (max-width: 500px) {
    .content {
      padding: 1.5rem;
      max-width: 100%;
      gap: 1.5rem;

      h3 {
        padding-top: 3rem;
      }
    }

    .image {
      width: 6rem;
    }

    a {
      height: 34px;
      max-width: 50%;
      padding: 0 1rem;
    }
  }

  @media only screen and (max-width: 390px) {
    h3 {
      font-size: 2rem;
    }
  }
`;

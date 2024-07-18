import { styled } from "styled-components";

export const Artists = styled("section")`
  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 8rem;
  }

  .card {
    &:hover {
      .description {
        opacity: 1;
      }
    }

    h6,
    span {
      color: var(--button-color-bg-hover);
      text-align: center;
    }
  }

  .image {
    position: relative;
    aspect-ratio: 1;

    > div:first-child {
      border-radius: 50%;
    }
  }

  .description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    border-radius: 2rem;
    padding: 1.5rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      border: 1.5rem;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.7) transparent transparent;
    }

    p {
      padding-right: 2px;
      color: var(--button-color-bg);
      text-align: center;
      overflow-y: auto;

      &::-webkit-scrollbar {
        border-radius: 2px;
        width: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #ccc;
        border-radius: 2px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--primary-color);
        border-radius: 2px;
      }
    }
  }

  .box-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 1400px) {
    h2 {
      margin-bottom: 6rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    h2 {
      margin-bottom: 4rem;
    }
  }
`;

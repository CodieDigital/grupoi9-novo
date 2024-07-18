import { styled } from "styled-components";

export const BestProfessionals = styled("section")`
  h2 {
    text-align: center;
    color: var(--primary-color);
    margin-bottom: 4rem;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 3rem;
  }

  .card {
    position: relative;
    min-height: 40rem;
    overflow: hidden;
    border-radius: 2rem;

    h6,
    span,
    p {
      color: var(--button-color-bg);
    }

    &:hover {
      .box-text {
        top: 0%;
        height: 100%;
        justify-content: stretch;
      }

      p {
        height: auto;
        opacity: 1;
        margin-top: 1rem;
        overflow: auto;
      }

      .image > div::after {
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }

  .card .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    > div {
      border-radius: 2rem;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.8) 100%
        );
        transition: height 0.3s ease-in-out;
      }
    }
  }

  .box-text {
    padding: 3rem;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 0 0 2rem 2rem;

    display: flex;
    flex-direction: column;
    justify-content: end;
  }

  .card h6 {
    margin-bottom: 0.5rem;
    line-height: 1.25;
  }

  .card p {
    height: 0;
    opacity: 0;
    overflow: hidden;
    transition: opacity 0.3s ease-in-out;
    padding-right: 2px;

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

    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color);
    }
  }

  @media only screen and (max-width: 1600px) {
    .card-list {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media only screen and (max-width: 1400px) {
    .card-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (max-width: 1024px) {
    .card-list {
      gap: 2rem;
    }

    .box-text {
      padding: 2rem 1.5rem;
    }
  }

  @media only screen and (max-width: 900px) {
    .card-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 650px) {
    .card-list {
      grid-template-columns: repeat(1, 1fr);
    }

    .card {
      height: auto;
      aspect-ratio: 3/4;
    }
  }
`;

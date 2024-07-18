import { styled } from "styled-components";

export const Objective = styled("section")`
  .card-list {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    gap: 2rem;
  }

  .card {
    height: auto;
    background-color: var(--tertiary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding: 4% 5%;
    border-radius: 2rem;

    h4,
    p {
      text-align: center;
    }
  }

  .card h4 {
    color: var(--primary-color);
  }

  .card p {
    color: var(--button-color-no-bg-hover);
  }

  @media only screen and (max-width: 1024px) {
    .card {
      padding: 3% 4%;
    }
  }

  @media only screen and (max-width: 768px) {
    .card-list {
      flex-direction: column;
    }

    .card {
      gap: 1rem;
    }
  }
`;

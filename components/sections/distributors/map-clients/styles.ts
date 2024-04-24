import styled from "styled-components";

export const MapClients = styled.section`
  padding: 0 !important;

  a {
    color: #000;

    svg {
      margin-right: 10px;
    }
  }

  .titles {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & + * {
      margin-top: 80px;
    }

    h1 {
      color: var(--primary-color);
    }
  }

  .container {
    display: flex;
    justify-content: center;
    gap: 50px;
    align-items: flex-start;
    margin-bottom: 0 !important;
  }

  .map-box {
    width: 50%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    h2.paragraph-2.hover-box {
      text-transform: lowercase;
    }
  }

  .hover-box {
    position: absolute;
    bottom: 30px;
    left: 30px;
  }

  .box-shops {
    max-width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: fit-content;
  }

  .shop-name {
    color: var(--primary-color);
  }

  .link {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--text-color);

    svg {
      max-width: 16px;
      height: 16px;
    }
  }

  .estate-svg {
    cursor: pointer;
    fill: var(--tertiary-color);
    stroke: #000;

    &:hover {
      fill: var(--primary-color);
    }

    &.ativo {
      fill: var(--primary-color);
    }
  }

  .circle {
    stroke: var(--tertiary-color);
  }

  @media only screen and (max-width: 1600px) {
    .container {
      gap: 30px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .titles + * {
      margin-top: 50px;
    }

    .map-box {
      width: 100%;
    }

    .box-shops {
      grid-template-columns: 1fr;
      overflow-y: auto;
      height: 515px;
      padding-right: 5px;
      max-width: 250px;
      width: 100%;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--primary-color);
      }

      &::-webkit-scrollbar-thumb:hover {
        background: var(--secondary-color);
      }
    }

    .card {
      max-width: unset;
    }
  }

  @media only screen and (max-width: 900px) {
    padding-top: 100px;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .box-shops {
      grid-template-columns: 1fr 1fr;
      overflow-y: unset;
      height: unset;
      padding-right: 0;
      width: 100%;
      max-width: unset;
    }

    .card {
      align-items: center;
    }
  }

  @media only screen and (max-width: 500px) {
    .titles + * {
      margin-top: 0;
    }

    .box-shops {
      grid-template-columns: 1fr;
    }
  }
`;

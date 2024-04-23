import styled from "styled-components";

export const TextCards = styled.section`
  .container {
    display: flex;
    max-width: unset;
    gap: 40px;
    justify-content: space-between;
    align-items: center;
    padding-left: 12%;
    padding-right: 0;
  }

  .button-all-posts.show-mobile {
    display: none !important;
  }

  .box-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 60px;
    width: 100%;
    max-width: 400px;
  }

  .title {
    line-height: 1.2;
    color: var(--primary-color);
  }

  .box-title {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .text {
    line-height: 1.2;

    span {
      background-color: unset !important;
    }
  }

  .button-blog {
    max-width: 190px;
  }

  .box-cards {
    width: 100%;
    max-width: 1000px;
    position: relative;
    display: none;
  }

  .box-overflow {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 30px;

    &::-webkit-scrollbar {
      height: 6px;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
      background: #ccc;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: var(--primary-color);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary-color);
    }

    &:hover {
      .card {
        opacity: 0.6;
        transform: scale(0.92);
        margin: 0 10px;
      }
    }
  }

  .box-wrapper {
    width: auto;
    display: inline-flex;
  }

  .show-mobile {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    padding-bottom: 45px;

    .container {
      gap: 25px;
      padding-left: 4%;
    }

    .box-text {
      gap: 50px;
    }

    .box-cards {
      max-width: 935px;
    }
  }

  @media only screen and (max-width: 1400px) {
    padding-bottom: 40px;

    .container {
      gap: 35px;
    }

    .box-text {
      gap: 40px;
    }

    .box-cards {
      max-width: 730px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      gap: 15px;
    }

    .box-text {
      gap: 35px;
    }

    .box-title {
      gap: 5px;
    }

    .box-cards {
      max-width: 660px;
    }
  }

  @media only screen and (max-width: 1024px) {
    .box-cards {
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 900px) {
    padding-bottom: 35px;

    .box-cards {
      max-width: 440px;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      gap: 25px;
    }

    .box-cards {
      max-width: 250px;
    }
  }

  @media only screen and (max-width: 650px) {
    .box-text {
      gap: 20px;
    }

    .box-cards {
      max-width: 228px;
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 30px 0;

    .container {
      flex-direction: column;
      padding-left: 0;
      padding-right: 0;
    }

    .button-all-posts {
      &.hide-mobile {
        display: none !important;
      }

      &.show-mobile {
        display: flex !important;
        width: 100vw;
        max-width: 190px;
      }
    }

    .box-text {
      text-align: center;
      align-items: center;
      gap: 10px;
      padding: 0 15px;
    }

    .box-cards {
      max-width: unset;
    }

    .hide-mobile {
      display: none;
    }

    .show-mobile {
      display: flex;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

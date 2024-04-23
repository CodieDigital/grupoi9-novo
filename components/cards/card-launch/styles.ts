import styled from "styled-components";

export const CardLaunch = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4%;

  .launch-image {
    aspect-ratio: 486/250;
    width: 100%;
    max-width: 486px;
    border-radius: 10px;
    overflow: hidden;

    img {
      transition: all 0.3s ease-in-out 0s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .box-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .description {
    color: #333;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
    gap: 3%;

    .description {
      height: 95px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    gap: 10px;

    .launch-image {
      max-width: 600px;
    }

    .box-text {
      gap: 15px;
      align-items: center;
      text-align: center;
    }

    .description {
      /* text-align: center; */
      height: unset;
      overflow-y: hidden;
    }
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

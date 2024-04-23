import styled from "styled-components";

interface IBannerStyles {
  $bgImage: string;
  $isHome?: boolean;
  $titleAlign?: "left";
}

export const Banner = styled.section<IBannerStyles>`
  aspect-ratio: 1920/800;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-image: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0.35) 40%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 0;
  }

  .back-video {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${({ $titleAlign }) =>
      $titleAlign === "left" ? "flex-start" : "flex-end"};
    position: relative;
    height: 100%;
    position: relative;
    z-index: 1;
  }

  h1 {
    text-align: end;

    p {
      color: #fff;
    }
  }

  span {
    color: #fff;
  }

  .link {
    position: absolute;
    width: 100%;
    gap: 10px;
    max-width: fit-content;
    display: flex;
    align-items: center;
    bottom: 15%;
    left: 15px;
    color: #fff;

    &:hover {
      color: #0000ff;

      svg {
        stroke: #0000ff;
      }
    }

    svg {
      width: 20px;
      height: auto;
      stroke: #fff;
    }
  }

  @media only screen and (max-width: 1600px) {
    /* height: calc(100vh - 69px); */
    /* margin-top: 69px; */
  }

  @media only screen and (max-width: 1400px) {
    /* height: calc(100vh - 67px); */
  }

  @media only screen and (max-width: 1200px) {
    /* height: calc(100vh - 65.5px); */
    /* margin-top: 65.5px; */
  }

  @media only screen and (max-width: 1024px) {
    height: 80vh;
    /* height: calc(100vh - 64px); */
    /* margin-top: 64px; */
    aspect-ratio: 1;
  }

  @media only screen and (max-width: 900px) {
    height: 70vh;
  }

  @media only screen and (max-width: 768px) {
    height: 65vh;
  }

  @media only screen and (max-width: 650px) {
    .link {
      right: 5%;
    }
  }

  @media only screen and (max-width: 500px) {
    height: 60vh;

    &::after {
      /* display: ${({ $isHome }) => ($isHome ? "none" : "block")}; */
      opacity: 0.3;
      background-color: #000000;
      background-image: none;
    }

    .container {
      align-items: center;
    }

    h1 {
      text-align: center;

      p {
        text-align: center !important;
      }

      br {
        display: none;
      }
    }

    .link {
      left: 20%;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

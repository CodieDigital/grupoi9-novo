import styled from "styled-components";

interface IVideoImageTextStyles {
  $bgImage?: string;
  $noMask?: boolean;
  $hasAspectRatio?: boolean;
}

export const VideoImageText = styled.section<IVideoImageTextStyles>`
  width: 100%;
  aspect-ratio: ${({ $hasAspectRatio }) => $hasAspectRatio && "1920/1080"};
  height: ${({ $hasAspectRatio }) => !$hasAspectRatio && "600px"};
  padding: 0;
  position: relative;
  display: flex;
  background-image: ${({ $bgImage }) => $bgImage && `url(${$bgImage})`};
  background-repeat: ${({ $bgImage }) => $bgImage && "no-repeat"};
  background-position: ${({ $bgImage }) => $bgImage && "center center"};
  background-size: ${({ $bgImage }) => $bgImage && "cover"};
  background-attachment: ${({ $bgImage }) => $bgImage && "fixed"};

  &::after {
    display: ${({ $noMask }) => $noMask && "none"};
    content: "";
    position: absolute;
    z-index: 0;
    background-image: linear-gradient(
      270deg,
      #000000 0%,
      rgba(0, 0, 0, 0.66) 63%,
      rgba(0, 0, 0, 0) 100%
    );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.7;
  }

  .back-video {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: inherit;
    object-fit: cover;
  }

  .container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .box-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
    width: 100%;
    max-width: 615px;
  }

  .title {
    line-height: 1.2;
    color: #fff;
  }

  .subtitle {
    p {
      color: #fff;
    }
  }

  .box-title {
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #fff;
  }

  .text {
    line-height: 1.2;
    color: #fff;
    text-align: justify;

    p {
      color: #fff !important;

      span {
        color: #fff !important;
      }
    }
  }

  .line {
    height: 10px;
  }

  .button-youtube {
    height: 48px;
    max-width: fit-content;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 0 10px;
    transition: all 0.4s ease-in-out;
    line-height: 1;
    text-transform: uppercase;

    color: var(--button-color-no-bg);
    border: 2px solid var(--bt-linear-gradient-1);
    border-radius: 24px;

    &:hover {
      background-color: var(--bt-linear-gradient-1);
    }

    svg {
      fill: #fff;
      width: 20px;
      height: auto;
      margin-bottom: 2px;
    }
  }

  @media only screen and (max-width: 1600px) {
    height: ${({ $hasAspectRatio }) => !$hasAspectRatio && "550px"};
  }

  @media only screen and (max-width: 1400px) {
    height: ${({ $hasAspectRatio }) => !$hasAspectRatio && "500px"};
  }

  @media only screen and (max-width: 1200px) {
    height: ${({ $hasAspectRatio }) => !$hasAspectRatio && "450px"};

    .box-title {
      gap: 5px;
    }

    .box-text {
      max-width: 500px;
      gap: 40px;
    }
  }

  @media only screen and (max-width: 1024px) {
    height: ${({ $hasAspectRatio }) => !$hasAspectRatio && "400px"};

    .box-text {
      max-width: 480px;
      gap: 30px;

      .title + * {
        margin-top: 10px;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    .box-text {
      max-width: 430px;
      gap: 25px;
    }
  }

  @media only screen and (max-width: 768px) {
    .box-title {
      gap: 0;
    }

    .box-text {
      max-width: 375px;
      gap: 20px;
    }
  }

  @media only screen and (max-width: 650px) {
    height: 360px;

    .box-text {
      max-width: unset;
      text-align: center;
      align-items: center;
    }

    .text {
      text-align: center;
    }
  }

  @media only screen and (max-width: 500px) {
    height: ${({ $bgImage }) => ($bgImage ? "350px" : "340px")};
  }

  @media only screen and (max-width: 390px) {
    height: ${({ $bgImage }) => ($bgImage ? "380px" : "360px")};
  }
`;

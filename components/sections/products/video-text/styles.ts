import styled from 'styled-components';

interface IVideoTextStyles {
  $hasText?: boolean;
}

export const VideoText = styled.section<IVideoTextStyles>`
  .container {
    display: flex;
    justify-content: ${({ $hasText }) =>
      $hasText ? 'space-between' : 'center'};
    gap: 4%;
  }

  .video {
    width: 50%;
    aspect-ratio: 744/419;
  }

  .box-text {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .description {
    max-height: 340px;
  }

  .show-mobile {
    display: none;
  }

  @media only screen and (max-width: 1600px) {
    .description {
      max-height: 290px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .container {
      gap: 2%;
    }

    .description {
      max-height: 235px;
    }
  }

  @media only screen and (max-width: 1200px) {
    .container {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    h2 {
      text-align: center;
    }

    .video {
      width: 70%;
    }

    .box-text {
      width: 80%;
      text-align: center;
    }

    .description {
      max-height: unset;
    }

    .show-mobile {
      display: block;
    }

    .hide-mobile {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    .video,
    .box-text {
      width: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    .description {
      overflow: unset;
    }
  }

  @media only screen and (max-width: 650px) {
  }

  @media only screen and (max-width: 500px) {
  }

  @media only screen and (max-width: 390px) {
  }
`;

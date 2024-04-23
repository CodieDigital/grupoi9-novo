import Link from "next/link";
import styled from "styled-components";

export const CardCampaing = styled(Link)`
  /* width: 100%; */
  width: 228px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f7f8fa;
  margin: 0 15px;
  -webkit-box-shadow: 0 1.875rem 3.75rem -1.875rem rgba(0, 0, 0, 0.5);
  box-shadow: 0 1.875rem 3.75rem -1.875rem rgba(0, 0, 0, 0.5);
  position: relative;
  aspect-ratio: 228/380;
  transition: all 0.3s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -100%;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    opacity: 1 !important;
    transform: scale(1) !important;

    &::after {
      bottom: 0;
    }

    .image-card {
      height: 100%;
      z-index: 0;
    }

    .box-description * {
      color: #fff;
    }
  }

  .image-card {
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 185px;
    position: absolute;
    top: 0;
    left: 0;

    img {
      aspect-ratio: 228/200;
    }
  }

  .box-description {
    position: relative;
    z-index: 2;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease-in-out;

    p {
      height: 50px;
    }
  }

  .description {
    height: 115px;
    line-height: 1.2;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;
  }

  @media only screen and (max-width: 1600px) {
    .description {
      height: 110px;
    }
  }

  @media only screen and (max-width: 1400px) {
    .description {
      height: 105px;
    }
  }

  @media only screen and (max-width: 1200px) {
    margin: 0 10px;
    width: 210px;

    .image-card {
      height: 175px;
    }

    .box-description {
      padding: 15px;
    }

    .description {
      height: 100px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
    .box-description {
      padding: 15px;
    }

    .description {
      height: 95px;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 200px;

    .image-card {
      height: 160px;
    }

    .description {
      height: 90px;

      p {
        line-height: 1.3;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    .description {
      height: 85px;

      p {
        line-height: 1.3;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    .image-card {
      height: 170px;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

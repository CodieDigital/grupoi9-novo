import styled from 'styled-components';

export const Banner = styled.section`
  padding: 0;
  /* height: 800px; */
  width: 100%;
  position: relative;
  aspect-ratio: 1920/800;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 75px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }

  .banner,
  .swiper-banner {
    height: 100%;
  }

  .swiper-pagination-banner {
    display: flex;
    bottom: 15px;
    z-index: 20;
  }

  .next-image {
    width: 100%;

    img {
      object-fit: contain;
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
    &::after {
      height: 68px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 650px) {
    &::after {
      height: 66px;
    }
  }

  @media only screen and (max-width: 500px) {
    &::after {
      height: 64px;
    }
  }

  @media only screen and (max-width: 390px) {
  }
`;

import styled from "styled-components";

interface IGalleryStyles {
  $isContain?: boolean;
}

export const Gallery = styled.section<IGalleryStyles>`
  padding: 0;

  .image {
    width: 100%;
    aspect-ratio: ${({ $isContain }) => ($isContain ? "640/415" : "660/620")};

    img {
      object-fit: ${({ $isContain }) => ($isContain ? "contain" : "cover")};
      width: 100%;
      height: inherit;
      min-height: inherit;
      max-height: inherit;
      min-width: inherit;
      max-width: inherit;
      object-position: center center;
      aspect-ratio: inherit;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--primary-color);

    &::after {
      font-weight: 900;
    }
  }

  .swiper-button-prev {
    left: 30px;
  }

  .swiper-button-next {
    right: 30px;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
    .swiper-button-prev {
      left: 15px;
    }

    .swiper-button-next {
      right: 15px;
    }
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    padding-bottom: 10px;

    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        font-size: 30px;
      }
    }

    .swiper-button-prev {
      left: 10px;
    }

    .swiper-button-next {
      right: 10px;
    }
  }
`;
// sobe

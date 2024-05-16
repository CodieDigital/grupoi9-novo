import styled, { css } from "styled-components";

interface IBoxFloatingStyles {
  $open: boolean;
}

export const BoxFloating = styled.div<IBoxFloatingStyles>`
  width: 25%;
  aspect-ratio: 525/255;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.16);
  background-color: #fff;
  position: fixed;
  top: 100px;
  right: 0;
  z-index: 5;
  padding: 1%;
  border-radius: ${({ $open }) => ($open ? "0 0 0 15px" : "15px 0 0 15px")};
  display: flex;
  align-items: center;
  gap: 3%;
  line-height: 1;
  transition: 0.3s ease-in-out;
  transform: ${({ $open }) => `translateX(${$open ? "100%" : "0"})`};

  &.left {
    width: initial;
    right: 100%;
    transform: ${({ $open }) => `translateX(${$open ? "0" : "100%"})`};
    border-radius: ${({ $open }) =>
      $open ? "0 15px 15px 0" : "0 15px 15px 0"};
  }

  .number {
    color: var(--primary-color);
    font-size: 2vw;
  }

  .paper {
    width: 100%;
    max-width: 70px;
  }

  .box-children {
    display: flex;
    gap: 10px;
    flex-direction: column;

    .link {
      &.active {
        transform: scale(1.3);
      }

      svg {
        cursor: pointer;
        width: 30px;
        height: auto;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }

  .box-text {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .open-button {
    width: 100%;
    max-width: fit-content;
    position: absolute;
    background: none;
    border: none;
    top: 0;
    left: -28px;
    background-color: #fff;
    border-radius: 10px 0 0 10px;
    transition: 0.3s ease-in-out;
    transform: ${({ $open }) => `translateX(${$open ? "0" : "100%"})`};
    opacity: ${({ $open }) => ($open ? "1" : "0")};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
    max-width: 28px;

    .svg-icon {
      width: 100%;
      stroke: #333;
    }

    &.left {
      left: 100% !important;
      border-radius: 0 10px 10px 0;
      transform: ${({ $open }) => `translateX(${$open ? "0%" : "-100%"})`};
    }
  }

  .close-button {
    position: absolute;
    background: none;
    border: none;
    padding: 0;
    top: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 20px;
    aspect-ratio: 1;

    .svg-icon {
      width: 100%;
    }

    &.left {
      top: -5px;
      right: -5px;
      max-width: 22px;

      ${({ $open }) =>
        $open &&
        css`
          left: -100% !important;
        `};
    }
  }

  .button {
    font-size: 1vw;
    height: unset;
    padding: 5%;
  }

  span {
    font-size: 1vw;
  }

  @media only screen and (max-width: 1400px) {
    .open-button {
      max-width: 22px;
      left: -22px;
    }

    .close-button {
      max-width: 16px !important;
    }
  }

  @media only screen and (max-width: 1200px) {
    span,
    .button {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 1024px) {
    width: 28%;
    padding: 1.2%;

    .number {
      font-size: 20px;
    }

    .open-button {
      max-width: 18px;
      left: -18px;
    }

    .close-button {
      max-width: 12px !important;

      &.left {
        top: 0;
        right: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: 35%;
    border-radius: ${({ $open }) => ($open ? "0 0 0 10px" : "10px 0 0 10px")};

    &.left {
      border-radius: ${({ $open }) => ($open ? "0 0 10px 0" : "0 10px 10px 0")};
    }

    .box-text {
      gap: 10px;
    }

    .open-button {
      max-width: 16px;
      left: -16px;
      border-radius: 7px 0 0 7px;

      &.left {
        border-radius: 0 7px 7px 0;
      }
    }

    .close-button {
      max-width: 10px !important;
    }
  }

  @media only screen and (max-width: 650px) {
    width: 45%;
    padding: 2%;
    top: 70px;

    .open-button {
      max-width: 18px;
      left: -18px;
    }

    .close-button {
      right: 10px;
      max-width: 14px;

      &.left {
        right: 0;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    max-width: 260px;
    padding: 3%;
    gap: 12px;

    .box-text {
      gap: 12px;
    }

    .button {
      max-width: unset;
    }
  }
`;

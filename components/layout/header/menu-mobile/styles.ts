import styled from "styled-components";

export const Menu = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  right: 0;
  top: 0;
  z-index: 999;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  display: none;
  justify-content: flex-end;

  .filter {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: flex-end;
    z-index: 99;
  }

  .menu-mobile {
    overflow-y: auto;
    width: 325px;
    height: 100%;
    margin-left: auto;
    background-color: #eeeeee;
    position: relative;
    transform: translateX(100%);
    transition: 0.3s ease-in-out;
    z-index: 99;
    padding-bottom: 80px;

    .close {
      color: #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 0 !important;
      width: 100%;
      cursor: pointer;
      padding: 40px 25px 0;

      svg {
        width: 20px;
        height: 20px;
        fill: black;
      }
    }

    nav {
      padding: 15px 0 0;
      display: flex;
      flex-direction: column;
      flex-direction: column;
      height: auto;
      align-items: flex-start;
      gap: 10px;
      width: 100%;

      .link,
      span {
        cursor: pointer;
        padding: 10px 25px 7px;
        width: 100%;
        border-radius: 0;
        color: #000;

        &.active {
          color: red;
          background-color: #fff;
          font-weight: 700;
        }
      }

      .itens.active {
        color: var(--primary-color);
      }

      .button-bag {
        margin: 10px 25px 7px;
      }

      .border {
        border-bottom: 3px solid #fff;
        width: 100%;
        height: 1px;
        margin: 10px 0;
      }

      .contact {
        color: var(--secondary-color);
        padding: 0 25px;
      }
    }
  }

  .icons-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    gap: 20px;
  }

  .link-icons {
    svg {
      width: 20px;
      fill: #0c3e6a;
    }

    &:hover {
      fill: #ff8726;
    }
  }

  .menu-mobile::-webkit-scrollbar {
    width: 4px;
  }

  .menu-mobile::-webkit-scrollbar-track {
    background: #ccc;
  }

  .menu-mobile::-webkit-scrollbar-thumb {
    background: #000;
  }

  .menu-mobile::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }

  .link.active {
    background-color: #cccc;
  }

  .dropdown {
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5px;

      svg {
        width: 18px;
        height: 18px;
        stroke: #000;
        transition: 0.4s;
      }
    }

    .subMenu-bg {
      padding-top: 15px;
      width: 100%;
      display: none;
      flex-direction: column;
      transition: 3s;
      opacity: 0;
      gap: 8px;

      .sub-link {
        padding: 10px;
        width: 100%;
        color: #000;
        background-color: #fff;
      }
    }
  }

  .dropdown.active {
    background-color: #fff;
    border-radius: 3px;

    .title {
      svg {
        transform: rotate(90deg);
      }
    }

    .subMenu-bg {
      display: flex;
      opacity: 1;

      .sub-link.active {
        color: #0c3e6a;
      }

      .sub-link {
        background-color: #eeeeee;
      }
    }
  }

  .close {
    color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin-left: auto;
    cursor: pointer;
    padding: 18px 0px 0;
    width: 55px;

    svg {
      display: flex;
      align-items: center;
      width: 100%;
      height: 25px;
      fill: black;
      margin-bottom: 5px;
    }
  }

  &.active {
    visibility: visible;

    .menu-mobile {
      transform: translateX(0%);
    }
  }

  .button {
    margin-left: 20px;
  }

  .box-socials {
    padding-left: 25px;
  }

  @media only screen and (max-width: 1024px) {
    display: flex;
  }

  @media only screen and (max-width: 390px) {
    .dropdown {
      .title {
        svg {
          width: 10px;
          height: 10px;
        }
      }
    }

    .menu-mobile {
      width: 90%;
    }
  }
`;

import styled from "styled-components";

export const BlogPage = styled.section`
  .banner-blog {
    height: unset;
    background: none;

    &::after {
      display: none;
    }

    h1 {
      font-family: "Montserrat-Bold";
      text-transform: uppercase;
      color: var(--primary-color);
      text-shadow: none;
    }
  }

  .tag-post {
    display: none;
  }

  .actions {
    display: flex;
    justify-content: space-between;

    .link {
      background-color: var(--secondary-color) !important;

      svg {
        fill: #fff;
      }

      &:hover {
        background-color: var(--primary-color) !important;
      }
    }

    .leia-mais {
      color: var(--secondary-color) !important;

      &:hover {
        color: var(--primary-color) !important;
      }
    }
  }

  .box-actions {
    h4 {
      color: var(--primary-color);
    }
  }
  .sideBoxCategories {
    order: 1;

    .categories-box {
      gap: 0px;
      flex-direction: column;

      a {
        justify-content: flex-start;
        border: unset;
        border-radius: unset;
        padding-left: 0;

        &:hover {
          background-color: unset;
          color: #252525;
        }
      }

      a + a {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(37, 37, 37, 0.3);
      }
    }
  }

  .newsletter {
    order: 2;

    form {
      input {
        height: 53px;
        text-align: center;
        margin-bottom: 10px;
        border: 1px solid #707070;
        border-radius: 5px;
        margin-bottom: 30px;
      }

      .actions-form {
        width: 100%;

        button {
          padding: 5px;
          border: unset;
          height: 53px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--secondary-color);
          color: #fff;
          border-radius: 5px;

          &:hover {
            background-color: var(--primary-color);
          }
        }
      }
    }
  }

  .featuredBlogList {
    order: 3;
  }

  .show-mobile {
    display: none;
  }

  .container {
    gap: 30px;
  }

  @media only screen and (max-width: 1600px) {
    /* padding-top: 150px; */

    .container {
      gap: 25px;
    }

    .newsletter {
      form {
        input {
          margin-bottom: 25px;
        }
      }
    }
  }

  @media only screen and (max-width: 1400px) {
    /* padding-top: 120px; */

    .container {
      gap: 20px;
    }

    .newsletter {
      form {
        input,
        button {
          height: 51px !important;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    /* padding-top: 100px; */
  }

  @media only screen and (max-width: 1024px) {
  }

  @media only screen and (max-width: 900px) {
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

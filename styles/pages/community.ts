import styled from "styled-components";

export const Community = styled.div`
  > section:first-child {
    background: linear-gradient(
      270deg,
      rgba(0, 0, 0, 0) 33.36%,
      rgba(0, 0, 0, 0.7) 73.34%
    );

    .container {
      flex-direction: column-reverse;

      .paragraph-2 {
        color: #fff;
        font-size: 5.8rem;
        line-height: 1.05;
        max-width: 40rem;
      }

      h1 {
        margin-bottom: 1rem;
        color: var(--primary-color);
        font-size: 3.8rem;
      }
    }

    @media only screen and (max-width: 1200px) {
      .container {
        .paragraph-2 {
          font-size: 4.6rem;
        }

        h1 {
          font-size: 3.2rem;
        }
      }
    }

    @media only screen and (max-width: 1024px) {
      .container {
        .paragraph-2 {
          font-size: 3.6rem;
        }

        h1 {
          font-size: 2.8rem;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .container {
        .paragraph-2 {
          font-size: 2.6rem;
          max-width: 20rem;
        }

        h1 {
          margin-bottom: 0.5rem;
          font-size: 2rem;
        }
      }
    }

    @media only screen and (max-width: 500px) {
      .container .paragraph-2 {
        text-align: center;
      }
    }
  }
`;

import { styled } from "styled-components";

export const ShopsList = styled.section`
  width: 100%;
  padding: 0 !important;

  .text {
    text-align: center;
  }

  .titles {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 15px;

    & + * {
      margin-top: 80px;
    }

    h1 {
      color: var(--primary-color);
    }
  }

  .content {
    h2 {
      text-align: center;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      line-height: 1.2;
      padding-bottom: clamp(11px, 1.15vw, 22px);
    }

    .shops-box {
      margin-top: clamp(20px, 2.24vw, 43px);

      .shop-card + .shop-card {
        margin-top: clamp(20px, 2.24vw, 43px);
      }
    }

    h2 + .shops-box {
      margin-bottom: clamp(30px, 3.8vw, 73px);
    }
  }

  @media only screen and (max-width: 1024px) {
    .titles + * {
      margin-top: 50px;
    }
  }
`;

import styled from "styled-components";

interface BgLayoutProps {}

export const Layout = styled.div<BgLayoutProps>`
  span {
    background-color: unset !important;
  }

  #contato {
    background-color: #e3f3f2;
    padding: 150px 0;

    .contact-list {
      gap: 30px;
    }

    button {
      background-size: 300%;
      background-position: left;
      background-image: linear-gradient(
        99deg,
        #c78c21 0%,
        #dcb351 33%,
        #c0851d 67%,
        #dcb251 100%
      );

      &:hover {
        background-position: right;
      }
    }
  }

  .banner-blog h1 {
    font-family: "Poppins-Regular" !important;
    font-weight: 500 !important;
    text-transform: none !important;
  }

  .blog-content {
    padding: 0;
  }

  .post-content .banner-post {
    min-height: 200px;
    padding-top: 50px;
  }

  .tags,
  .wrapper-tags {
    display: none;
  }

  .box-tags {
    display: none;
  }

  .button-loja {
    max-width: 310px;
    margin: 50px auto;
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
    .button-loja {
      max-width: 280px;
      margin: 40px auto;
    }
  }

  @media only screen and (max-width: 1200px) {
    #contato {
      padding: 150px 0 50px;
    }

    .post-content .banner-post {
      min-height: 160px;
    }

    .button-loja {
      max-width: 270px;
      margin: 30px auto;
    }
  }

  @media only screen and (max-width: 1024px) {
    #contato {
      padding: 120px 0 50px;
    }
  }

  @media only screen and (max-width: 900px) {
  }

  @media only screen and (max-width: 768px) {
    .button-loja {
      max-width: 220px;
    }
  }

  @media only screen and (max-width: 650px) {
    #contato {
      padding: 100px 0 40px;
    }
  }

  @media only screen and (max-width: 500px) {
    .post-content .banner-post h1 {
      text-align: center;
    }
  }

  @media only screen and (max-width: 390px) {
    .button-loja {
      max-width: 180px;
    }
  }
`;

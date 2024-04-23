import styled from "styled-components";

export const Banner = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.primaryColor};
  position: relative;
  z-index: 22;

  .image {
    width: 100%;
    height: 500px;
    aspect-ratio: 1;
  }

  .content {
  }
`;

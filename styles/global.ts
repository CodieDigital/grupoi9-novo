import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth !important;
  font-size: 10px !important;
}

body {
  background-size: cover;
  overflow-x: hidden !important;

    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primaryColor};
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${(props) => props.theme.secondaryColor};
    }
}

*:focus {
  outline: transparent !important;
}

a,
button {
  cursor: pointer;
  text-decoration: none !important;
  transition: 0.25s;
}

a:hover,
button:hover {
  transition: 0.25s;
}

a::after,
a::before {
  transition: 0.3s;
}

a:hover::after,
a:hover::before {
  transition: 0.3s;
}

ol,
ul {
  list-style: none !important;
  padding-left: 0 !important;
  margin-bottom: 0 !important;
}

.container-codie {
  max-width: 0;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.loader-router {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  animation-duration: 1.8s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background:  ${(props) => props.theme.primaryColor};
  background: ${(props) => `linear-gradient(
  to right,
  ${props.theme.primaryColor} 8%,
  ${props.theme.secondaryColor + '5a'} 25%,
  ${props.theme.primaryColor} 33%
  )`} ;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
}

@media only screen and (max-width: 1600px) {
  .container {
    max-width: 0;
  }
}

@media only screen and (max-width: 1400px) {
  .container {
    max-width: 0;
  }
}

@media only screen and (max-width: 1200px) {
  .container {
    max-width: 0;
  }
}

@media only screen and (max-width: 1024px) {
  .container {
    max-width: 0;
  }
}

@media only screen and (max-width: 900px) {
  .container {
    max-width: 0;
  }

  .error-message {
    font-size: 12px;
    margin-top: 4px;
    padding-left: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .container {
    max-width: 0;
  }
}

@media only screen and (max-width: 650px) {
  .container {
    max-width: 0;
  }
}
`;

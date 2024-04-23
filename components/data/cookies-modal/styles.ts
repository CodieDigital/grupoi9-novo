import styled from 'styled-components';

export const CookiesModal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  height: 100%;
  color: #fff;

  .button {
    width: 100%;
    max-width: fit-content;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background-size: 300%;
    background-position: left;
    transition: all 0.4s ease-in-out;
    color: var(--button-color-bg);
    border: none;
    color: #000;
    background-image: linear-gradient(
      99deg,
      var(--bt-linear-gradient-1) 0%,
      var(--bt-linear-gradient-2) 33%,
      var(--bt-linear-gradient-1) 67%,
      var(--bt-linear-gradient-2)
    );
    padding: 9px 18px;

    &:hover {
      background-position: right;
      color: var(--button-color-bg-hover);
    }
  }

  @media only screen and (max-width: 1600px) {
  }

  @media only screen and (max-width: 1400px) {
  }

  @media only screen and (max-width: 1200px) {
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

export const customStyles = {
  overlay: {
    zIndex: 99,
    backgroundColor: 'none',
    width: '100%',
    height: 'fit-content',
    bottom: 0,
    left: 0,
    padding: '0',
    inset: 'unset',
    borderRadius: 0,
  },
  content: {
    width: '100%',
    height: '100%',
    backgroundColor: '#333',
    border: '0',
    inset: 'unset',
    position: 'unset',
    borderRadius: 0,
  },
};

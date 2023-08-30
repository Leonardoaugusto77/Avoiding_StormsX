import styled, { keyframes, css } from "styled-components";
import fundo from "../Home_Styles/ceu.png";

interface CharacterImgProps {
  isVisible: boolean;
  cursorPointer: boolean;
  animationDuration: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Header_Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
`;

export const Header_Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 50vh;
  align-items: center;
  position: relative;
`;

export const Wrapper_Section_Purpose = styled.div``;

export const Title = styled.h1`
  width: 100vh;
  position: absolute;
  text-align: center;
  font-size: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 60px;
  background-color: transparent;
  color: #fff;
  animation: fliptTile 2s;

  @keyframes fliptTile {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }

  @media (max-width: 320px) {
    width: 30vh;
  }

  @media (max-width: 390px) {
    width: 40vh;
    font-size: 30px;
  }

  @media (max-width: 414px) {
    width: 40vh;
    font-size: 25px;
  }
  @media (max-width: 768px) {
    width: 60vh;
  }
`;

export const Title_lv2 = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-top: 25px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 414px) {
    font-size: 25px;
  }
`;

export const Text = styled.p`
  text-align: center;
  width: 100vh;
  font-size: 20px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 50vh;
  }

  @media (max-width: 414px) {
    width: 35vh;
    font-size: 15px;
  }

  @media (max-width: 390px) {
    width: 40vh;
    font-size: 15px;
  }
`;

export const Registration_Button = styled.button`
  background-color: #000000be;
  position: absolute;
  width: 300px;
  height: 50px;
  border-radius: 5px;

  margin-top: 200px;
  margin-bottom: 25px;
  z-index: 1;
  color: #ffffff;
  border: none;
  transition: width 3s, font-size 3s; /* Adicione a transição para suavizar as mudanças de largura e tamanho da fonte */

  &:hover {
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    width: 470px;
  }

  @media (max-width: 768px) {
    width: 350px;
  }

  @media (max-width: 320px) {
    width: 220px;
  }

  @media (max-width: 390px) {
    width: 230px;
  }
`;

export const Services_Container = styled.div`
  margin-bottom: 45px;
  z-index: 1;
`;

export const Character_Img = styled.img<CharacterImgProps>`
  width: 500px;
  height: 400px;
  background-color: transparent;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: -10px;
  z-index: 1;
  animation-duration: ${(props) => props.animationDuration};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  display: ${(props) => (props.isVisible ? "block" : "none")};
  pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};

  animation: ${(props) =>
    props.isVisible
      ? css`
          ${fadeIn} 6s ease-in-out forwards,
          ${fadeOut} 6s 6s ease-in-out forwards
        `
      : "none"};

  @media (max-width: 390px) {
    display: none;
  }
  @media (max-width: 414px) {
    display: none;
  }
`;

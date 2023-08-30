import styled from "styled-components";

interface CardProps {
  mobileWidth: string;
}

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: height 0.5s ease;
  margin: 25px auto;

  @media (max-width: 425px) {
    width: 380px;
  }

  @media (max-width: 414px) {
    width: 385px;
  }

  @media (max-width: 390px) {
    width: ${(props) => props.mobileWidth};
  }

  @media (max-width: 320px) {
    width: 300px;
  }
`;

export const Card_Response = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.theme.colors.backgroundElements};
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: height 0.5s ease;
  margin: 25px auto;

  @media (max-width: 425px) {
    width: 380px;
  }

  @media (max-width: 414px) {
    width: 330px;
  }

  @media (max-width: 390px) {
    width: ${(props) => props.mobileWidth};
  }

  @media (max-width: 320px) {
    width: 250px;
  }
`;

export const Title_Cep = styled.h3`
  width: 500px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;

  @media (max-width: 414px) {
    font-size: 25px;
  }

  @media (max-width: 390px) {
    font-size: 24px;
  }
  @media (max-width: 320px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: -5px;
`;

export const Search_input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;

  &::placeholder {
    font-size: 15px;
    font-weight: 700;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 320px) {
    margin-top: 15px;
  }

  @media (max-width: 414px) {
    margin-top: 15px;
  }
`;

export const SearchCep_Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 320px) {
    flex-direction: column;
  }

  @media (max-width: 414px) {
    flex-direction: column;
  }
`;

export const Content = styled.div<{ isExpanded: boolean }>`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: ${(props) => (props.isExpanded ? "block" : "none")};
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: linear-gradient(146deg, #06deea 0%, #fe9abe 100%);
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  position: relative;

  @media (max-width: 390px) and (min-width: 414px) {
    width: 300px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 350px;
  right: 15px;
  background-color: transparent;
  border: none;
  font-size: 25px;
  color: #ffffff;

  font-size: 25px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    color: red;
    transition: 2s;
  }
  @media (max-width: 375px) {
    bottom: 200px;
  }
  @media (max-width: 320px) {
    bottom: 350px;
  }
`;

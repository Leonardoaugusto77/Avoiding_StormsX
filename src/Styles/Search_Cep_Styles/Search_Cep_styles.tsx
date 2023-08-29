import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  color: #fff;
  background-color: #000000be;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  transition: height 0.5s ease;
  margin: auto;

  &.expanded {
    height: 200px;
  }
`;

export const Title_Cep = styled.h3`
  width: 500px;
  text-align: center;
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Search_input = styled.input`
  width: 350px;
  height: 30px;

  &::placeholder {
    font-size: 15px;
    font-weight: 700;
  }
`;

export const SearchCep_Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div<{ isExpanded: boolean }>`
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: ${(props) => (props.isExpanded ? "block" : "none")};
`;

export const IconContainer = styled.div`
  position: relative;
  bottom: 80px;
  left: 220px;
  cursor: pointer;
  color: #007bff;
  font-size: 24px;
  margin-bottom: -35px;
`;

export const ModalContainer = styled.div`
  /* Estilos para o contêiner do modal */
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
  /* Estilos para o conteúdo do modal */
  background: linear-gradient(146deg, #06deea 0%, #fe9abe 100%);
  width: 80%;
  max-width: 600px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  bottom: 300px;
  right: 10px;
  background-color: transparent;
  border: none;

  font-size: 25px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
    color: red;
    transition: 2s;
  }
`;

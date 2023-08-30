import styled from "styled-components";

export const Wrapper_Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const Title_Form = styled.h1``;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 500px;

  @media (max-width: 390px) {
    width: 70%;
  }
  @media (max-width: 414px) {
    width: 70%;
  }
`;

export const Button_Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 300px;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.tertiary};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

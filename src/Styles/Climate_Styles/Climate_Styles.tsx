import styled, { keyframes } from "styled-components";

interface WeatherInfoContainerProps {
  isVisible: boolean;
}

const expandAnimation = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 500px; /* ou a altura desejada */
    opacity: 1;
  }
`;

export const ClimateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  border-radius: 5px;
  color: #fff;
  background-color: #000000be;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 30px auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-top: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const WeatherInfoContainer = styled.div<WeatherInfoContainerProps>`
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease;
  padding: 20px;
  width: 300px;
  text-align: center;
  text-align: center;
  background-color: transparent;
  border: none;
  animation: ${expandAnimation};
  ${(props) =>
    props.isVisible &&
    `
    max-height: 500px; /* ou a altura desejada */
    opacity: 1;
  `}
`;

export const WeatherConditions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeatherImage = styled.img`
  margin-left: 10px;
  width: 40px;
  height: 40px;
`;

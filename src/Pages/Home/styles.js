import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  background-color: ${(props) => props.theme.colors.white};
`;

export const StyledText = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
`;

export const Img = styled.Image`
  width: 300px;
  height: 400px;
`;

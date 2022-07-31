import styled from "styled-components/native";

export const Container = styled.View`
  height: 100%;

  background-color: ${(props) => props.theme.colors.black};
`;

export const StyledText = styled.Text`
  color: ${(props) => props.theme.colors.white};
`;

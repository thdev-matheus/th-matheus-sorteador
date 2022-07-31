import styled from "styled-components/native";

export const StyledButton = styled.TouchableOpacity`
  width: 300px;
  height: 64px;

  justify-content: center;
  align-items: center;

  border-radius: 16px;

  background-color: ${(props) => props.theme.colors.black};
`;

export const ButtonText = styled.Text`
  text-transform: uppercase;

  font-size: 24px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.white};
`;

import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  margin: 8px;
`;

export const SInput = styled.TextInput`
  width: 180px;
  height: 70px;

  padding: 0 8px;

  border-radius: 16px;
  border: 2px solid ${(props) => props.theme.colors.dark};

  font-size: 20px;

  background-color: ${(props) => props.theme.colors.white};
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;

  text-transform: uppercase;

  margin-bottom: 8px;
  margin-left: 8px;

  color: ${(props) => props.theme.colors.dark};
`;

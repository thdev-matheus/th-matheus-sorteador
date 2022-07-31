import styled from "styled-components/native";
import SButton from "../SButton";

export const Container = styled.View`
  width: 100%;

  align-items: center;
`;

export const InputBox = styled.View`
  width: 90%;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ButtonS = styled(SButton)`
  width: 92%;
  height: 90px;

  margin-top: 50px;

  background-color: ${(props) => props.theme.colors.lightBrown};
`;

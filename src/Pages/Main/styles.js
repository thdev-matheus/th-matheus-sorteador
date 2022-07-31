import styled from "styled-components/native";
import Back from "react-native-vector-icons/EvilIcons";
import Insta from "react-native-vector-icons/Entypo";

export const Container = styled.View`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  background-color: ${(props) => props.theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  height: 70px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  margin-top: 30px;
  margin-bottom: 10px;

  background-color: ${(props) => props.theme.colors.dark};
`;

export const SIcon = styled(Back)`
  margin-right: 16px;
  margin-left: 16px;

  color: ${(props) => props.theme.colors.white};
`;

export const StyledTitle = styled.Text`
  font-size: 28px;
  font-weight: bold;

  text-transform: uppercase;

  color: ${(props) => props.theme.colors.white};
`;

export const ResultBox = styled.View`
  display: flex;
  align-items: center;

  margin-top: 30px;
`;

export const StyledText = styled.Text`
  font-size: 30px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.dark};
`;

export const StyledResult = styled.Text`
  font-size: 100px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.lightBrown};
`;

export const Footer = styled.View`
  width: 100%;
  height: 80px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;

  background-color: ${(props) => props.theme.colors.dark};
`;

export const SocialText = styled.Text`
  font-size: 16px;
  font-weight: bold;

  text-transform: uppercase;

  margin-right: 16px;

  color: ${(props) => props.theme.colors.white};
`;

export const SInsta = styled(Insta)`
  color: ${(props) => props.theme.colors.white};
`;

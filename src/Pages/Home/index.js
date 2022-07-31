import { Button, Image, Text, View } from "react-native";
import { useHistory } from "react-router-native";
import { Container, Img, StyledText } from "./styles";
import Logo from "../../../assets/logo-cm.png";
import SButton from "../../components/SButton";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <StyledText>Bem-vindo(a)!</StyledText>
      <StyledText>Você está no sorteador do:</StyledText>
      <Img source={Logo}></Img>
      <SButton
        onPress={() => history.push("/main")}
        title="Ir para Sorteador"
      />
    </Container>
  );
};

export default Home;

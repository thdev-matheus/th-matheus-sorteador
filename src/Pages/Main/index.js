import { Button, Text, Linking, ToastAndroid } from "react-native";
import { Link, useHistory } from "react-router-native";
import Form from "../../components/Form";
import {
  Container,
  Footer,
  Header,
  ResultBox,
  SIcon,
  SInsta,
  SocialText,
  StyledResult,
  StyledText,
  StyledTitle,
} from "./styles";
import { useContext } from "react";
import { ResultContext } from "../../providers/ResultProvider";

const Main = () => {
  const history = useHistory();
  const { result, setResult } = useContext(ResultContext);

  const openUrl = async (url) => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    } else {
      ToastAndroid.show("Can't open this URL", ToastAndroid.SHORT);
    }
  };
  return (
    <Container>
      <Header>
        <SIcon
          name="arrow-left"
          size={70}
          onPress={() => {
            history.push("/");
            setResult(0);
          }}
        />
        <StyledTitle>Sorteador</StyledTitle>
      </Header>

      <ResultBox>
        <StyledText>E o resultado é:</StyledText>
        <StyledResult>{result}</StyledResult>
      </ResultBox>

      <Form />

      <Footer>
        <SocialText>Clique e visite nosso Insta!</SocialText>
        <SInsta
          name="instagram"
          size={40}
          onPress={() => {
            openUrl("https://www.instagram.com/ide_sertao/");
          }}
        />
      </Footer>
    </Container>
  );
};

export default Main;

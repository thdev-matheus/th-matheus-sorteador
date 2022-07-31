import { Text } from "react-native";
import { Container, Label, SInput } from "./styles";

const Input = ({ label, ...rest }) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <SInput {...rest} />
    </Container>
  );
};

export default Input;

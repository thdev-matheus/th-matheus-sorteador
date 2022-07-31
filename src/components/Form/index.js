import { useContext, useState } from "react";
import { ResultContext } from "../../providers/ResultProvider";
import { ButtonS, Container, InputBox } from "./styles";
import Input from "../Input";

const Form = () => {
  const { setResult } = useContext(ResultContext);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handlePress = () => {
    const numberStart = Math.ceil(+start);
    const numberEnd = Math.floor(+end);

    const random =
      Math.floor(Math.random() * (numberEnd - numberStart + 1)) + numberStart;

    start !== "" && end !== "" && setResult(random);
  };

  return (
    <Container>
      <InputBox>
        <Input
          keyboardType="numeric"
          onChangeText={setStart}
          value={start}
          label="Início"
          placeholder="Digite um número"
        />
        <Input
          keyboardType="numeric"
          onChangeText={setEnd}
          value={end}
          label="Fim"
          placeholder="Digite um número"
        />
      </InputBox>
      <ButtonS onPress={() => handlePress()} title="Sortear" />
    </Container>
  );
};

export default Form;

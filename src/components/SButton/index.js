import { ButtonText, StyledButton } from "./styles";

const SButton = ({ title, ...rest }) => {
  return (
    <StyledButton {...rest}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
};

export default SButton;

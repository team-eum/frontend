import { StyledButton } from "./styles";

function Button(props) {
  const { title, onClick, className } = props;
  return (
    <StyledButton onClick={onClick} className={className}>
      {title || "button"}
    </StyledButton>
  );
}

export default Button;

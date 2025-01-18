import Logo from "../../assets/Logo.png";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, Container, LogoImage } from "./styles";

function Header() {
  //const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Container>
      <LogoImage image={Logo}></LogoImage>
      <ButtonContainer>
        <Button
          className="skyblue"
          title="로그인"
          onClick={() => navigate("/login")}
        />
        <Button
          className="grey"
          title="회원가입"
          onClick={() => navigate("/login")}
        />
      </ButtonContainer>
    </Container>
  );
}

export default Header;

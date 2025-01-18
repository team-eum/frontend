import Logo from "../../assets/Logo.png";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";
import { ButtonContainer, Container, LogoImage } from "./styles";
import { useUser } from "../../domain/UserContext";
import { FiUser } from "react-icons/fi";

function Header() {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Container>
      <LogoImage image={Logo} onClick={() => navigate("/")}></LogoImage>
      {user ? (
        <ButtonContainer className="icon">
          <FiUser
            size="30"
            onClick={() => {
              navigate("/mypage");
            }}
          />
        </ButtonContainer>
      ) : (
        <ButtonContainer>
          <NavItem to="/login">
            <Button title="로그인" className="yellow"></Button>
          </NavItem>
          <NavItem to="/register">
            <Button title="회원가입" className="brown"></Button>
          </NavItem>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default Header;

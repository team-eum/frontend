import Button from "../../components/button/Button.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";

import {
  Container,
  TextContainer,
  SubTitleText,
  TitleText,
  SubText,
} from "./styles.jsx";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <TextContainer>
        <SubTitleText>지역과 세대를 잇는 새로운 연결의 시작</SubTitleText>
        <TitleText>EUM</TitleText>
        <SubText>
          모두를 이어 함께 성장하는 플랫폼 EUM에서 더 나은 미래를 만들어 가세요.
        </SubText>
      </TextContainer>
      <Button
        className="skyblue"
        title="EUM 사용하러 가기"
        onClick={() => navigate("/login")}
      />
    </Container>
  );
}

export default LandingPage;

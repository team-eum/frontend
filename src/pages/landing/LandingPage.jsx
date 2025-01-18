import Button from "../../components/button/Button.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import btn from "../../assets/Landing_Icon.png";

import {
  Container,
  TextContainer,
  SubTitleText,
  TitleText,
  SubText,
  MainButton,
  ButtonContainer,
  BtnImage,
  BtnText,
} from "./styles.jsx";
import { useUser } from "../../domain/UserContext.jsx";

function LandingPage() {
  const navigate = useNavigate();
  const { user } = useUser();

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
      {user ? (
        <Button
          className="skyblue"
          title="EUM 사용하러 가기"
          onClick={() => navigate("/login")}
        />
      ) : (
        <ButtonContainer>
          <MainButton className="blue" onClick={() => navigate("/matching")}>
            <BtnImage image={btn}></BtnImage>
            <BtnText>매칭 목록 확인하기</BtnText>
          </MainButton>
          <MainButton className="white" onClick={() => navigate("/schedule")}>
            <BtnImage image={btn}></BtnImage>
            <BtnText>일정 목록 확인하기</BtnText>
          </MainButton>
          <MainButton className="blue" onClick={() => navigate("/interview")}>
            <BtnImage image={btn}></BtnImage>
            <BtnText>면담 내역 확인하기</BtnText>
          </MainButton>
        </ButtonContainer>
      )}
    </Container>
  );
}

export default LandingPage;

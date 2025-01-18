//import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import ListItem from "../../components/list/ListItem.jsx";
import { Container, TextContainer, TitleText, SubText } from "./styles.jsx";

function MatchingPage() {
  //const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>나의 매칭 목록</TitleText>
        <SubText>나에게 매칭된 멘토/멘티를 확인하세요!</SubText>
      </TextContainer>
      <ListItem name="홍길동" keyword="키오스크 확인" date="월 14:00 -16:00" />
    </Container>
  );
}

export default MatchingPage;

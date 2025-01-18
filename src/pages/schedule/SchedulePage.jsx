//import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import ListItem from "../../components/list/ScheduleItem.jsx";
import { Container, TextContainer, TitleText, SubText } from "./styles.jsx";

function SchedulePage() {
  //const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>나의 일정 목록</TitleText>
        <SubText>확정된 일정을 확인하세요!</SubText>
      </TextContainer>
      {/* todo: api 연동 후 list 매핑 */}
      <ListItem name="홍길동" keyword="키오스크 확인" date="월 14:00 - 16:00" />
    </Container>
  );
}

export default SchedulePage;

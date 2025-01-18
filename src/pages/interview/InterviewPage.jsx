import Header from "../../components/header/Header.jsx";
import ListItem from "../../components/list/InterviewItem.jsx";
import { Container, TextContainer, TitleText, SubText } from "./styles.jsx";

function InterviewPage() {
  //const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>나의 면담 내역</TitleText>
        <SubText>녹음된 면담 내용을 확인하세요!</SubText>
      </TextContainer>
      {/* todo: api 연동 후 list 매핑 */}
      <ListItem name="홍길동" keyword="키오스크 확인" date="월 14:00 - 16:00" />
    </Container>
  );
}

export default InterviewPage;

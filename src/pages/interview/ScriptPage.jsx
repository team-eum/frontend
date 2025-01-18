import Header from "../../components/header/Header.jsx";
import {
  Container,
  TextContainer,
  TitleText,
  SubText,
  SubTitleText,
  SummaryContainer,
  SummaryText,
} from "./styles.jsx";

function ScriptPage() {
  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>
          {/* todo: id로 면담 내용 요청해서 사용자 인터뷰 내용 받아오기 */}
          <span className="blue">홍길동</span>
          <span>님과의 면담 내역</span>
        </TitleText>
        <SubText>AI 요약본으로 핵심 내용을 확인할 수 있어요!</SubText>
      </TextContainer>
      {/* todo: 마크다운 연결 */}
      <SummaryContainer>
        <SubTitleText>AI 요약 내역</SubTitleText>
        <SummaryText></SummaryText>
      </SummaryContainer>
      <SummaryContainer>
        <SubTitleText>전체 스크립트</SubTitleText>
        <SummaryText></SummaryText>
      </SummaryContainer>
    </Container>
  );
}

export default ScriptPage;

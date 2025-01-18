import Header from "../../components/header/Header.jsx";
import {
  Container,
  TextContainer,
  TitleText,
  SubText,
  SubTitleText,
  SummaryContainer,
  SummaryText,
  AllText
} from "./styles.jsx";
import ReactMarkdown from "react-markdown";
import raw from 'rehype-raw';
import slug from 'rehype-slug';
function ScriptPage() {
  // const customRenderers = {
  //   a: ({ href, children }) => <a href={href}>{children}</a>,
  //   // pre: (code) => {
  //   //   if (code.children.props.className) { 
  //   //     const language = code.children.props.className?.split('-')[1];
  //   //     return (
  //   //       <SyntaxHighlighter 
  //   //       style={atomDark}
  //   //       PreTag="pre"
  //   //       language={language}
  //   //       // customStyle={{
  //   //       //     whiteSpace: 'pre-wrap',
  //   //       //     overflowWrap: 'break-word',
  //   //       // }}
  //   //       CodeTag={({ children }) => (
  //   //         <code className='whitespace-pre-wrap'>
  //   //           {children}
  //   //         </code>
  //   //       )}
  //   //       >
  //   //         {code.children.props.children}
  //   //       </SyntaxHighlighter>
  //   //     );
  //   //   }
  //   // },
  //   img: (img) => {
  //     console.log(img);
  //     const width = (img.width)?img.width:'600';
  //     const height = (img.height)?img.height:'300';

  //     return (<img src={`/${props.slug}/${img.src}`} alt={img.src} width={width} height={height}></Image>)
  //   },
  // };
  const data = '# 요약\n- 중요 내용 1 : 나는 발롱도르 5회 수상과 여러 개인 트로피 수상 등의 성과를 이루었으며, 2016년 유로 대회에서 포르투갈을 우승으로 이끌었다.\n- 중요 내용 2 : 국제 경기에서 역대 최다 득점자이며, 챔피언스리그 최다 득점자로서 레알 마드리드에서 5번이나 우승했다. 이러한 기록들은 내가 세계 최고임을 증명한다.\n- 중요 내용 3 : 36세의 나이에도 프리미어리그에서 18골을 기록하고 챔피언스리그에서 5경기 연속 골을 기록했다.\n- 중요 내용 4 : 맨유의 이사회와 팬들이 나를 문제아로 여겨 쫓아냈지만, 내가 세계 최고이고 팀보다 위대하다는 사실은 변하지 않는다.\n- 중요 내용 5 : 사우디아라비아로 간 이유는 메시에 대한 자격지심이 아니라, 유럽에서 이룰 수 있는 모든 것을 이루었기 때문에 아시아를 정복하고자 온 것이다. 단지 돈 때문이 아니다. # 요약\n- 중요 내용 1 : 나는 발롱도르 5회 수상과 여러 개인 트로피 수상 등의 성과를 이루었으며, 2016년 유로 대회에서 포르투갈을 우승으로 이끌었다.\n- 중요 내용 2 : 국제 경기에서 역대 최다 득점자이며, 챔피언스리그 최다 득점자로서 레알 마드리드에서 5번이나 우승했다. 이러한 기록들은 내가 세계 최고임을 증명한다.\n- 중요 내용 3 : 36세의 나이에도 프리미어리그에서 18골을 기록하고 챔피언스리그에서 5경기 연속 골을 기록했다.\n- 중요 내용 4 : 맨유의 이사회와 팬들이 나를 문제아로 여겨 쫓아냈지만, 내가 세계 최고이고 팀보다 위대하다는 사실은 변하지 않는다.\n- 중요 내용 5 : 사우디아라비아로 간 이유는 메시에 대한 자격지심이 아니라, 유럽에서 이룰 수 있는 모든 것을 이루었기 때문에 아시아를 정복하고자 온 것이다. 단지 돈 때문이 아니다. # 요약\n- 중요 내용 1 : 나는 발롱도르 5회 수상과 여러 개인 트로피 수상 등의 성과를 이루었으며, 2016년 유로 대회에서 포르투갈을 우승으로 이끌었다.\n- 중요 내용 2 : 국제 경기에서 역대 최다 득점자이며, 챔피언스리그 최다 득점자로서 레알 마드리드에서 5번이나 우승했다. 이러한 기록들은 내가 세계 최고임을 증명한다.\n- 중요 내용 3 : 36세의 나이에도 프리미어리그에서 18골을 기록하고 챔피언스리그에서 5경기 연속 골을 기록했다.\n- 중요 내용 4 : 맨유의 이사회와 팬들이 나를 문제아로 여겨 쫓아냈지만, 내가 세계 최고이고 팀보다 위대하다는 사실은 변하지 않는다.\n- 중요 내용 5 : 사우디아라비아로 간 이유는 메시에 대한 자격지심이 아니라, 유럽에서 이룰 수 있는 모든 것을 이루었기 때문에 아시아를 정복하고자 온 것이다. 단지 돈 때문이 아니다.';
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
        <SummaryText><ReactMarkdown>{data}</ReactMarkdown></SummaryText>
      </SummaryContainer>
      <SummaryContainer>
        <SubTitleText>전체 스크립트</SubTitleText>
        <AllText><ReactMarkdown>{data}</ReactMarkdown></AllText>
      </SummaryContainer>
    </Container>
  );
}

export default ScriptPage;

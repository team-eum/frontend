import Button from "../button/Button";
import {
  ButtonContainer,
  Container,
  KeywordContainer,
  Text,
  TextContainer,
} from "./styles";

function ListItem(props) {
  const { name, keyword, date } = props;

  const handleInterviewConfirm = async () => {
    try {
      // 서버 요청
      const response = await fetch(`/api/interviews/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ interviewId }), // 서버로 면담 ID 전달
      });

      // 요청 성공 여부 확인
      if (response.ok) {
        alert(`${name}님의 면담이 확정되었습니다.`);
      } else {
        const error = await response.json();
        alert(`면담 확정 중 오류 발생: ${error.message || "알 수 없는 오류"}`);
      }
    } catch (error) {
      console.error("면담 확정 요청 실패:", error);
      alert("면담 확정 중 네트워크 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <Container>
      <TextContainer>
        <Text>{name}</Text>
        <KeywordContainer>{keyword}</KeywordContainer>
        <Text>{date}</Text>
      </TextContainer>
      <ButtonContainer>
        <Button
          className="skyblue"
          title="면담 확정"
          onClick={handleInterviewConfirm}
        />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

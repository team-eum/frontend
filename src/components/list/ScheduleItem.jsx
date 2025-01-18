import { useState } from "react";
import Button from "../button/Button";
import { FaMicrophone } from "react-icons/fa";
import {
  ButtonContainer,
  Container,
  KeywordContainer,
  Text,
  TextContainer,
} from "./styles";

function ListItem(props) {
  const { name, keyword, date } = props;

  const [isRecording, setIsRecording] = useState(false);
  const [recognition, setRecognition] = useState(null);
  const [transcription, setTranscription] = useState("");

  const startRecording = () => {
    if (
      !("webkitSpeechRecognition" in window || "SpeechRecognition" in window)
    ) {
      alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognitionInstance = new SpeechRecognition();

    recognitionInstance.lang = "ko-KR";
    recognitionInstance.interimResults = false;
    recognitionInstance.maxAlternatives = 1;

    recognitionInstance.onstart = () => {
      setIsRecording(true);
      setTranscription("");
      console.log("녹음 시작");
      alertWithStopOption();
    };

    recognitionInstance.onresult = (event) => {
      const text = event.results[0][0].transcript;
      setTranscription((prev) => prev + " " + text);
      console.log("음성 인식 결과:", text);

      // 서버로 텍스트 전송
      sendTranscriptionToServer(text);
    };

    recognitionInstance.onerror = (event) => {
      console.error("음성 인식 오류:", event.error);
      alert("음성 인식 중 문제가 발생했습니다. 다시 시도해주세요.");
      stopRecording();
    };

    recognitionInstance.onend = () => {
      setIsRecording(false);
      console.log("녹음 종료");
    };

    recognitionInstance.start();
    setRecognition(recognitionInstance);
  };

  const stopRecording = () => {
    if (recognition) {
      recognition.stop();
      setIsRecording(false);
      setRecognition(null);
    }
  };

  const alertWithStopOption = async () => {
    const userInput = confirm("녹음 중입니다. 종료하려면 확인(OK)을 누르세요.");
    if (userInput) {
      stopRecording();
    }
  };

  const sendTranscriptionToServer = async (text) => {
    try {
      const response = await fetch("/api/recordings/transcription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          date,
          transcription: transcription + " " + text,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`서버 응답: ${data.message || "성공적으로 처리되었습니다."}`);
      } else {
        const error = await response.json();
        alert(`업로드 실패: ${error.message || "알 수 없는 오류"}`);
      }
    } catch (error) {
      console.error("서버 요청 오류:", error);
      alert("네트워크 오류가 발생했습니다. 다시 시도해주세요.");
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
        <FaMicrophone size="32px" color={isRecording ? "red" : "black"} />
        <Button
          className="skyblue"
          title="녹음"
          onClick={startRecording}
          disabled={isRecording}
        />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

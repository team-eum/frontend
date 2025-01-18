import {
  Wrap,
  FormWrap,
  LabelWrap,
  ContentWrap,
  ButtonWrap,
  Buttons,
} from "./styles";
import { useState } from "react";
import { fetchSignup } from "./lib/fetchSignup";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const options = [
  { value: "kiosk", label: "키오스크 사용법" },
  { value: "bank_app", label: "은행 앱 사용법" },
  { value: "smartphone_settings", label: "스마트폰 기본 설정 안내" },
  { value: "messaging", label: "문자메시지 및 카카오톡 사용법" },
  { value: "online_shopping", label: "온라인 쇼핑몰 이용법" },
  { value: "transportation_app", label: "교통 앱 사용법" },
  { value: "video_call", label: "영상통화 및 화상회의 사용법" },
  { value: "health_app", label: "건강 관리 앱 사용법" },
  { value: "photo_sharing", label: "사진 및 동영상 저장 및 공유 방법" },
  { value: "web_search", label: "인터넷 검색 및 웹사이트 이용법" },
  { value: "qr_code", label: "QR코드 스캔 및 인증서 발급 방법" },
  { value: "online_services", label: "온라인 행정 서비스" },
  { value: "youtube", label: "유튜브 시청 및 구독 방법" },
  { value: "music_streaming", label: "음악 스트리밍 앱 사용법" },
  { value: "data_management", label: "스마트폰 데이터 관리 및 정리 방법" },
  {
    value: "online_hospital",
    label: "온라인 병원 예약 및 처방전 관리 앱 사용법",
  },
  { value: "mobile_payment", label: "모바일 결제 및 간편결제 서비스 사용법" },
  { value: "screenshot", label: "화면 캡처 및 스크린샷 활용 방법" },
  { value: "weather_app", label: "날씨 앱 및 미세먼지 정보 확인 방법" },
  { value: "ebook_app", label: "전자책 앱 이용법 및 도서 검색" },
];

export function JobBox({ theme, setTheme, info, setInfo }) {
  const [text, setText] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };
  const navigate = useNavigate();
  const handleBack = () => {
    setTheme(theme - 1);
  };
  const handleSubmit = async () => {
    if (selectedOptions.length === 0) {
      alert("데이터를 입력하세요");
      return;
    }
    const updatedCategory = selectedOptions.map((option) => option.label);

    // Update region, gender
    setInfo((previnfo) => ({ ...previnfo, category: updatedCategory }));
    // console.log(response);
    // if (response.data && response.data.token) {
    //   localStorage.setItem('jwtToken', response.data.token);
    // }
    // navigate("/login");
    setTheme(4);
  };
  return (
    <Wrap>
      <FormWrap>
        <ContentWrap>
          <LabelWrap>직업</LabelWrap>
          <Select
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            placeholder="검색하세요..."
          />
        </ContentWrap>
        <Buttons>
          <ButtonWrap onClick={handleBack}>뒤로</ButtonWrap>
          <ButtonWrap onClick={handleSubmit}>가입하기</ButtonWrap>
        </Buttons>
      </FormWrap>
    </Wrap>
  );
}

import React, { useState } from "react";
import styled from "styled-components";

// Styled Components 정의
const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const SuggestionList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
  z-index: 1000;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f9f9f9;
  }
`;

function SearchBox() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
  // 예시 데이터
  const data = [
    "소프트웨어 엔지니어",
    "데이터 사이언티스트",
    "프로덕트 매니저",
    "그래픽 디자이너",
    "기계 엔지니어",
    "마케팅 전문가",
    "비즈니스 분석가",
    "인사 관리자",
    "웹 개발자",
    "사이버 보안 분석가",
    "디지털 마케팅 전문가",
    "UX/UI 디자이너",
    "모바일 앱 개발자",
    "네트워크 엔지니어",
    "회계사",
    "영업 대표",
    "프로젝트 매니저",
    "전기 엔지니어",
    "콘텐츠 제작자",
    "교사",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // 입력값에 따라 필터링
    if (value.trim() === "") {
      setSuggestions([]);
    } else {
      const filteredSuggestions = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // 선택된 항목을 입력창에 표시
    setSuggestions([]); // 목록 숨기기
  };

  return (
    <Container>
      {/* 입력창 */}
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />

      {/* 자동완성 목록 */}
      {suggestions.length > 0 && (
        <SuggestionList>
          {suggestions.map((item, index) => (
            <SuggestionItem
              key={item} // 고유한 값인 item 자체를 key로 사용
              onClick={() => handleSuggestionClick(item)}
            >
              {item}
            </SuggestionItem>
          ))}
        </SuggestionList>
      )}
    </Container>
  );
}

export default SearchBox;

import React from "react";
import {
  Wrap,
  FormWrap,
  LabelWrap,
  InputWrap,
  ContentWrap,
  ButtonWrap,
  ToggleWrap,
  Buttons
} from "./styles";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
const ListWrap = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
`;
export function Datebox({ theme, setTheme, info, setInfo }) {
  const handleSubmit = () => {
    // Update region, gender
    setInfo((prevInfo) => ({
      ...prevInfo,
      job: info.job,
    }));
  };
  const handleBack = () => {
    setTheme(theme-1);
  }
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [timeList, setTimeList] = useState([]);

  const formatDayOfWeek = (date) => {
    console.log(date);
    const options = { weekday: "short" }; // 요일을 짧게 출력: "Mon", "Tue", "Wed"

    return date.toLocaleDateString("ko-KR", options); // "월", "화", "수" 등
  };

const formatTime = (date) => {
  const options = { hour: "2-digit", minute: "2-digit" };
  return date.toLocaleTimeString("ko-KR", options); // 시간 형식: "14:00"
};

  const handleAddTimeRange = () => {
    if (selectedDate && startTime && endTime) {
      const startDateTime = new Date(`${selectedDate}T${startTime}`);
      const endDateTime = new Date(`${selectedDate}T${endTime}`);

      setTimeList((prevList) => [...prevList, { startDateTime, endDateTime }]);
      setSelectedDate("");
      setStartTime("");
      setEndTime("");
    } else {
      alert("날짜와 시간을 모두 선택해주세요.");
    }
  };
  console.log(timeList);
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // YYYY-MM-DD 형식
    setSelectedDate(formattedDate); // 현재 날짜를 기본값으로 설정
  }, []);
  console.log(startTime, endTime);

  return (
    <Wrap>
      <FormWrap>
        <ContentWrap>
          <LabelWrap>날짜</LabelWrap>
          <InputWrap
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </ContentWrap>
        <ContentWrap>
          <LabelWrap>시작 시간</LabelWrap>
          <InputWrap
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </ContentWrap>
        <ContentWrap>
          <LabelWrap>종료 시간</LabelWrap>
          <InputWrap
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </ContentWrap>
        <ButtonWrap onClick={handleAddTimeRange}>날짜 추가</ButtonWrap>

        <ListWrap>
          {timeList.length > 0 ? (
            timeList.map((item, index) => (
              <ListItem key={index}>
                {formatDayOfWeek(item.startDateTime)}{" "}
                {formatTime(item.startDateTime)} -
                {formatTime(item.endDateTime)}
              </ListItem>
            ))
          ) : (
            <p>추가된 날짜가 없습니다.</p>
          )}
        </ListWrap>
        <ButtonWrap onClick={handleSubmit}>완료</ButtonWrap>
        <Buttons>
        
                      <ButtonWrap onClick={handleBack}>뒤로</ButtonWrap>
                      <ButtonWrap onClick={handleSubmit}>다음</ButtonWrap>
                      </Buttons>
      </FormWrap>
    </Wrap>
  );
}

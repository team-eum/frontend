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
import axios from "axios";
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
  display: flex;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;
export function Datebox() {

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

      setTimeList((prevList) => [...prevList, { start:startDateTime, end:endDateTime }]);
      setSelectedDate("");
      setStartTime("");
      setEndTime("");
    } else {
      alert("날짜와 시간을 모두 선택해주세요.");
    }
  };
  console.log(timeList);
  async function handleSubmit (){
    await axios.post('https://prod.eum-backend.scdn.pw/appointment', timeList,{
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
      }});
  }
  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0]; // YYYY-MM-DD 형식
    setSelectedDate(formattedDate); // 현재 날짜를 기본값으로 설정
  }, []);
  console.log(startTime, endTime);
  const handleDelete = (index) => {
    const newTimeList = timeList.filter((_, i) => i !== index);  // 해당 인덱스를 제외한 새로운 배열 생성
    setTimeList(newTimeList);  // 상태 업데이트
  };
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
                {formatDayOfWeek(item.start)}{" "}
                {formatTime(item.start)} -
                {formatTime(item.end)}
                <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px', color: 'red' }}>
              x
            </button>
              </ListItem>
            ))
          ) : (
            <p>추가된 날짜가 없습니다.</p>
          )}
        </ListWrap>
        <ButtonWrap onClick={handleSubmit}>완료</ButtonWrap>
        <Buttons>

                      </Buttons>
      </FormWrap>
    </Wrap>
  );
}


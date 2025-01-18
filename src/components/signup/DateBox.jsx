import React from "react";
import {
  Wrap,
  FormWrap,
  LabelWrap,
  InputWrap,
  ContentWrap,
  ButtonWrap,
  ToggleWrap,
} from "./styles";
import SearchBox from "./JobBox/SearchBox";

export function Datebox({ theme, setTheme, info, setInfo }) {
  const handleSubmit = () => {
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        job: info.job,
      }));
  };
  return (
    <Wrap>
      <FormWrap>
        <ContentWrap>
          <LabelWrap>일정을 입력해주세요!</LabelWrap>
          <SearchBox />
        </ContentWrap>
        <ButtonWrap onClick={handleSubmit}>완료</ButtonWrap>
      </FormWrap>
    </Wrap>
  );
}

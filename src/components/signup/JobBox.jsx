import {
  Wrap,
  FormWrap,
  LabelWrap,
  InputWrap,
  ContentWrap,
  ButtonWrap,
  BackWrap,
  ToggleWrap,
  Buttons
} from "./styles";
import SearchBox from "./JobBox/SearchBox";
import {useState} from 'react';

export function JobBox({ theme, setTheme, info, setInfo }) {
  const [text, setText] = useState('');
  const handleBack = () => {
    setTheme(theme-1);
  }
  const handleSubmit = () => {
    if (text === ''){
      alert('데이터를 입력하세요')
      return;
    }
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        job: text,
      }));
      setTheme(4);
  };
  return (
    <Wrap>
      <FormWrap>
        <ContentWrap>
          <LabelWrap>직업</LabelWrap>
          <SearchBox text={text} setText={setText}/>
        </ContentWrap>
      <Buttons>

              <ButtonWrap onClick={handleBack}>뒤로</ButtonWrap>
              <ButtonWrap onClick={handleSubmit}>다음</ButtonWrap>
              </Buttons>
      </FormWrap>
    </Wrap>
  );
}

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
import {fetchSignup} from './lib/fetchSignup'

export function JobBox({ theme, setTheme, info, setInfo }) {
  const [text, setText] = useState('');
  const handleBack = () => {
    setTheme(theme-1);
  }
  const handleSubmit = async () => {
    if (text === ''){
      alert('데이터를 입력하세요')
      return;
    }
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        category: text,
      }));

      setTheme(4);
      await fetchSignup(info)
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
              <ButtonWrap onClick={handleSubmit}>가입하기</ButtonWrap>
              </Buttons>
      </FormWrap>
    </Wrap>
  );
}

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

export function JobBox({ theme, setTheme, info, setInfo }) {
  const handleSubmit = () => {
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        job: info.job,
      }));
      setTheme(4);
  };
  return (
    <Wrap>
      <FormWrap>
        <ContentWrap>
          <LabelWrap>직업</LabelWrap>
          <SearchBox />
        </ContentWrap>
        <ButtonWrap onClick={handleSubmit}>다음</ButtonWrap>
      </FormWrap>
    </Wrap>
  );
}

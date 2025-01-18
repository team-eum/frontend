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

export function SignBox({ theme, setTheme, info, setInfo }) {
  const handleBack = () => {
    setTheme(1);
  }
  const handleSubmit = () => {
    if (theme === 1) {
      if (info.username === '' || info.password === '' || info.birth === null){
        alert('데이터를 입력하세요')
        return;
      }
      // Update name, birth, phone
      setInfo((prevInfo) => ({
        ...prevInfo,
        username: info.username,
        password: info.password,
        birth: info.birth,
      }));
      setTheme(2);
    } else if (theme === 2) {
      if (info.region === '' || info.gender === '' || info.phone === ''){
        alert('데이터를 입력하세요')
        return;
      }
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        phone: info.phone,
        gender: info.gender,
      }));
      setTheme(3);

    }
  };
  return (
    <Wrap>
      <FormWrap>
        <img src="" />
        <ContentWrap>
          <LabelWrap>{theme === 1 ? "아이디" : "전화번호"}</LabelWrap>
          <InputWrap
            maxLength={20}
            // onKeyUp={props.onKeyUp}
            onChange={(e) => {
              if (theme === 1) {
                setInfo((prevInfo) => ({ ...prevInfo, username: e.target.value }));
              } else {
                setInfo((prevInfo) => ({
                  ...prevInfo,
                  phone: e.target.value,
                }));
              }
            }}
            value={theme === 1 ? info.username : info.phone}
          ></InputWrap>
        </ContentWrap>
       
        <ContentWrap>
          <LabelWrap>{theme === 1 ? "비밀번호" : "이름"}</LabelWrap>
          <InputWrap
            maxLength={20}
            // onKeyUp={props.onKeyUp}
            onChange={(e) => {
              theme === 1? (
                setInfo((prevInfo) => ({ ...prevInfo, password: e.target.value }))):
                setInfo((prevInfo) => ({ ...prevInfo, name: e.target.value }))
            }}
            type={`${theme === 1 ?'password':'name'}`}
            value={theme === 1? info.password: info.name}
          ></InputWrap>
        </ContentWrap>
        {(theme === 1) &&
        (<ContentWrap>
          <LabelWrap>지역</LabelWrap>
          <InputWrap
            maxLength={20}
            // onKeyUp={props.onKeyUp}
            onChange={(e) => {
                setInfo((prevInfo) => ({ ...prevInfo, area: e.target.value }))
            }}
            type='name'
            value={info.area}
          ></InputWrap>
        </ContentWrap>)}
        <ContentWrap>
          <LabelWrap>{theme === 1 ? "나이" : "성별"}</LabelWrap>
          {theme === 1 && (
            <InputWrap
              type="date"
              onChange={(e) => {

                if (theme === 1) {
                  setInfo((prevInfo) => ({ ...prevInfo, birth: e.target.value }));
                }
              }}
            ></InputWrap>
          )}
          {theme === 2 && (
            <ToggleWrap>
              <ButtonWrap
                style={{
                  backgroundColor: info.gender === "M" ? "#5DADEC" : "#FFF",
                  color: info.gender === "M" ? "#FFF" : "#000",
                }}
                onClick={() =>
                  setInfo((prevInfo) => ({ ...prevInfo, gender: "M" }))
                }
              >
                남성
              </ButtonWrap>
              <ButtonWrap
                style={{
                  backgroundColor: info.gender === "F" ? "#5DADEC" : "#FFF",
                  color: info.gender === "F" ? "#FFF" : "#000",
                }}
                onClick={() =>
                  setInfo((prevInfo) => ({ ...prevInfo, gender: "F" }))
                }
              >
                여성
              </ButtonWrap>
            </ToggleWrap>
          )}
        </ContentWrap>
 
        <Buttons>
          {
            (theme !== 1) &&
        (<ButtonWrap onClick={handleBack}>뒤로</ButtonWrap>)
          }
        <ButtonWrap onClick={handleSubmit}>다음</ButtonWrap>
        </Buttons>
      </FormWrap>
    </Wrap>
  );
}

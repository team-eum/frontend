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
      if (info.id === '' || info.password === '' || info.age === null){
        alert('데이터를 입력하세요')
        return;
      }
      // Update name, age, phoneNumber
      setInfo((prevInfo) => ({
        ...prevInfo,
        id: info.id,
        password: info.password,
        age: info.age,
      }));
      setTheme(2);
    } else if (theme === 2) {
      if (info.region === '' || info.gender === '' || info.phoneNumber === ''){
        alert('데이터를 입력하세요')
        return;
      }
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        phoneNumber: info.phoneNumber,
        gender: info.gender,
        region: info.region,
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
                setInfo((prevInfo) => ({ ...prevInfo, id: e.target.value }));
              } else {
                setInfo((prevInfo) => ({
                  ...prevInfo,
                  phoneNumber: e.target.value,
                }));
              }
            }}
            value={theme === 1 ? info.id : info.phoneNumber}
          ></InputWrap>
        </ContentWrap>
       
        <ContentWrap>
          <LabelWrap>{theme === 1 ? "비밀번호" : "지역"}</LabelWrap>
          <InputWrap
            maxLength={20}
            // onKeyUp={props.onKeyUp}
            onChange={(e) => {
              if (theme === 1) {
                setInfo((prevInfo) => ({ ...prevInfo, password: e.target.value }));
              } else {
                setInfo((prevInfo) => ({
                  ...prevInfo,
                  region: e.target.value,
                }));
              }
            }}
            type={`${theme === 1? 'password': 'text'}`}
            value={theme === 1 ? info.password : info.region}
          ></InputWrap>
        </ContentWrap>
        <ContentWrap>
          <LabelWrap>{theme === 1 ? "나이" : "성별"}</LabelWrap>
          {theme === 1 && (
            <InputWrap
              type="date"
              onChange={(e) => {
                if (theme === 1) {
                  setInfo((prevInfo) => ({ ...prevInfo, age: e.target.value }));
                }
              }}
            ></InputWrap>
          )}
          {theme === 2 && (
            <ToggleWrap>
              <ButtonWrap
                style={{
                  backgroundColor: info.gender === "남성" ? "#5DADEC" : "#FFF",
                  color: info.gender === "남성" ? "#FFF" : "#000",
                }}
                onClick={() =>
                  setInfo((prevInfo) => ({ ...prevInfo, gender: "남성" }))
                }
              >
                남성
              </ButtonWrap>
              <ButtonWrap
                style={{
                  backgroundColor: info.gender === "여성" ? "#5DADEC" : "#FFF",
                  color: info.gender === "여성" ? "#FFF" : "#000",
                }}
                onClick={() =>
                  setInfo((prevInfo) => ({ ...prevInfo, gender: "여성" }))
                }
              >
                여성
              </ButtonWrap>
            </ToggleWrap>
          )}
        </ContentWrap>
        {theme === 1 && (
        <ContentWrap>
          <LabelWrap>{theme === 1 &&  "이름" }</LabelWrap>
          <InputWrap
            maxLength={20}
            // onKeyUp={props.onKeyUp}
            onChange={(e) => {
        
                setInfo((prevInfo) => ({ ...prevInfo, name: e.target.value }));
        
            }}
            value={info.name}
          ></InputWrap>
        </ContentWrap>
        )}
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

import {
  Wrap,
  FormWrap,
  LabelWrap,
  InputWrap,
  ContentWrap,
  ButtonWrap,
  ToggleWrap,
} from "./styles";

export function SignBox({ theme, setTheme, info, setInfo }) {
  const handleSubmit = () => {
    if (theme === 1) {
      // Update name, age, phoneNumber
      setInfo((prevInfo) => ({
        ...prevInfo,
        name: info.name,
        age: info.age,
        phoneNumber: info.phoneNumber,
      }));
      setTheme(2);
    } else if (theme === 2) {
      // Update region, gender
      setInfo((prevInfo) => ({
        ...prevInfo,
        region: info.region,
        gender: info.gender,
      }));
      setTheme(3);

    }
  };
  return (
    <Wrap>
      <FormWrap>
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
        <ButtonWrap onClick={handleSubmit}>다음</ButtonWrap>
      </FormWrap>
    </Wrap>
  );
}

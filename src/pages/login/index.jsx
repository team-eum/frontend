import { useState } from "react";

import {
  Wrap,
  FormWrap,
  LabelWrap,
  InputWrap,
  ContentWrap,
  ButtonWrap,
  KakaoButtonWrap,
  SignUpButton
} from "./styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
export async function fetchLogin(data) {
  const response = await axios.post("https://prod.eum-backend.scdn.pw/user/signin", data);
  
}
function Login() {
  const navigate = useNavigate();
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const handleSubmit = async () => {
    // Update region, gender
    await fetchLogin(info);
  };
  const handleKakaoSubmit = () => {
    // Update region, gender
    console.log(info);
  };
  return (
    <>
      <Wrap>
        <FormWrap>
          <ContentWrap>
            <LabelWrap>아이디 </LabelWrap>
            <InputWrap
              maxLength={20}
              // onKeyUp={props.onKeyUp}
              onChange={(e) => {
                setInfo((prevInfo) => ({ ...prevInfo, username: e.target.value }));
              }}
              value={info.username}
            ></InputWrap>
          </ContentWrap>
          <ContentWrap>
            <LabelWrap>비밀번호</LabelWrap>
            <InputWrap
              maxLength={10}
              // onKeyUp={props.onKeyUp}
              onChange={(e) => {
                setInfo((prevInfo) => ({
                  ...prevInfo,
                  password: e.target.value,
                }));
              }}
              value={info.password}
              type="password"
            ></InputWrap>
          </ContentWrap>
          <ButtonWrap onClick={handleSubmit}>로그인</ButtonWrap>
          <KakaoButtonWrap onClick={handleKakaoSubmit}>카카오 로그인</KakaoButtonWrap>
          <SignUpButton onClick={() => navigate('/signup')}>회원가입</SignUpButton>
        </FormWrap>
      </Wrap>
    </>
  );
}

export default Login;

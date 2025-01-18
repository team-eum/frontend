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
import { useUser } from "../../domain/UserContext";

function Login() {
  const [info, setInfo] = useState({
    username: "",
    password: "",
  });
  const navigate =  useNavigate()
  const {login} = useUser();
  const handleSubmit = async () => {
    try {
    // Update region, gender
    await login(info.username,info.password);
    navigate('/');
    } catch(error) {
      console.error(error);
    }
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

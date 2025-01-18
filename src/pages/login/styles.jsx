import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #FBFBFB;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const FormWrap = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 360px;
  background-color: white;
  border: 1px solid #b3b3b3;
  border-radius: 16px;
  box-sizing: border-box;
`;
export const LabelWrap = styled.div`
  width: 100%;
  display: flex;
`;
export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const InputWrap = styled.input`
  width: 100%;
  padding: 16px 24px;
  border: 1px solid #b3b3b3;
  border-radius: 16px;
  box-sizing: border-box;
`;
export const ButtonWrap = styled.div`
  width: 100%;
  background-color:#5DADEC;
  border-radius: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor:pointer;
  color: white;
  display: flex;
  justify-content: center;
`;
export const KakaoButtonWrap = styled.div`
   width: 100%;
  background-color: #FEE500;
  border-radius: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor:pointer;
  color: white;
  display: flex;
  justify-content: center;
  color: black;
`
export const SignUpButton = styled.div`
  color: blue;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor:pointer;
`
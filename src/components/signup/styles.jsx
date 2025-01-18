import styled from "styled-components";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f3f3f3;
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
  max-width: 700px;
  width: 100%;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  box-sizing: border-box;
  background: #fbfbfb;
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
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  box-sizing: border-box;
`;
export const ButtonWrap = styled.div`
  width: 100%;
  background-color: #5dadec;
  border-radius: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
  color: white;
  margin-top: 24px;
`;
export const ToggleWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  justify-center: center;
`;

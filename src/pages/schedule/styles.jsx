import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  color: #432a00;
  flex-direction: column;
  background-position: center;
  text-align: right;
  align-items: center;
  justify-content: center;
  min-height: 250px;
  padding-top: 20px;
`;

export const TitleText = styled.h1`
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

export const SubText = styled.h3`
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 24px;
  font-weight: 400;
`;

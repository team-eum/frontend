import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fbfbfb;
`;

export const TextContainer = styled.div`
  display: flex;
  color: #432a00;
  flex-direction: column;
  background-position: center;
  justify-content: center;
  min-height: 250px;
  margin-top: 70px;
`;

export const TitleText = styled.h1`
  text-align: center;
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

export const SubTitleText = styled.h3`
  text-align: center;
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 28px;
  font-weight: 400;
  margin: 0;

  &.sub {
    color: rgba(67, 42, 0, 0.62);
  }
`;

export const SubText = styled.h3`
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 24px;
  font-weight: 400;
`;

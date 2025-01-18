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
  padding-top: 80px;
`;

export const TitleText = styled.h1`
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 48px;
  font-weight: 700;
  margin: 0;
`;

export const CreditContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; /* 세로 중앙 정렬 */
  padding: 45px 0;
  gap: 12px; /* 이미지와 텍스트 간격 */
`;

export const CreditText = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: #1e1e1e;
`;

export const CreditImage = styled.div`
  width: 48px;
  height: 48px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  flex-shrink: 0; /* 이미지 크기가 줄어들지 않도록 설정 */
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 18px 0;
`;

export const UserTitle = styled.div`
  padding: 0 20px;
  min-width: 100px;
  /* Heading */
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  /* identical to box height, or 29px */
  text-align: center;
  letter-spacing: -0.02em;

  color: #1e1e1e;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;
`;

export const UserDesc = styled.div`
  padding: 0 20px;
  min-width: 150px;
  /* Subheading */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 120%;
  /* identical to box height, or 24px */
  text-align: center;

  color: #1e1e1e;

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;
`;

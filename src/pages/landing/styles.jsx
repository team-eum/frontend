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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  padding: 20px 0;
`;

export const MainButton = styled.div`
  width: 250px;
  height: 250px;
  border: 1px solid #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &.blue {
    background: #c2e0f7;
  }

  &.white {
    background: #f5f5f5;
  }
`;

export const BtnImage = styled.div`
  width: 128px;
  height: 128px;
  margin-top: 20px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export const BtnText = styled.div`
  font-weight: 700;
  font-size: 26px;
  text-align: center;
  color: #000000;
`;

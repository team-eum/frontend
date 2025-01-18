import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fbfbfb;
  align-items: center;
  padding-bottom: 60px;
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
  display: flex;
  white-space: pre-wrap;
  font-size: 48px;
  font-weight: 700;
  margin: 0;

  .blue {
    color: #5dadec;
  }
`;

export const SubText = styled.h3`
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 24px;
  font-weight: 400;
`;

//script page style component

export const SubTitleText = styled.h3`
  width: 150px;
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  font-size: 25px;
  font-weight: 700;
`;

export const SummaryContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  gap: 50px;
  margin-bottom: 30px;
`;

export const SummaryText = styled.div`
  width: 60%;
  min-height: 200px;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid black;
`;
export const AllText = styled.div`
  width: 60%;
  min-height: 200px;
  max-height: 400px;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid black;
  overflow-y: auto;
`;
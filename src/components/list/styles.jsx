import styled from "styled-components";

export const Container = styled.div`
  width: calc(60%);
  height: 8vh;
  padding-left: 80px;
  padding-right: 10px;
  font-weight: 600;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 0.8px solid #432a00;
`;

export const TextContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 30px;
`;

export const KeywordContainer = styled.div`
  min-width: calc(40%);
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  background: #dfe8f0;
  border-radius: 15px;
  padding: 5px;
  border: 1px solid black;
`;

export const Text = styled.div`
  font-family: "Inter", sans-serif;
  white-space: pre-wrap;
  min-width: 200px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-right: 22px;
  gap: 10px;

  &.icon {
    align-items: center;
    gap: 15px;
  }
`;

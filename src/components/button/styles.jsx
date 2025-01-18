import styled from "styled-components";

export const StyledButton = styled.button`
  height: 35px;
  display: inline-block;
  text-align: center;
  overflow: hidden;
  padding: 0 20px;
  font-family: "Inter-Regular", Helvetica;
  font-weight: 400;
  font-size: 14px;
  border-radius: 8px;

  &.skyblue {
    background-color: #5dadec;
    border: 1px solid #5dadec;
    color: white;
  }

  &.grey {
    background-color: #f3f3f3;
    border: 1px solid #f3f3f3;
    color: black;
  }

  &.red {
    background-color: #d53d3d;
    border: 1px solid #d53d3d;
    color: white;
  }
`;

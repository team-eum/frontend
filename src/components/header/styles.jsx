import styled from "styled-components";

export const Container = styled.div`
  width: calc(100%);
  display: flex;
  justify-content: space-between;
  padding: 22px 0;
  border-bottom: 0.5px solid #d9d9d9;
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

export const LogoImage = styled.div`
  width: 205px;
  height: 38px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-left: 22px;
`;

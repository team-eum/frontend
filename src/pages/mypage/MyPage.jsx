import Button from "../../components/button/Button.jsx";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header.jsx";
import btn from "../../assets/MyPage_Icon.png";

import {
  Container,
  CreditContainer,
  TextContainer,
  TitleText,
  CreditImage,
  CreditText,
  UserTitle,
  UserContainer,
  UserDesc,
  ButtonContainer,
} from "./styles.jsx";
import { useUser } from "../../domain/UserContext.jsx";

function MyPage() {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  console.log(user);

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>{user.name || "user"}</TitleText>
      </TextContainer>
      {user.role == "J" ? (
        <CreditContainer>
          <CreditImage image={btn}></CreditImage>
          <CreditText>{user.credit} credit</CreditText>
        </CreditContainer>
      ) : (
        <></>
      )}

      <UserContainer>
        <UserTitle>생년월일</UserTitle>
        <UserDesc>{user.birth}</UserDesc>
      </UserContainer>
      <UserContainer>
        <UserTitle>지역</UserTitle>
        <UserDesc>{user.area}</UserDesc>
      </UserContainer>
      <UserContainer>
        <UserTitle>전화번호</UserTitle>
        <UserDesc>{user.phone}</UserDesc>
      </UserContainer>
      <UserContainer>
        <UserTitle>관심사</UserTitle>
        <UserDesc>{user.category}</UserDesc>
      </UserContainer>
      <ButtonContainer>
        <Button
          className="skyblue"
          title="일정 수정하기"
          onClick={() => navigate("/mypage/schedule")}
        />
        <Button
          className="red"
          title="로그아웃"
          onClick={async () => {
            await logout(user.name, user.password);
            navigate("/");
          }}
        />
      </ButtonContainer>
    </Container>
  );
}

export default MyPage;

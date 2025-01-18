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
} from "./styles.jsx";
import { useUser } from "../../domain/UserContext.jsx";

function MyPage() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>{user.name || "user"}</TitleText>
      </TextContainer>
      {user.role == "junior" ? (
        <CreditContainer>
          <CreditImage image={btn}></CreditImage>
          <CreditText>1 credit</CreditText>
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
      <Button
        className="skyblue"
        title="EUM 사용하러 가기"
        onClick={() => navigate("/login")}
      />
    </Container>
  );
}

export default MyPage;

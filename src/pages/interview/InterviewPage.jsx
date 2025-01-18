import { useEffect, useState } from "react";
import Header from "../../components/header/Header.jsx";
import ListItem from "../../components/list/InterviewItem.jsx";
import { Container, TextContainer, TitleText, SubText } from "./styles.jsx";
import { useUser } from "../../domain/UserContext.jsx";

function InterviewPage() {
  const { user, token } = useUser();
  const [appo, setAppo] = useState();

  useEffect(() => {
    const fetchInterview = async () => {
      if (!user) {
        console.log("user not logged in");
        return;
      }

      try {
        const response = await fetch(
          "https://prod.eum-backend.scdn.pw/appointment/mentors",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setAppo(data);
        console.log("success on fetch matching list");
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchInterview();
  }, [user, token]);

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>나의 면담 내역</TitleText>
        <SubText>녹음된 면담 내용을 확인하세요!</SubText>
      </TextContainer>
      {appo && appo.length > 0 ? (
        appo.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            keyword={item.keyword}
            date={`${item.date} - ${item.time}`}
          />
        ))
      ) : (
        <SubText>일정이 없습니다.</SubText>
      )}
    </Container>
  );
}

export default InterviewPage;

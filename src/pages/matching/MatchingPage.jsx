import { useEffect, useState } from "react";
import Header from "../../components/header/Header.jsx";
import ListItem from "../../components/list/MatchingItem.jsx";
import { Container, TextContainer, TitleText, SubText } from "./styles.jsx";
import { useUser } from "../../domain/UserContext.jsx";

function MatchingPage() {
  const { user, token } = useUser();
  const [appo, setAppo] = useState();

  useEffect(() => {
    const fetchMatching = async () => {
      if (!user) {
        console.log("user not logged in");
        return;
      }

      try {
        const response = await fetch(
          `${process.env.BASE_URL}/appointment?status=pending`,
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

    fetchMatching();
  }, [user, token]);

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>나의 매칭 목록</TitleText>
        <SubText>나에게 매칭된 멘토/멘티를 확인하세요!</SubText>
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

export default MatchingPage;

import { useState, useEffect } from "react";
import Header from "../../components/header/Header.jsx";
import ListItem from "../../components/list/ScheduleItem.jsx";
import { useUser } from "../../domain/UserContext.jsx";
import { Container, TextContainer, TitleText, SubText } from "./styles.jsx";

function SchedulePage() {
  const { user, token } = useUser();
  const [appo, setAppo] = useState();

  useEffect(() => {
    const fetchSchedule = async () => {
      if (!user) {
        console.log("user not logged in");
        return;
      }

      try {
        const response = await fetch(
          "https://prod.eum-backend.scdn.pw/appointment?status=accepted",
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
        console.log("success on fetch schedule list");
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };

    fetchSchedule();
  }, [user, token]);

  return (
    <Container>
      <Header />
      <TextContainer>
        <TitleText>나의 일정 목록</TitleText>
        <SubText>확정된 일정을 확인하세요!</SubText>
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

export default SchedulePage;

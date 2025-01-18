import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import {
  ButtonContainer,
  Container,
  KeywordContainer,
  Text,
  TextContainer,
} from "./styles";

function ListItem(props) {
  const { name, keyword, date } = props;
  //const { user } = useUser();
  const navigate = useNavigate();

  return (
    <Container>
      <TextContainer>
        <Text>{name}</Text>
        <KeywordContainer>{keyword}</KeywordContainer>
        <Text>{date}</Text>
      </TextContainer>
      <ButtonContainer>
        <Button
          className="skyblue"
          title="면담 확정"
          onClick={() => navigate("/login")}
        />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

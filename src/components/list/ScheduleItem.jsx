import Button from "../button/Button";
import { FaMicrophone } from "react-icons/fa";
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

  return (
    <Container>
      <TextContainer>
        <Text>{name}</Text>
        <KeywordContainer>{keyword}</KeywordContainer>
        <Text>{date}</Text>
      </TextContainer>
      <ButtonContainer>
        {/* todo : onclick으로 모달 창 */}
        <FaMicrophone size="32px" />
        <Button className="skyblue" title="녹음" onClick={() => {}} />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

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

  return (
    <Container>
      <TextContainer>
        <Text>{name}</Text>
        <KeywordContainer>{keyword}</KeywordContainer>
        <Text>{date}</Text>
      </TextContainer>
      <ButtonContainer>
        {/* todo : onclick으로 모달 창 */}
        <Button className="skyblue" title="면담 확정" onClick={() => {}} />
      </ButtonContainer>
    </Container>
  );
}

export default ListItem;

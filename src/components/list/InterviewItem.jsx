import { InterviewContainer, Text } from "./styles";

function ListItem(props) {
  const { name, date } = props;

  return (
    <InterviewContainer onClick={() => {}}>
      <Text>{name}</Text>
      <Text>{date}</Text>
    </InterviewContainer>
  );
}

export default ListItem;

import { Container, List, Button, ListItem } from "./styles";

const Listin = ({ data, onItemClick }) => {
  return (
    <Container>
      <List>
        {data.map((item) => (
          <ListItem key={item.id} onClick={() => onItemClick(item.name)}>
            {item.name} - {item.age} años
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Listin;

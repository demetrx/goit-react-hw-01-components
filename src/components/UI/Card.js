import { CardStyled } from './Card.styled';

const Card = props => {
  return <CardStyled>{props.children}</CardStyled>;
};

export default Card;

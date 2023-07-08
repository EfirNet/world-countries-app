import PropTypes from 'prop-types';
import {
  Wrapper,
  CardImage,
  CardBody,
  CardTitle,
  CardList,
  CardListItem,
} from './Card.styled';

const Card = ({ img, name, info = [], onClick }) => {
  const country =
    name === 'Russian Federation' ? 'Russia is a Terrorist state' : name;
  return (
    <Wrapper onClick={onClick}>
      <CardImage src={img} alt={country} />
      <CardBody>
        <CardTitle>{country}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <b>{el.title}:</b> {el.description || 'N/A'}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

Card.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  info: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
      ]),
    })
  ).isRequired,
};

export default Card;

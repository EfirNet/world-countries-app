import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNeighbors } from '../../store/details/details-selector';
import { loadNeighborsByBorder } from '../../store/details/details-actions';
import {
  Wrapper,
  InfoImage,
  InfoTitle,
  ListGroup,
  List,
  ListItem,
  Meta,
  TagGroup,
  Tag,
} from './Info.styled';

const Info = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies = [],
    languages = [],
    borders = [],
    push,
  } = props;

  const updatedBorders = borders.map((border) =>
    border === 'RUS' ? 'Russia is a Terrorist state' : border
  );

  const dispatch = useDispatch();

  const neighbors = useSelector(selectNeighbors);

  useEffect(() => {
    if (updatedBorders.length) {
      dispatch(loadNeighborsByBorder(updatedBorders));
    }
  }, [updatedBorders, dispatch]);

  const country =
    name === 'Russian Federation' ? 'Russia is a Terrorist state' : name;
  return (
    <Wrapper>
      <InfoImage src={flag} alt={country} />

      <div>
        <InfoTitle>{country}</InfoTitle>
        <ListGroup>
          <List>
            <ListItem>
              <b>Native Name:</b> {nativeName}
            </ListItem>
            <ListItem>
              <b>Population:</b> {population}
            </ListItem>
            <ListItem>
              <b>Region:</b> {region}
            </ListItem>
            <ListItem>
              <b>Sub Region:</b> {subregion}
            </ListItem>
            <ListItem>
              <b>Capital:</b> {capital}
            </ListItem>
          </List>
          <List>
            <ListItem>
              <b>Top Level Domain: </b>
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </ListItem>
            <ListItem>
              <b>Currency: </b>
              {currencies.map((c) => (
                <span key={c.code}>{c.country} </span>
              ))}
            </ListItem>
            <ListItem>
              <b>languages: </b>
              {languages.map((l) => (
                <span key={l.country}>{l.country}</span>
              ))}
            </ListItem>
          </List>
        </ListGroup>
        <Meta>
          <b>Border Countries: </b>
          {!updatedBorders.length ? (
            <span>There is no border countries</span>
          ) : (
            <TagGroup>
              {neighbors.map((countryName) => (
                <Tag
                  key={countryName}
                  onClick={() => push(`/country/${countryName}`)}
                >
                  {countryName}
                </Tag>
              ))}
            </TagGroup>
          )}
        </Meta>
      </div>
    </Wrapper>
  );
};

Info.propTypes = {
  name: PropTypes.string.isRequired,
  nativeName: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  capital: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  topLevelDomain: PropTypes.arrayOf(PropTypes.string).isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      symbol: PropTypes.string.isRequired,
    })
  ),
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      iso639_1: PropTypes.string.isRequired,
      iso639_2: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      nativeName: PropTypes.string.isRequired,
    })
  ),
  borders: PropTypes.arrayOf(PropTypes.string).isRequired,
  push: PropTypes.func.isRequired,
};

export default Info;

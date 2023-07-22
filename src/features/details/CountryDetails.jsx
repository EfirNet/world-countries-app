import PropTypes from 'prop-types';

import { Info } from './Info';
import { useDetails } from './use-details';

const CountryDetails = ({ name = '', navigate }) => {
  const { status, error, currentCountry } = useDetails(name);

  if (!currentCountry) {
    return <h2>Error! No such country was found</h2>;
  }

  return (
    <>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <Info push={navigate} {...currentCountry} />}
    </>
  );
};

CountryDetails.propTypes = {
  name: PropTypes.string,
  navigate: PropTypes.func,
};

export { CountryDetails };

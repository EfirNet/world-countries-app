import PropTypes from 'prop-types';

import { CustomSelectStyled } from './styled/CustomSelect.styled';

export const CustomSelect = (props) => {
  return <CustomSelectStyled {...props} />;
};

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  isClearable: PropTypes.bool,
  isSearchable: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};

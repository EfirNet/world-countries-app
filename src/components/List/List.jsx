import PropTypes from 'prop-types';

import { Wrapper } from './List.style';

const List = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

List.propTypes = {
  children: PropTypes.node.isRequired,
};

export { List };

import PropTypes from 'prop-types';

import { Container } from '../Container';
import { Wrapper } from './Main.styled';

const Main = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Main };

import { Container } from '../Container';
import { HeaderEl, Wrapper, Title } from './Header.styled';
import { useCleanup } from '../../features/controls/hooks';
import { ThemeSwitcher } from '../../features/theme/ThemeSwitcher';

export const Header = () => {
  const cleanUp = useCleanup();

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ThemeSwitcher />
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

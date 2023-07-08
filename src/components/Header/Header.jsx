import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import Container from '../Container';
import { HeaderEl, Wrapper, Title, ModeSwitcher } from './Header.styled';
import { setTheme } from '../../store/theme/theme-actions';
import { clearControls } from '../../store/controls/controls-actions';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const toggleTheme = () =>
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  const cleanUp = () => dispatch(clearControls());

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title onClick={cleanUp}>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? (
              <IoMoonOutline size="14px" />
            ) : (
              <IoMoon size="14px" />
            )}
            <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;

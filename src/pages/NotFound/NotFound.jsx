import {
  NotFoundContainer,
  NotFoundContent,
  NotFound404,
  NotFoundTitle,
  NotFoundSubtitle,
  NotFoundLink,
} from './NotFound.styled';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFound404>
          <NotFoundTitle>404</NotFoundTitle>
          <NotFoundSubtitle>Page not found</NotFoundSubtitle>
        </NotFound404>
        <NotFoundLink to="/">Homepage</NotFoundLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export {NotFound};

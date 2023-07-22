import { IoSearch } from 'react-icons/io5';

import { useSearch } from './hooks';
import { Input, InputContainer } from './styled';

export const Search = () => {
  const [search, handleSearch] = useSearch();

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  );
};

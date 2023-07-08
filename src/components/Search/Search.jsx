import { IoSearch } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearch } from '../../store/controls/controls-selectors';
import { setSearch } from '../../store/controls/controls-actions';
import { Input, InputContainer } from './Search.styled';

const Search = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <InputContainer>
      <IoSearch />
      <Input onChange={handleSearch} value={search} />
    </InputContainer>
  );
};

export default Search;

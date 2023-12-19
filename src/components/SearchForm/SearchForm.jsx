import { IoSearchOutline } from 'react-icons/io5';
import { Button, Form, Input } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const handleSearch = e => {
    e.preventDefault();

    onSubmit(e.target.search.value);

    e.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSearch}>
      <div>
        <Input
          type="text"
          name="search"
          required
          autoComplete="off"
          placeholder="Search movie"
        />
      </div>
      <Button type="submit">
        <IoSearchOutline stroke="#fff" size={30} />
      </Button>
    </Form>
  );
};

export default SearchForm;

import { useState } from "react"
import toast from "react-hot-toast";

const SearchBar = ({onSubmit}) => {
const [query, setQuery] = useState('');

const handleChange = (e) => {
  setQuery(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (query.trim() === '') {
    toast.error('Please, enter a search term');
    return;
  }
  onSubmit(query.trim());
  setQuery('');
};

  return (
    <header>
  <form onSubmit={onSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
  )
}

export default SearchBar

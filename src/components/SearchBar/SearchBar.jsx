
import toast from "react-hot-toast";

const SearchBar = ({ query, onSubmit, handleQueryChange }) => {

  const handleChange = (e) => {
    handleQueryChange(e.target.value); // Handles the text input change
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the page from reloading
    if (query.trim() === '') {
      toast.error('Please, enter a search term'); // Validates the input for empty value
      return;
    }
    onSubmit(query.trim()); // Calls the onSubmit function with the input value
   handleQueryChange(''); // Clears the input field after form submission
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query} // Binds the input value to the state
          onChange={handleChange} // Calls handleChange on text input change
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

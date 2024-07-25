
import toast from "react-hot-toast";
import styles from './SearchBar.module.css';

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
    <header className={styles.searchBar}>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query} // Binds the input value to the state
          onChange={handleChange} // Calls handleChange on text input change
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;

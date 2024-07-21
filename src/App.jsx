import './App.css';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
const [searchQuery, setSearchQuery] = useState('');

useEffect(() => { if (!query) return; }, [query, page]);

const handleSearchSubmit = () => {

}

  return (
    <div>
      <LoadMoreBtn />
      <SearchBar />
      <ImageGallery />
      <Loader />
      <ErrorMessage />
      <ImageModal />
    </div>
  );
}

export default App;

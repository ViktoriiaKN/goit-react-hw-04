import './App.css';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageModal from './components/ImageModal/ImageModal';
import { useEffect, useState } from 'react';
import { fetcImages } from './services/api';

function App() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [modalImage, setModalImage] = useState(null);

  const handleSearch = async (seachQuery) => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetcImages(seachQuery);
      setImages(data.results);
      setPage(1);
    } catch (error) {
      if(error.response && error.response.status === 403) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleQueryChange = (newQuery) => {
    setQuery(newQuery);
  };

  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const data = await fetcImages(query, 5, page + 1);
      setImages((prevImages) => [...prevImages, ...data.results]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      if(error.response && error.response.status === 403) {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    if (query) {
      handleSearch(query);
    }
  }, [query]);

  return (
    <div>
      <SearchBar
        query={query}
        onSubmit={handleSearch}
        handleQueryChange={handleQueryChange}
      />
      {loading && <Loader />}
      {error && <ErrorMessage error={error}/>}
      {images.length > 0 && (
        <ImageGallery images={images} handleImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {modalImage && (
        <ImageModal modalImage={modalImage} closeModal={closeModal} />
      )}
    </div>
  );
}

export default App;

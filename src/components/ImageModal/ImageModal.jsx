import ReactModal from "react-modal";
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root'); 

const ImageModal = ({image, closeModal}) => {
if(!image) return null; // If no image is provided, return nothing

return (
  <ReactModal
    isOpen={!!image} // Open modal if an image is provided
    onRequestClose={closeModal} // Close modal when the request to close is made
    contentLabel="Image Modal" // Label for screen readers
    className={styles.modal}
    overlayClassName={styles.overlay}
  >
    <div>
      <button onClick={closeModal} className={styles.closeButton}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description} className={styles.image} />
      <p>{image.description || 'No description'}</p>
      <p>By {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </div>
  </ReactModal>
);
};

export default ImageModal

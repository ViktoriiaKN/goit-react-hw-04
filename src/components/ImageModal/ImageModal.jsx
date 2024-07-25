import ReactModal from "react-modal";
import styles from './ImageModal.module.css';

ReactModal.setAppElement('#root'); 

const ImageModal = ({modalImage, closeModal}) => {
if(!modalImage) return null; // If no image is provided, return nothing

return (
  <ReactModal
    isOpen={!!modalImage} // Open modal if an image is provided
    onRequestClose={closeModal} // Close modal when the request to close is made
    contentLabel="Image Modal" // Label for screen readers
    className={styles.modal}
    overlayClassName={styles.overlay}
    style={{
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
      },
    }}
  >
    <div style={{position: 'relative'}}>
      <button onClick={closeModal} className={styles.closeButton}>
        Close 
      </button>
      <img src={modalImage.urls.regular} alt={modalImage.alt_description} className={styles.image} />
    </div>
  </ReactModal>
);
};

export default ImageModal;

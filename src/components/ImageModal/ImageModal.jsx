import ReactModal from "react-modal"

ReactModal.setAppElement('#root'); 

const ImageModal = ({image, closeModal}) => {
if(!image) return null; // If no image is provided, return nothing

return (
  <ReactModal
    isOpen={!!image} // Open modal if an image is provided
    onRequestClose={closeModal} // Close modal when the request to close is made
    contentLabel="Image Modal" // Label for screen readers
  >
    <div>
      <button onClick={closeModal}>
        Close
      </button>
      <img src={image.urls.regular} alt={image.alt_description}  />
      <p>{image.description || 'No description'}</p>
      <p>By {image.user.name}</p>
      <p>Likes: {image.likes}</p>
    </div>
  </ReactModal>
);
};

export default ImageModal

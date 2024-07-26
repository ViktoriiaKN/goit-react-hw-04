import styles from './ImageCard.module.css'

const ImageCard = ({image, handleImageClick}) => {
  return (
    <div className={styles.imageCard}>
  <img src={image.urls.small} alt={image.alt_description} onClick={handleImageClick}/>
</div>
  )
}

export default ImageCard;

import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({images, handleImageClick}) => {
  return (
    <div>
      <ul>
	{images.map((image) => (
		<li key={image.id}>
		<div onClick={() => handleImageClick(image)}>
	<ImageCard image={image}/>
		</div>
	</li>
	))}
	
</ul>
    </div>
  );
};

export default ImageGallery;

import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({hits, onClick}) => {
    return (
        <ul className="ImageGallery">
        {hits.map(({ id, webformatURL, largeImageURL, tags }) => (
            <li key={id} className="ImageGalleryItem">
                <ImageGalleryItem
					url={webformatURL}
					alt={tags}
					onClick={()=>onClick(largeImageURL, tags)}
				/>
            </li>))}
        </ul>
    )
};

ImageGallery.propTypes = {
	pics: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
	})),
	onClick: PropTypes.func.isRequired,
}

export default ImageGallery;
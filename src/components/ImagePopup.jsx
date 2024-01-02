import PropTypes from 'prop-types';

const ImagePopup = ({ imageUrl, onClose }) => {
  return (
    <div className="image-popup-overlay">
      <div className="image-popup-content">
        <img src={imageUrl} alt="Popup" />
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
      </div>
    </div>
  );
};

// Validation des propriétés avec PropTypes
ImagePopup.propTypes = {
  imageUrl: PropTypes.string.isRequired, // Exige que 'imageUrl' soit une chaîne (string) et est requis
  onClose: PropTypes.func.isRequired,
};

export default ImagePopup;

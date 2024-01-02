import { useState } from "react";
import ImagePopup from "./ImagePopup";
import Slider from "react-slick";
import "./style.css";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {" "}
      {showPopup && (
        <ImagePopup imageUrl={selectedImage} onClose={handleClosePopup} />
      )}
      <Slider {...settings} style={{ padding: "10px" }}>
        <div>
          <img
            onClick={() => handleImageClick("images/captureps1.png")}
            src="images/captureps1.png"
            alt="Slide 1"
            style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
          />
          <h3>Slide 1 (cliquez pour agrandir) &#x2794;</h3>
          <p>
            Inscription/Connexion traité en PHP. Fonctions de sécurité et
            requêtes préparées pour éviter les injections.
          </p>
        </div>
        <div>
          <img
            onClick={() => handleImageClick("images/captureps2.png")}
            src="images/captureps2.png"
            alt="Slide 2"
            style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
          />
          <h3>Slide 2 (cliquez pour agrandir) &#x2794;</h3>
          <p>
            Espace administrateur, dashboard permettant de gérer l'ensemble des
            pages. Fait de requêtes SQL.
          </p>
        </div>
        <div>
          <img
            onClick={() => handleImageClick("images/captureps3.png")}
            src="images/captureps3.png"
            alt="Slide 3"
            style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
          />
          <h3>Slide 3 (cliquez pour agrandir) &#x2794;</h3>
          <p>
            Livre d'or avec pagination, fonctions de sécurité sur les saisies
            utilisateur et conditions sur l'adresse mail utilisée.
          </p>
        </div>
        <div>
          <img
            onClick={() => handleImageClick("images/captureps4b.png")}
            src="images/captureps4b.png"
            alt="Slide 4"
            style={{ width: "100%", borderRadius: "10px", cursor: "pointer" }}
          />
          <h3>Slide 4 (cliquez pour agrandir) &#x2794;</h3>
          <p>
            Utilisation wampserver, PhpMyAdmin,
            serveur Apache et base de données MySQL
          </p>
        </div>
      </Slider>
    </>
  );
};

export default CarouselComponent;

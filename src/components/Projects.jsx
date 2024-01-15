import { useState } from "react";
import PropTypes from "prop-types";

const ImageModal = ({ imageUrl, alt, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
      <div className="max-w-screen-xl w-11/12 max-h-screen relative overflow-hidden">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-2 py-1.5 flex justify-center items-center rounded-full border-none bg-black text-white cursor-pointer"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3652_4834)">
              <path
                d="M18 6L6 18"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#fff"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_3652_4834">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
ImageModal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

const Projects = () => {
  const [modalImage, setModalImage] = useState(null);

  // Fonction pour extraire le nom du fichier à partir de l'URL de l'image
  function getImageFileName(imageUrl) {
    const urlParts = imageUrl.split("/");
    const fileNameWithExtension = urlParts[urlParts.length - 1];

    return fileNameWithExtension.split(".")[0];
  }

  const projects = [
    {
      title: "AquaElixir",
      category: "ReactJS/Symfony",
      images: [
        "images/aquaelixir/accueil.png",
        "images/aquaelixir/connexion.png",
        "images/aquaelixir/categorie.png",
        "images/aquaelixir/produit.png",
        "images/aquaelixir/avis.png",
        "images/aquaelixir/panier.png",
        "images/aquaelixir/paiement.png",
        "images/aquaelixir/administrateur.png",
      ],
      description: (
        <>
          AquaElixir est un projet fictif de site e-commerce.
          <br />
          <br />
          <strong>Front-end (React + Vite) :</strong>
          - Utilisation de react-router-dom, redux, toastify, axios...
          <br />
          - Tailwind pour le CSS. Formik pour les formulaires.
          <br />
          - Stripe pour le traitement des paiements en ligne.
          <br />
          - Pages dynamiques pour les catégories et produits.
          <br />
          <br />
          <strong>Back-end (Symfony) :</strong>
          - Implémentation de la gestion des tokens JWT pour assurer la
          sécurité.
          <br />
          - Ajout de fixtures pour faciliter la génération de données de test.
          <br />
          - Mise en place d'un système d'envoi automatique d'e-mails.
          <br />
          - Intégration de Stripe pour la gestion des paiements.
          <br />
          <br />
          Base de données MySQL.
        </>
      ),
      siteLink: "",
      githubLink: "",
      githubFrontLink: "https://github.com/JeremyB60/AquaElixir_Front",
      githubBackLink: "https://github.com/JeremyB60/AquaElixir_Back",
    },
    {
      title: "ToDoList",
      category: "ReactJS",
      description: (
        <>
          Mini-projet personnel réalisé avec ReactJs pour explorer le framework.
          <br />
          <br />
          - Utilisation des hooks React useState, useEffect afin gérer les états
          et effets des composants. <br />
          - Import des dépendances Bootstrap et jQuery pour faciliter le style
          et la manipulation du DOM.
          <br />
          - Ajout d'une bibliothèque de glisser-déposer "Drag N Drop" qui permet
          de déplacer les tâches. <br />- Mise en place d'une sauvegarde des
          données en localstorage.
        </>
      ),
      demoLink: "https://jeremyb60.github.io/reactjs-todolist/",
      githubLink: "https://github.com/JeremyB60/reactjs-todolist",
    },
    {
      title: "Private SPA",
      category: "HTML/CSS/JS",
      description: (
        <>
          Private SPA est un site vitrine réalisé pour un complexe de bien-être
          situé à Creil. <br />
          <br /> Réalisation de la charte graphique et de la maquette avec
          AdobeXD.
          <br /> La structure du site est faite en HTML, CSS et Javascript, avec
          l'intégration des bibliothèques Bootstrap et jQuery.
          <br />
          <br /> Le site présente de manière détaillée les installations, le
          concept et les tarifs du complexe. J'ai également intégré des
          carrousels pour une galerie photos attrayante.
          <br />
          <br />
          Une attention particulière a été portée à la responsivité du site,
          assurant une expérience utilisateur optimale ainsi qu'au SEO.
          <br />
          <br />
          Réalisation de l'hébergement et de la mise en ligne du site.
        </>
      ),
      siteLink: "https://www.privatespa60.com/",
      githubLink: "https://github.com/JeremyB60/PrivateSpa-SiteVitrine",
    },
    {
      title: "Partage de fichiers PDF",
      image: "images/capture6.png",
      category: "PHP/SQL/JS",
      description: (
        <>
          Ce projet a été conçu sur la demande d'un professeur désireux de
          faciliter le partage de ses cours sous format PDF avec ses élèves.
          <br />
          <br />
          Le site, développé en PHP afin de communiquer avec la base de données
          SQL, intègre les bibliothèques Bootstrap, jQuery et dropzone.js
          permettant ainsi une fonctionnalité de glisser-déposer côté
          administrateur.
          <br />
          <br />
          L'administrateur peut se connecter en toute sécurité et partager
          aisément ses fichiers PDF par un simple glisser-déposer.
          <br /> Les élèves ont la possibilité de consulter directement les PDF
          dans leur navigateur ou de les télécharger.
          <br />
          <br />
          Réalisation de l'hébergement et de la mise en ligne du site.
        </>
      ),
      siteLink: "https://coursdemrcourseaux.ovh/",
      githubLink: "https://github.com/JeremyB60/stockpdf",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div className="bg-customDarkBlue">
      <section id="mes-projets" className="max-w-screen-2xl flex px-3 mx-auto">
        <div className="w-11/12 md:w-5/6 mx-auto flex flex-col-reverse justify-center gap-5 md:gap-10 items-center md:flex-row h-screen">
          <div className="w-full items-center flex md:w-1/2 min-h-[50vh] md:min-h-full">
            {selectedProject && (
              <div className="text-sm xl:text-lg flex flex-col">
                {selectedProject.images && (
                  <div className="flex flex-wrap gap-3 mb-5">
                    {selectedProject.images.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt={`Projet ${
                          selectedProject.title
                        } - ${getImageFileName(image)}`}
                        className="max-w-full rounded w-1/5 cursor-pointer"
                        onClick={() => setModalImage(image)}
                      />
                    ))}
                  </div>
                )}
                {selectedProject.description}
              </div>
            )}
            {modalImage && (
              <ImageModal
                imageUrl={modalImage}
                alt={`Projet ${selectedProject.title} - Image`}
                onClose={() => setModalImage(null)}
              />
            )}
          </div>
          <div className="w-full mx-auto md:w-1/2">
            <h2 className="m-0 uppercase flex justify-between">
              <a
                href="#mes-projets"
                className="lg:text-[2.5vw] text-[25px] custom-link text-white visited:text-white no-underline uppercase"
              >
                projets
              </a>
              <span className="lg:text-[2vw] text-[20px] text-customGreen">
                {projects.length}
              </span>
            </h2>
            <hr />
            <ul className="list-none pl-0 my-3">
              {projects.map((project, index) => (
                <div key={index}>
                  <li
                    className="hover:text-customGreen flex cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {selectedProject &&
                      selectedProject.title === project.title && (
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                            className="mr-2"
                            fill="#65F54C"
                          >
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                          </svg>
                        </div>
                      )}
                    <div className="flex w-full justify-between items-center">
                      <span className="lg:text-[1.5vw] text-[18px] my-1 mr-2">
                        {project.title}
                      </span>
                      <div className="flex gap-2">
                        {(project.siteLink || project.demoLink) && (
                          <a
                            href={project.siteLink || project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline hover:text-customGreen"
                          >
                            {selectedProject &&
                              selectedProject.title === project.title &&
                              (selectedProject.siteLink ||
                                selectedProject.demoLink) !== null && (
                                <>
                                  {selectedProject.siteLink && (
                                    <button className="cursor-pointer text-customGreen xl:text-[1.2vw] text-[15px] hover:text-customDarkBlue bg-transparent hover:bg-customGreen border border-customGreen px-3 py-1 rounded">
                                      Site
                                    </button>
                                  )}
                                  {selectedProject.demoLink && (
                                    <button className="cursor-pointer text-customGreen xl:text-[1.2vw] text-[15px] hover:text-customDarkBlue bg-transparent hover:bg-customGreen border border-customGreen px-3 py-1 rounded">
                                      Demo
                                    </button>
                                  )}
                                </>
                              )}
                          </a>
                        )}
                        {project.githubLink && (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline text-customGreen"
                          >
                            {selectedProject &&
                              selectedProject.title === project.title && (
                                <button className="cursor-pointer text-customSkyBlue xl:text-[1.2vw] text-[15px] hover:text-white bg-transparent hover:bg-customSkyBlue border border-customSkyBlue px-3 py-1 rounded">
                                  GitHub
                                </button>
                              )}
                          </a>
                        )}
                        {project.githubFrontLink && (
                          <a
                            href={project.githubFrontLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline text-customGreen"
                          >
                            {selectedProject &&
                              selectedProject.title === project.title && (
                                <button className="cursor-pointer text-customSkyBlue xl:text-[1.2vw] text-[15px] hover:text-white bg-transparent hover:bg-customSkyBlue border border-customSkyBlue px-3 py-1 rounded">
                                  GitHub Front
                                </button>
                              )}
                          </a>
                        )}
                        {project.githubBackLink && (
                          <a
                            href={project.githubBackLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline text-customGreen"
                          >
                            {selectedProject &&
                              selectedProject.title === project.title && (
                                <button className="cursor-pointer text-customSkyBlue xl:text-[1.2vw] text-[15px] hover:text-white bg-transparent hover:bg-customSkyBlue border border-customSkyBlue px-3 py-1 rounded">
                                  GitHub Back
                                </button>
                              )}
                          </a>
                        )}
                      </div>
                      {!(
                        selectedProject &&
                        selectedProject.title === project.title
                      ) && (
                        <span className="text-customLightBlue xl:text-[1.2vw] text-[15px]">
                          {project.category}
                        </span>
                      )}
                    </div>
                  </li>
                  {index !== projects.length - 1 && <hr />}
                </div>
              ))}
            </ul>
            <div className="mt-16 hidden md:block">
              <a
                href="#mes-competences"
                style={{
                  color: "#65F54C",
                }}
                className="text-lg custom-link visited:text-white no-underline uppercase active:text-customGreen font-bold hover:text-customGreen"
              >
                Voir mes compétences
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr className="max-w-screen-2xl mx-auto w-2/3 border-b-0 m-0 hidden sm:block" />
    </div>
  );
};

export default Projects;

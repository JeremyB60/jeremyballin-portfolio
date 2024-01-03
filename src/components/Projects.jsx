import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "AquaElixir",
      category: "ReactJS/Symfony",
      description: (
        <>
          AquaElixir est un projet de site e-commerce réalisé en équipe à
          l'EuraTechnologies de Lille. Le développement s'est déroulé dans un
          contexte professionnel en utilisant la méthodologie agile SCRUM, avec
          des rituels tels que les daily meetings et les sprint reviews ainsi
          que la plateforme 'Jira' pour la gestion de projet.
          <br />
          <br />
          <strong>Front-end (ReactJS) :</strong>
          - Utilisation de react-router-dom, axios, redux-store pour la gestion
          de l'état notamment du panier.
          <br />
          - Utilisation de Tailwind pour le CSS.
          <br />
          - Intégration de Stripe pour le traitement des paiements en ligne.
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
          La base de données a été mise en place en utilisant MySQL.
        </>
      ),
      siteLink: "",
      githubLink: "",
    },
    {
      title: "ToDoList",
      category: "ReactJS",
      description: (
        <>
          Mini-projet personnel réalisé avec ReactJs pour explorer le framework.
          <br />
          <br />
          - Import des dépendances Bootstrap et jQuery pour faciliter le style
          et la manipulation du DOM.
          <br />
          - Découverte des hooks React useState, useEffect afin gérer les états
          et effets des composants. <br />
          - Ajout d'une bibliothèque de glisser-déposer "Drag N Drop" qui permet
          de déplacer les tâches. <br />- Mise en place d'une sauvegarde des
          données en localstorage.
        </>
      ),
      siteLink: "https://jeremyb60.github.io/reactjs-todolist/",
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
          assurant une expérience utilisateur optimale.
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
          <br /> Ajoute d'un système de connexion sécurisé.
          <br />
          <br />
          L'administrateur peut se connecter en toute sécurité et partager
          aisément ses fichiers PDF par un simple glisser-déposer.
          <br /> Les utilisateurs ont la possibilité de consulter directement
          les PDF dans leur navigateur ou de télécharger les fichiers PDF de
          leur choix.
          <br />
          <br />
          Réalisation de l'hébergement et de la mise en ligne du site.
        </>
      ),
      siteLink: "https://coursdemrcourseaux.ovh/",
      githubLink: "https://github.com/JeremyB60/stockpdf",
    },
  ];
  // const experiences = [
  //   {
  //     title: "Exercices",
  //     image: "images/capture3.png",
  //     category: "JavaScript",
  //     description:
  //       "Réalisé en formation DevWeb. Calculatrice, facture & devises.",
  //     siteLink: "https://jeremyb60.github.io/Evaluation-JavaScript/",
  //     githubLink: "https://github.com/JeremyB60/Evaluation-JavaScript",
  //   },
  //   {
  //     title: "Jeu d'éclate bulles",
  //     image: "images/capture4.png",
  //     category: "JavaScript",
  //     description: "Mini-jeu d'éclate bulles. Fonctions JS.",
  //     siteLink: "https://jeremyb60.github.io/jeudebulles/",
  //     githubLink: "https://github.com/JeremyB60/jeudebulles",
  //   },
  // ];
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <div className="customBackground">
      <section id="mes-projets" className="max-w-screen-2xl flex px-3 mx-auto">
        <div className="w-5/6 mx-auto flex flex-col-reverse justify-center items-center md:flex-row h-screen">
          <div className="w-full items-center flex md:w-1/2 min-h-[50vh] md:min-h-full">
            {hoveredProject && (
              <div className="text-sm xl:text-lg flex flex-col md:w-[90%] p-0">
                {hoveredProject.description}
              </div>
            )}
          </div>
          <div className="w-full mx-auto md:w-1/2">
            <h2 className="lg:text-[3vw] text-[25px] mb-0 uppercase flex justify-between">
              projets
              <span className="lg:text-[2.5vw] text-[20px] text-customGreen">
                {projects.length}
              </span>
            </h2>
            <hr />
            <ul className="list-none pl-0 lg:text-[1.7vw] text-[18px] my-3">
              {projects.map((project, index) => (
                <div key={index}>
                  <li
                    className="hover:text-customGreen flex"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {hoveredProject &&
                      hoveredProject.title === project.title && (
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                            className="mr-2"
                            fill="#62eb4c"
                          >
                            <path d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z" />
                          </svg>
                        </div>
                      )}
                    <div className="flex w-full justify-between items-center">
                      <span className="my-1">{project.title}</span>
                      <div className="flex gap-5">
                      {project.siteLink && (
                        <a
                          href={project.siteLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="no-underline hover:text-customGreen"
                        >
                          {hoveredProject &&
                            hoveredProject.title === project.title &&
                            hoveredProject.siteLink !== null && (
                              <button className="cursor-pointer text-customGreen lg:text-[1.5vw] text-[15px] hover:text-white bg-transparent hover:bg-customGreen border border-customGreen px-3 py-1 rounded">
                                Site
                              </button>
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
                          {hoveredProject &&
                            hoveredProject.title === project.title && (
                              <button className="cursor-pointer text-customGreen lg:text-[1.5vw] text-[15px] hover:text-white bg-transparent hover:bg-customGreen border border-customGreen px-3 py-1 rounded">
                                GitHub
                              </button>
                            )}
                        </a>
                      )}</div>
                      {!(
                        hoveredProject &&
                        hoveredProject.title === project.title &&
                        hoveredProject.siteLink !== ""
                      ) && (
                        <span className="text-customBlue">
                          {project.category}
                        </span>
                      )}
                    </div>
                  </li>
                  {index !== projects.length - 1 && <hr />}
                </div>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

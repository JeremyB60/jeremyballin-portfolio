import { useState } from "react";

const Projects = () => {
  const projects = [
    {
      title: "AquaElixir",
      image: "images/capture2.png",
      category: "ReactJS/Symfony",
      description: (
        <>
          AquaElixir est un projet fictif réalisé en équipe à l'EuraTechnologies
          de Lille. Le développement s'est déroulé dans un contexte
          professionnel en utilisant la méthodologie agile SCRUM, avec des
          rituels tels que les daily meetings et les sprint reviews ainsi que la
          plateforme 'Jira' pour la gestion de projet.
          <br />
          <br />
          <strong>Front-end (ReactJS) :</strong>
          - Utilisation de react-router-dom, axios, redux-store pour la gestion
          de l'état notamment du panier.
          <br />
          - Utilisation de Tailwind pour le stylisme.
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
      image: "images/capture2.png",
      category: "ReactJS",
      description: (
        <>
          Mini-projet personnel réalisé avec ReactJs pour explorer le framework.
          <br />
          <br />
          Import des dépendances Bootstrap et jQuery pour faciliter le style et
          la manipulation du DOM.
          <br />
          Découverte des hooks React useState, useEffect afin gérer les états et
          effets des composants. <br />
          Ajout d'une bibliothèque de glisser-déposer "Drag N Drop" qui permet
          de déplacer les tâches. <br />
          Mise en place d'une sauvegarde des données en localstorage.
        </>
      ),
      siteLink: "https://jeremyb60.github.io/reactjs-todolist/",
      githubLink: "https://github.com/JeremyB60/reactjs-todolist",
    },
    {
      title: "Private SPA",
      image: "images/capture.png",
      category: "HTML/CSS/JS",
      description:
        "Site vitrine pour un complexe bien-être. Bootstrap, jQuery.",
      siteLink: "https://www.privatespa60.com/",
      githubLink: "https://github.com/JeremyB60/PrivateSpa-SiteVitrine",
    },
  ];
  // const experiences = [
  // {
  //   title: "Partage de fichiers PDF",
  //   image: "images/capture6.png",
  //   category: "PHP/SQL/JS",
  //   description: "Site partage de PDF. Bibliothèque dropzone.js",
  //   siteLink: "https://coursdemrcourseaux.ovh/",
  //   githubLink: "https://github.com/JeremyB60/stockpdf",
  // },
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
    <div className="testecran">
      <section
        id="mes-projets"
        className="max-w-screen-2xl h-screen flex items-center px-3 mx-auto"
      >
        <div className="w-5/6 mx-auto flex flex-col md:flex-row items-center h-screen">
          <div className="w-full items-center flex md:w-1/2 min-h-[50vh] md:min-h-full">
            {hoveredProject && (
              <div className="text-sm xl:text-lg flex flex-col md:w-[80%] p-2 md:p-5">
                {hoveredProject.description}
              </div>
            )}
          </div>
          <div className="w-full sm:w-3/4 mx-auto md:w-1/2">
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
                    className="hover:text-customGreen"
                    onMouseEnter={() => setHoveredProject(project)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="flex">
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
                      <div className="flex w-full justify-between">
                        {project.siteLink ? (
                          <a
                            href={project.siteLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline hover:text-customGreen"
                          >
                            {hoveredProject &&
                            hoveredProject.title === project.title ? (
                              <span className="ml-10 hover:text-customGreen">
                                Site
                              </span>
                            ) : (
                              project.title
                            )}
                          </a>
                        ) : (
                          <span>{project.title}</span>
                        )}
                        {project.githubLink ? (
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="no-underline hover:text-customGreen"
                          >
                            {hoveredProject &&
                            hoveredProject.title === project.title
                              ? "Github"
                              : null}
                          </a>
                        ) : null}

                        {project.category}
                      </div>
                    </div>
                  </li>
                  {index !== projects.length - 1 && (
                    <hr />
                  )}
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

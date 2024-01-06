// Menu.js
import { useState } from "react";
import "./Menu.css";

const Menu = () => {
  const sections = [
    { id: "a-propos", label: "A propos" },
    { id: "mes-projets", label: "Projets" },
    { id: "mes-competences", label: "Compétences" },
    { id: "mes-outils", label: "Outils" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [mailOpen, setMailOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop,
    });
    setMenuOpen(false); // Fermer le menu après le clic sur une section
  };

  return (
    <div
      className={`max-w-screen-2xl relative mx-auto  ${
        menuOpen ? "show-menu" : null
      }`}
    >
      <div
        className="flex items-center gap-2 contact"
        onClick={() => setMailOpen(!mailOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 -960 960 960"
          width="24"
          fill="#fff"
          className={`hover:fill-customGreen cursor-pointer fixed z-50 ${mailOpen ? "hidden" : ""}`}
        >
          <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480v58q0 59-40.5 100.5T740-280q-35 0-66-15t-52-43q-29 29-65.5 43.5T480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480v58q0 26 17 44t43 18q26 0 43-18t17-44v-58q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93h200v80H480Zm0-280q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z" />
        </svg>
        <a
          href="mailto:jeremy.ballin@orange.fr"
          className={`fixed transition-all p-2 no-underline rounded ${
            mailOpen
              ? "opacity-100 z-50 tracking-widest bg-customGreen"
              : "opacity-0 cursor-default -z-40"
          }`}
        >
          jeremy.ballin@orange.fr
        </a>
      </div>
      <div
        className={`burger-menu ${menuOpen ? "cross" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar bg-white fixed top-5"></div>
        <div className="bar bg-white fixed top-7"></div>
        <div className="bar bg-white fixed top-9"></div>
      </div>
      <nav className="fixed h-full w-full sousMenu flex justify-center items-center bg-[#1A1A29]">
        <ul className="m-0 p-0 space-y-10 uppercase">
          {sections.map((section) => (
            <li
              key={section.id}
              className="text-center block hover:tracking-widest transition-all lg:text-[2.5vw] text-[20px] text-white hover:text-customGreen cursor-pointer duration-300"
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

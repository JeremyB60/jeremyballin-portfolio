// Menu.js
import React, { useState } from "react";
import "./Menu.css";
import ScrollToTopButton from "./ScrollToTopButton";

const Menu = () => {
  const sections = [
    { id: "a-propos", label: "A propos" },
    { id: "mes-projets", label: "Projets" },
    { id: "mes-competences", label: "Compétences" },
    { id: "mes-outils", label: "Outils" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop,
    });
    setMenuOpen(false);
  };

  return (
    <div
      className={`max-w-screen-2xl mx-auto relative ${
        menuOpen ? "show-menu" : ""
      }`}
    >
      <div className="containerBurger">
        <div className="fixed">
          <div
            className={`burger-menu px-1 pb-[2px] rounded ${
              menuOpen ? "cross" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
      <div className="containerScroll">
        <div className="fixed">
          <ScrollToTopButton />
        </div>
      </div>
      <nav className="fixed h-full w-full sousMenu flex justify-center items-center bg-[#1A1A29] z-50">
        <ul className="m-0 p-0 space-y-8 uppercase relative">
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <li
                className="text-center block hover:tracking-widest transition-all lg:text-[2.5vw] text-[20px] text-white hover:text-customGreen cursor-pointer duration-300"
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </li>
              {index !== sections.length - 1 && (
                <hr
                  className="w-[5vw] bg-customGreen"
                  style={{ borderTop: "1px inset #4cacf5", borderBottom: "none" }}
                />
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;

import { useState, useEffect } from "react";

const About = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const getCurrentTimeOfDay = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 18) {
        setTimeOfDay("Bonjour");
      } else {
        setTimeOfDay("Bonsoir");
      }
    };

    getCurrentTimeOfDay();
  }, []);

  return (
    <div className="testecran">
      <section className="max-w-screen-2xl h-screen flex items-center px-3 mx-auto">
        <div className="w-5/6 mx-auto flex">
          <div className="w-full lg:w-2/3 flex flex-col">
            <h2 className="lg:text-[2.5vw] text-[20px]">
              {timeOfDay}, je suis Jérémy Ballin !
            </h2>
            <span className="lg:text-[3vw] text-[25px] font-bold">
              Développeur <span className="degrade-span">fullstack</span> <br />{" "}
              spécialisé ReactJs et Symfony
            </span>
            <p className="text-xl">
              Passionné de football, d'e-sport et des nouvelles technologies
              dont je suis toujours curieux d'approfondir mes connaissances.
            </p>
            <div className="mt-10">
              <a
                href="#mes-projets"
                className="text-lg custom-link text-white visited:text-white no-underline uppercase active:text-customGreen font-bold hover:text-customGreen"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          <div className="w-1/3 flex-shrink-0 aboutImage hidden md:block"></div>
        </div>
      </section>
    </div>
  );
};

export default About;

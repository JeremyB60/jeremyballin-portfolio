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
    <div id="a-propos" className="customBackground">
      <section className="max-w-screen-2xl h-screen flex items-center px-3 mx-auto">
        <div className="w-11/12 md:w-5/6 mx-auto gap-5 md:gap-0 flex flex-col-reverse md:flex-row">
          <div className="w-full lg:w-2/3 flex flex-col">
            <h2 className="lg:text-[2.5vw] text-[20px]">
              {timeOfDay}, je suis Jérémy Ballin !
            </h2>
            <span className="lg:text-[3vw] text-[25px] font-bold">
              Développeur <span className="degrade-span">Fullstack</span> <br />{" "}
              spécialisé ReactJs et Symfony
            </span>
            <p className="md:text-xl">
              Passionné de football, d'e-sport et des nouvelles technologies
              dont je suis toujours curieux d'approfondir mes connaissances.
            </p>
            <div className="mt-2 md:mt-10">
              <a
                href="#mes-projets"
                className="text-lg custom-link text-white visited:text-white no-underline uppercase active:text-customGreen font-bold hover:text-customGreen"
              >
                Voir mes projets
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 h-[35vh] md:h-auto flex-shrink-0 aboutImage"></div>
        </div>
      </section>
      <hr className="max-w-screen-2xl mx-auto w-2/3 border-b-0 m-0 hidden sm:block" />
    </div>
  );
};

export default About;

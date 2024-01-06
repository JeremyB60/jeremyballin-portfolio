import { useState } from "react";
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiJqueryLogo,
  DiReact,
  DiMysql,
  DiWordpress,
  DiScrum,
} from "react-icons/di";
import {
  FaGithub,
  FaPhp,
  FaDatabase,
  FaSymfony,
  FaFigma,
  FaStripeS,
} from "react-icons/fa";
import {
  SiOpenai,
  SiAdobexd,
  SiTailwindcss,
  SiJirasoftware,
  SiPostman,
} from "react-icons/si";
import { BsTrello } from "react-icons/bs";
import { BiLogoVisualStudio } from "react-icons/bi";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./style.css";

const Skills = () => {
  const skillsData = [
    { icon: <DiReact size={48} />, name: "Reactjs" },
    { icon: <FaSymfony size={48} />, name: "Symfony" },
    { icon: <SiTailwindcss size={48} />, name: "Tailwind" },
    { icon: <FaStripeS size={48} />, name: "Stripe" },
    { icon: <DiHtml5 size={48} />, name: "HTML5" },
    { icon: <DiCss3 size={48} />, name: "CSS3" },
    { icon: <DiBootstrap size={48} />, name: "Bootstrap" },
    { icon: <DiJavascript1 size={48} />, name: "JavaScript" },
    { icon: <DiJqueryLogo size={48} />, name: "jQuery" },
    { icon: <FaPhp size={48} />, name: "PHP" },
    { icon: <FaDatabase size={48} />, name: "SQL" },
    { icon: <DiMysql size={48} />, name: "MySQL" },
    { icon: <DiWordpress size={48} />, name: "WordPress" },
  ];
  const toolsData = [
    { icon: <BiLogoVisualStudio size={48} />, name: "VSCode" },
    { icon: <FaGithub size={48} />, name: "GitHub" },
    { icon: <SiAdobexd size={48} />, name: "AdobeXd" },
    { icon: <FaFigma size={48} />, name: "Figma" },
    { icon: <BsTrello size={48} />, name: "Trello" },
    { icon: <SiJirasoftware size={48} />, name: "Jira" },
    { icon: <DiScrum size={48} />, name: "SCRUM" },
    { icon: <SiPostman size={48} />, name: "Postman" },
    { icon: <SiOpenai size={48} />, name: "OpenAI" },
  ];
  const [, setHoveredIndex] = useState(-1);
  const [, setHoveredToolIndex] = useState(-1);

  return (
    <>
      <section className="mx-auto px-3 bg-[#1B1A2A]">
        <div
          id="mes-competences"
          className="max-w-screen-2xl flex flex-col py-14 justify-center mx-auto"
        >
          <div className="w-11/12 md:w-5/6 mx-auto">
            <h2 className="lg:text-[2.5vw] text-[25px] uppercase flex justify-between">
              Mes compétences
            </h2>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {skillsData.map((skill, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <Paper
                    className="skill-card"
                    elevation={3}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      backgroundColor: "#FFFFFF22",
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                  >
                    {skill.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{ mt: 1 }}
                      className="skill-name"
                      color="secondary"
                    >
                      {skill.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
          <div className="w-11/12 md:w-5/6 mx-auto pt-14" id="mes-outils">
            <h2 className="lg:text-[2.3vw] text-[22px] uppercase flex justify-between mt-0">
              Mes outils
            </h2>
            <Grid container spacing={2} sx={{ justifyContent: "center" }}>
              {toolsData.map((tool, index) => (
                <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
                  <Paper
                    className="skill-card"
                    elevation={3}
                    sx={{
                      p: 2,
                      textAlign: "center",
                      backgroundColor: "#FFFFFF22",
                    }}
                    onMouseEnter={() => setHoveredToolIndex(index)}
                    onMouseLeave={() => setHoveredToolIndex(-1)}
                  >
                    {tool.icon}
                    <Typography
                      variant="subtitle1"
                      sx={{ mt: 1 }}
                      className="skill-name"
                      color="secondary"
                    >
                      {tool.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Skills;

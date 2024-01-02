import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3145",
    },
    secondary: {
      main: "#00b700",
    },
    tertiary: {
      main: "#C6D4E4",
    },
  },
  // typography: {
  //   fontFamily: "Raleway, sans-serif",
  //   h1: {
  //     fontSize: "1.5rem",
  //     "@media (min-width:600px)": {
  //       fontSize: "2rem",
  //     },
  //   },
  //   h2: {
  //     fontSize: "1.2rem",
  //     fontWeight: "500",
  //     "@media (min-width:600px)": {
  //       fontSize: "1.5rem",
  //       fontWeight: "400",
  //     },
  //   },
  // },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <About />
        <Projects />
        <Skills />
      </div>
    </ThemeProvider>
  );
};

export default App;

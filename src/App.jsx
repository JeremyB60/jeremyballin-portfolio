import { createTheme, ThemeProvider } from "@mui/material/styles";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Menu from "./components/Menu";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3145",
    },
    secondary: {
      main: "#65F54C",
    },
    tertiary: {
      main: "#C6D4E4",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Menu />
        <About />
        <Projects />
        <Skills />
      </div>
    </ThemeProvider>
  );
};

export default App;

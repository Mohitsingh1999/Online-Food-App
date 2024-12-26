import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./Components/Navbar";
import { darkTheme } from "./Theme/darkTheme";
import Home from "./Components/Home";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;

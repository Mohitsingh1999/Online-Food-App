import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Navbar } from "./Components/Navbar";
import { darkTheme } from "./Theme/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;

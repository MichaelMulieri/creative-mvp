import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Container,
  CssBaseline,
  useMediaQuery,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "../pages/HomePage";
import WordLadderPage from "../pages/WordLadderPage";
import ContactPage from "../pages/ContactPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/wordladder">Word Ladder</Link>
              </li>
              <li>
                <Link to="/contactpage">Contact</Link>
              </li>
            </ul>
          </nav>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={() => setIsDarkMode(!isDarkMode)}
                  defaultChecked={isDarkMode}
                  size="small"
                />
              }
              label={isDarkMode ? "Light mode" : "Dark mode"}
            />
          </FormGroup>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wordladder" element={<WordLadderPage />} />
            <Route
              path="/contactpage"
              element={<ContactPage cta="Subscribe Now" />}
            />
          </Routes>
        </main>
        <footer>footer placeholder</footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

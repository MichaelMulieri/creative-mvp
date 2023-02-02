import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Container,
  CssBaseline,
  Box,
  useMediaQuery,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "../pages/HomePage";
import WordLadderPage from "../pages/WordLadderPage";
import SettingsPage from "../pages/SettingsPage";
import ProjectListPage from "../pages/ProjectListPage";
import ProjectPage from "../pages/ProjectPage";
import StreamsPage from "../pages/StreamsPage";
import IdeasPage from "../pages/IdeasPage";
import WordLadderListPage from "../pages/WordLadderListPage";
import AppShell from "../modules/AppShell";
import { DrawerHeader } from "../modules/AppNav";
import { getAllDocuments, setWordLadder } from "../../firebase";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  useEffect(() => {
    getAllDocuments().then((documents) => {
      console.log("documents", documents);
    });

    setWordLadder();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ display: "flex" }}>
        <AppShell />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
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
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectListPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/wordladders" element={<WordLadderListPage />} />
            <Route path="/wordladder" element={<WordLadderPage />} />
            <Route path="/streams" element={<StreamsPage />} />
            <Route path="/ideas" element={<IdeasPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </Box>
        <footer>footer placeholder</footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

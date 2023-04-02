import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Container, CssBaseline, Box, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "../pages/HomePage";
import WordLadderCreatePage from "../pages/WordLadderCreatePage";
import WordLadderPage from "../pages/WordLadderPage";
import SettingsPage from "../pages/SettingsPage";
import ProjectPageNew from "../pages/ProjectPageNew";
import ProjectListPage from "../pages/ProjectListPage";
import ProjectPage from "../pages/ProjectPage";
import StreamsPage from "../pages/StreamsPage";
import IdeasPage from "../pages/IdeasPage";
import WordLadderListPage from "../pages/WordLadderListPage";
import AppShell from "../modules/AppShell";
import { DrawerHeader } from "../modules/AppNav";
import { getAllDocuments, setWordLadder } from "../../firebase";

function App() {
  const [isGrid, setIsGrid] = useState(true);
  const [isWordladderGrid, setIsWordLadderGrid] = useState(true);

  const handleGridToggle = () => {
    setIsGrid((currentIsGrid) => !currentIsGrid);
  };

  const handleWordladderGridToggle = () => {
    setIsWordLadderGrid((currentIsWordladderGrid) => !currentIsWordladderGrid);
  };

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
      <Container sx={{ display: "flex" }}>
        <AppShell />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/projects"
              element={
                <ProjectListPage
                  isGrid={isGrid}
                  handleGridToggle={handleGridToggle}
                />
              }
            />
            <Route path="/projects/new" element={<ProjectPageNew />} />
            <Route path="/projects/:id" element={<ProjectPage />} />
            <Route
              path="/wordladders"
              element={
                <WordLadderListPage
                  isWordladderGrid={isWordladderGrid}
                  handleWordladderGridToggle={handleWordladderGridToggle}
                />
              }
            />
            <Route path="/wordladders/new" element={<WordLadderCreatePage />} />
            <Route path="/wordladders/:id" element={<WordLadderPage />} />
            <Route path="/streams" element={<StreamsPage />} />
            <Route path="/ideas" element={<IdeasPage />} />
            <Route
              path="/settings"
              element={
                <SettingsPage
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              }
            />
          </Routes>
        </Box>
        <footer>footer placeholder</footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

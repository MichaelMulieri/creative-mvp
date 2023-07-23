import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import { Container, CssBaseline, Box, useMediaQuery } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AuthPage from "../pages/AuthPage";
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

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    useMediaQuery("(prefers-color-scheme: dark)")
  );

  const [isSignedIn, setIsSignedIn] = useState(false);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container sx={{ display: "flex" }}>
        {isSignedIn && <AppShell />}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Routes>
            {isSignedIn ? (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectListPage />} />
                <Route path="/projects/new" element={<ProjectPageNew />} />
                <Route path="/projects/:id" element={<ProjectPage />} />
                {/* <Route path="/wordladder" element={<WordLadderListPage />} /> */}
                <Route path="/wordladder" element={<WordLadderCreatePage />} />
                {/* <Route path="/wordladders/:id" element={<WordLadderPage />} /> */}
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
              </>
            ) : (
              <Route path="*" element={<AuthPage />} />
            )}
          </Routes>
        </Box>
        {/* <footer>footer placeholder</footer> */}
      </Container>
    </ThemeProvider>
  );
}

export default App;

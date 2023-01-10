import { useState } from "react";
import { Box } from "@mui/material";
import AppBar from "../AppBar";
import AppNav from "../AppNav";

const AppShell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleDrawerOpen = () => {
    setIsOpen(true);
  };
  const handleDrawerClose = () => {
    setIsOpen(false);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar handleDrawerOpen={handleDrawerOpen} open={isOpen} />
      <AppNav handleDrawerClose={handleDrawerClose} open={isOpen} />
    </Box>
  );
};

export default AppShell;

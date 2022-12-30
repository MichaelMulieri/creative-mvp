import { useState } from "react";
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
    <div className="nav">
      <AppBar handleDrawerOpen={handleDrawerOpen} />
      <AppNav handleDrawerClose={handleDrawerClose} open={isOpen} />
    </div>
  );
};

export default AppShell;

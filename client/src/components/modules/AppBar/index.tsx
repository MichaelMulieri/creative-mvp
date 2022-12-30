import * as React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

interface AppBarProps {
  handleDrawerOpen: () => void;
}

const AppBar = ({ handleDrawerOpen }: AppBarProps) => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
          Creative MVP
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

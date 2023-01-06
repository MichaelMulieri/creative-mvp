import * as React from "react";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
  styled,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

const drawerWidth = 240;

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface AppBarProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

const AppBar = ({ handleDrawerOpen, open }: AppBarProps) => {
  return (
    <StyledAppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
          Creative MVP
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
};

export default AppBar;

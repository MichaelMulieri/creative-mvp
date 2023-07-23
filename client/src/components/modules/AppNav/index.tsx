import {
  Drawer as MuiDrawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Theme,
  CSSObject,
  styled,
} from "@mui/material";
import ConstructionIcon from "@mui/icons-material/Construction";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import WaterIcon from "@mui/icons-material/Water";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { ChevronLeft as ChevronLeftIcon } from "@mui/icons-material";
import styles from "./index.module.css";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

//FIXME: fix theme type
export const DrawerHeader = styled("div")(({ theme }: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

//TODO: look into refactoring mixin
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

interface AppNavProps {
  handleDrawerClose: () => void;
  open: boolean;
}

const navObjects = [
  { icon: <ConstructionIcon />, label: "Projects", link: "projects" },
  {
    icon: <DensityMediumIcon />,
    label: "Word Ladders",
    link: "wordladder",
  },
  { icon: <WaterIcon />, label: "Streams", link: "streams" },
  { icon: <EmojiObjectsIcon />, label: "Ideas", link: "ideas" },
];

const AppNav = ({ handleDrawerClose, open }: AppNavProps) => {
  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {Object.values(navObjects).map((value, index) => (
          <Link key={value.link} className={styles.links} to={value.link}>
            <ListItem key={value.link} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "white",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {value.icon}
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  {value.label}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {[{ label: "Settings", link: "settings" }].map((link, index) => (
          <ListItem key={link.link} disablePadding sx={{ display: "block" }}>
            <Link className={styles.links} to={link.link}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  color: "white",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <SettingsIcon />
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
                <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                  {link.label}
                </ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AppNav;

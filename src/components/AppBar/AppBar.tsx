import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, styled, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useAppBar from "./hooks/useAppBar";
import { useDispatch } from "react-redux";
import { setDrawerOpen } from "../../redux/drawerSlice";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export const AppBar: React.FC = () => {
  const { drawer } = useAppBar();

  const dispatch = useDispatch();

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          width: `calc(100% - ${drawer.drawerWidth}px)`,
          marginLeft: `${drawer.drawerWidth}px`,
          transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

  return (
    <AppBar position="fixed" open={drawer.isOpen}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => dispatch(setDrawerOpen(true))}
          edge="start"
          sx={[
            {
              mr: 2,
            },
            drawer.isOpen && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          Persistent drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useAppBar from "./hooks/useAppBar";
import { useDispatch } from "react-redux";
import { setDrawerOpen } from "../../redux/drawerSlice";
import { useState } from "react";
import { options } from "./constants/constants";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}
export const AppBar: React.FC = () => {
  const { drawer } = useAppBar();

  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

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
          CoreUI
        </Typography>

        {/* Box para empurrar os elementos para a direita */}
        <Box sx={{ flexGrow: 1 }} />

        <Tooltip title="Configurações">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar
              alt="user.displayName"
              sx={{ width: 42, height: 42 }}
              src="d"
            />
          </IconButton>
        </Tooltip>

        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {options.map((option) => (
            <MenuItem
              sx={{ gap: 1 }}
              key={option.name}
              onClick={async () => {
                // navigate(option.route);
                // if (option.function) {
                //   await option.function();
                // }
              }}
            >
              {option.icon}
              <Typography sx={{ fontSize: "12px" }} textAlign="center">
                {option.name}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

import React from "react";
import { useRouteMatch, useHistory, useLocation, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ExitIcon from "@mui/icons-material/ExitToApp";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Tooltip } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { itemMenuUser } from "../../../constant/data";
import { StorageApp } from "../../../utils/StorageApp";
import AuthService from "../../../core/auth/AuthService";
import { setIsAuth } from "../../../redux/auth/AuthActions";
import { setNavCollapse, setNavHide } from "../../../redux/ui/UiActions";
import ImageIcon from "../../global/img/ImageIcon";

const MenuUser = () => {
  let { path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((reducer: any) => reducer.authReducer);
  const ui = useSelector((reducer: any) => reducer.uiReducer);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const callbackOnpres = (i: any) => {
    handleClose();
    history.push(`${path}/${i.path}`);
  };
  const callbackSignout = () => {
    AuthService.signOut(() => {
      dispatch(setIsAuth(false));
      history.push("/signin");
      StorageApp.clear();
    });
  };
  const callbackNav = () => {
    // if (window.innerWidth > 768) {
    dispatch(setNavCollapse(!ui.navCollapse));
    // } else {
    //   dispatch(setNavHide(false));
    // }
    StorageApp.setItem({ navCollapse: !ui.navCollapse });
  };
  return (
    <>
      <Button
        sx={{ margin: "0 0 0  2em" }}
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        variant="outlined"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ImageIcon
          callback={false}
          alt="Remy Sharp"
          src={auth?.user?.photoURL}
          avatar={true}
        />
        <Stack
          alignItems="flex-start"
          paddingLeft={"10px"}
          justifyContent="center"
        >
          <Typography
            variant="subtitle2"
            margin="0"
            padding="0"
            noWrap
            sx={{ maxWidth: "80px" }}
          >
            {auth?.user?.displayName}
          </Typography>
        </Stack>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: "100%", padding: ".2em 1em", minWidth: "220px" }}>
          <Typography variant="h6" fontWeight={600}>
            {auth?.user?.displayName}
          </Typography>
          <Typography variant="body1">{auth?.user?.email}</Typography>
        </Box>
        <Divider sx={{ my: 0.8 }} />
        {itemMenuUser?.map((i: any, j: number) => (
          <MenuItem key={j} onClick={() => callbackOnpres(i)}>
            <ListItemIcon>{i.icon}</ListItemIcon>
            <Typography variant="inherit" noWrap padding=".1em  1.5em .1em 0">
              {i?.translate}
            </Typography>
          </MenuItem>
        ))}
        <Box
          sx={{
            width: "100%",
            padding: ".5em 1em",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => callbackSignout()}
            variant="outlined"
            startIcon={<ExitIcon />}
          >
            {"md_signout"}
          </Button>
        </Box>
      </Menu>
    </>
  );
};

export default MenuUser;

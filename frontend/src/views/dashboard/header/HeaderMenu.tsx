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

const HeaderMenu = () => {
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
    <Stack sx={{ flexGrow: 1, alignItems: "flex-start" }}>
      <Tooltip title={`${"md_menu_collapse"}`}>
        <IconButton onClick={callbackNav}>
          <MenuIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  );
};

export default HeaderMenu;

import React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import SearchView from "./SearchView";
import CartIcon from "../cart/CartIcon";
import MenuUser from "./MenuUser";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

const Header = ({ onDetail, onInputChange, loading }: any) => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/dashboard" style={{ color: "#fff" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { md: "flex", xs: "none" } }}
              >
                REACT CHALLENGE
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { md: "none" } }}
              >
                R C
              </Typography>
            </Box>
          </Link>
          <HeaderMenu />
          <SearchView onInputChange={onInputChange} loading={loading} />
          <CartIcon onDetail={onDetail} />
          <MenuUser />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

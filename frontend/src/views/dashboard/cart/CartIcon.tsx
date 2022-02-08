import React, { useState } from "react";
import {
  Box,
  IconButton,
  ListItem,
  Menu,
  ListItemText,
  Tooltip,
  Button,
  Badge,
  CardHeader,
  Typography,
  Stack,
  Divider,
  List,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DeleteIcon from "@mui/icons-material/RemoveShoppingCart";
import CartViewIcon from "@mui/icons-material/ShoppingBag";
import { useDispatch, useSelector } from "react-redux";
import ItemProductCart from "./ItemProductCart";
import { cleanCart, removeProductCart } from "../../../redux/cart/CartActions";

const CartIcon = ({ onDetail }: any) => {
  const { cart } = useSelector((reducers: any) => reducers.cartReducer);
  const dispatch = useDispatch();
  const [currentData, setCurrentData] = useState<any>();
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmClean, setConfirmClean] = useState(false);
  const totalCart = cart?.length
    ? cart?.reduce((a: any, b: any) => a + b?.price, 0)
    : 0;
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event: any) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const callbackRemoveCart = async (e: any) => {
    let conf = window.confirm(
      "Quitar producto?\n" +
        `¿Está seguro de quitar el producto ${e?.title} del carrito?`
    );
    if (conf) removeProductCart(dispatch, e);
  };
  const callbackCleanCart = async () => {
    let conf = window.confirm(
      "Vaciar carrito de compras?\n" +
        `¿Está seguro de vaciar los productos  del carrito?`
    );
    if (conf) callbackClean(false);
  };
  const callbackClean = (type: any) => {
    cleanCart(dispatch, type);
  };
  const callbackCheckOut = () => {
    callbackClean(true);
    handleCloseUserMenu();
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Ver carrito de compras">
          <Badge
            color="secondary"
            badgeContent={cart?.length}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <IconButton onClick={handleOpenUserMenu} color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
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
          <Stack
            width={420}
            sx={{ width: { xs: "300px", md: "420px" } }}
            padding={1}
          >
            <CardHeader
              title={`Carrito (${cart?.length})`}
              subheader="September 14, 2016"
              action={
                cart?.length ? (
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    color="secondary"
                    onClick={() => callbackCleanCart()}
                  >
                    Vaciar
                  </Button>
                ) : null
              }
            />
            <List
              sx={{ maxHeight: "60vh", overflow: "auto" }}
              className="scroll-material"
            >
              {cart?.length ? (
                cart.map((item: any, i: any) => (
                  <ItemProductCart
                    key={i}
                    data={item}
                    onDetail={onDetail}
                    callbackRemoveCart={callbackRemoveCart}
                  />
                ))
              ) : (
                <Stack sx={{ padding: "1em" }}>
                  <Typography variant="h5">
                    No hay productos en tu carrito de compras
                  </Typography>
                </Stack>
              )}
            </List>

            <Stack direction="column" sx={{ padding: "1em 1em 0 1em" }}>
              <ListItem
                secondaryAction={
                  <Typography sx={{ fontWeight: "bold" }}>
                    : S/. {totalCart}
                  </Typography>
                }
                disablePadding
              >
                <ListItemText primary={`Total`} />
              </ListItem>
              <Divider component="li" sx={{ margin: "0.8em 0" }} />
              {cart?.length ? (
                <Button
                  variant="outlined"
                  startIcon={<CartViewIcon />}
                  color="secondary"
                  onClick={() => callbackCheckOut()}
                >
                  PAGAR CARRITO
                </Button>
              ) : null}
            </Stack>
          </Stack>
        </Menu>
      </Box>
    </>
  );
};

export default CartIcon;

import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Box,
  Typography,
  ListItemText,
  ListItemButton,
  Button,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/HelpOutline";
import ImageView from "./ImageView";
import AddIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/RemoveShoppingCart";

interface IProps {
  data: any;
  isAdded?: Boolean;
  onManageCart?: any;
  onDetail: any;
}
const Product = (props: IProps) => {
  const { data, onManageCart, isAdded, onDetail } = props;
  const { name, description, photo, price } = data;
  return (
    <Card
      sx={{
        width: { xs: 290, md: 320 },
        overflow: "initial",
        margin: "0 auto",
      }}
    >
      <ImageView src={photo} alt={name} onClick={() => onDetail?.(data)} />
      <CardHeader
        title={name}
        sx={{ overflow: "hidden", alignItems: "initial" }}
      />
      <CardContent className="card-content">
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Typography
        variant="h5"
        sx={{
          padding: "0 1em",
          textAlign: "right",
        }}
      >
        S/. {price}
      </Typography>
      <CardActions disableSpacing>
        <Box
          sx={{ flexGrow: 1, padding: "0 1em 0 0", display: { xs: "flex" } }}
        >
          <Tooltip title={isAdded ? "Quitar producto" : "Agregar a la cesta"}>
            <Button
              onClick={() => onManageCart?.(data)}
              color={isAdded ? "secondary" : "inherit"}
              variant="outlined"
              sx={{ borderRadius: 8 }}
              startIcon={isAdded ? <DeleteIcon /> : <AddIcon />}
            >
              {isAdded ? "Eliminar" : "Agregar"}
            </Button>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Product;

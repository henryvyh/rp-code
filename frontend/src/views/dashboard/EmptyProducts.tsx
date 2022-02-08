import React from "react";
import { Stack, Typography } from "@mui/material";
import ProductIcon from "@mui/icons-material/Category";

const EmptyProducts = () => {
  return (
    <Stack
      sx={{
        padding: "1em",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        display: "flex",
        flexGrow: 1,
        color: "#fff",
      }}
    >
      <ProductIcon sx={{ fontSize: 150 }} />
      <Typography variant="h4">No hay productos</Typography>
      <Typography variant="body1">
        No hay productos intenta buscar con otra palabra clave
      </Typography>
    </Stack>
  );
};

export default EmptyProducts;

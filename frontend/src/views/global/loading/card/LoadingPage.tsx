import React from "react";
import { CircularProgress, Box } from "@mui/material";

const LoadingPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress color="secondary" />
    </Box>
  );
};

export default LoadingPage;

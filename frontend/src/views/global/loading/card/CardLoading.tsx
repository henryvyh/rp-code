import React from "react";
import { Skeleton, Stack } from "@mui/material";

const CardLoading = () => {
  return (
    <Stack spacing={1} margin="auto" sx={{ width: { xs: 290, md: 320 } }}>
      <Skeleton
        variant="rectangular"
        height={194}
        sx={{ width: { xs: 290, md: 320 } }}
      />
      <Skeleton variant="text" height={40} />
      <Skeleton variant="text" width={240} />
      <Skeleton variant="text" />
      <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton
          variant="text"
          height={20}
          sx={{
            width: { xs: 100, md: 180 },
          }}
        />
        <Skeleton variant="rectangular" height={30} width={90} />
      </Stack>
    </Stack>
  );
};

export default CardLoading;

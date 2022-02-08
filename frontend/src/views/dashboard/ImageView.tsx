import React, { useState } from "react";
import { CardMedia, CircularProgress, Stack } from "@mui/material";
interface IProps {
  src?: any;
  alt?: string;
  height?: any;
  onClick?: any;
}
const ImageView = (props: IProps) => {
  const { src, alt, height, onClick } = props;
  const [load, setLoad] = useState(false);
  return (
    <Stack
      sx={{
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!load ? (
        <CircularProgress color="secondary" sx={{ position: "absolute" }} />
      ) : null}
      <CardMedia
        onClick={() => onClick?.()}
        component="img"
        height={height ?? "194"}
        image={src}
        sx={{ cursor: onClick ? "pointer" : "default" }}
        alt={alt}
        onLoad={() => setLoad(true)}
      />
    </Stack>
  );
};

export default ImageView;

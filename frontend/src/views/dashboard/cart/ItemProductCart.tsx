import React from "react";
import {
  Avatar,
  IconButton,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Divider,
  ListItemButton,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/DeleteSweep";

const ItemProductCart = ({ data, onDetail, callbackRemoveCart }: any) => {
  const { name, photo, price } = data;

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => callbackRemoveCart?.(data)}
          >
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton onClick={() => onDetail?.(data)} role={undefined} dense>
          <ListItemAvatar>
            <Avatar src={photo}>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={name} secondary={`S/. ${price}`} />
        </ListItemButton>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default ItemProductCart;

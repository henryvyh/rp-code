import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import RightIcon from "@mui/icons-material/KeyboardArrowRight";
import ImageIcon from "../../global/img/ImageIcon";

interface IProps {
  data: any;
  onClick: Function;
  onSelect: Function;
}

const ItemNav = (props: IProps) => {
  const { data, onClick, onSelect }: any = props;
  return (
    <ListItemButton
      onClick={() => onClick?.(data)}
      onMouseEnter={() => onSelect?.(data)}
    >
      <ListItemIcon>
        <ImageIcon src={data?.photo} avatar={true} />
      </ListItemIcon>
      <ListItemText primary={data?.name} />
      <RightIcon />
    </ListItemButton>
  );
};

export default ItemNav;

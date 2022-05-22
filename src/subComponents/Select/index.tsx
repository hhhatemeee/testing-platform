import { Select, SelectChangeEvent,MenuItem } from "@mui/material";
import { SelectInputProps } from "@mui/material/Select/SelectInput";
import React, { useState } from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type DataItem = {
  id: number;
  name: string;
}


type CustomSelectProps = {
  value: any;
  onChange?: (e: SelectChangeEvent<any>) => void;
  autoWidth?: boolean;
  sx: any;
  title: string;
  data: DataItem[];
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  autoWidth,
  sx,
  title,
  data,
}) => {
  return <Select
    onChange={onChange}
    value={value}
    autoWidth={autoWidth}
    size="medium"
    sx={sx}
    MenuProps={MenuProps}
  >
    <MenuItem value={title} disabled>
      {title}
    </MenuItem>
    {data.map((d) => <MenuItem
      key={d.id}
      value={d.id}
    >
      {d.name}
    </MenuItem>)}
  </Select>;
};

export default CustomSelect;

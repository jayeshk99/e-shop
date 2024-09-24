import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export const RadioButton = (props) => {
  return (
    <>
      <FormControlLabel
        value={props.value}
        control={<Radio />}
        label={props.value}
      />
    </>
  );
};

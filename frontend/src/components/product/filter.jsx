import { Typography } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./../../index.css";
import { PRODUCT_CATEGORIES } from "../../global/constants";
import { RadioButton } from "../../uiCore/radioButton";

export const Filter = (props) => {
  const { filterName, filterList } = props;
  return (
    <FormControl
      sx={{
        border: "1px solid var(--borderColor)",
        width: "80%",
        padding: "5%",
      }}
    >
      <FormLabel id="demo-radio-buttons-group-label">
        {" "}
        <Typography variant="h6" color="var(--textColor)" fontWeight="bold">
          {filterName}
        </Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{
          "& .MuiRadio-root": {
            borderRadius: 0,
          },
        }}
      >
        {filterList.map((value) => (
          <RadioButton value={value} />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

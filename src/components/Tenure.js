import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Tenure({ data, setData }) {
  const handleChange = (event) => {
    setData({ ...data, loanTerm: event.target.value });
    console.log(data);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Age"
        onChange={handleChange}
        defaultValue={5}
      >
        <MenuItem value={5}>5 years</MenuItem>
        <MenuItem value={10}>10 years</MenuItem>
        <MenuItem value={15}>15 years</MenuItem>
        <MenuItem value={20}>20 years</MenuItem>
        <MenuItem value={25}>25 years</MenuItem>
      </Select>
    </FormControl>
  );
}

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SortByDropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100, maxWidth: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sorty By"
          onChange={handleChange}
        >
          <MenuItem value={10}>Best Selling</MenuItem>
          <MenuItem value={20}>Price Low to High</MenuItem>
          <MenuItem value={30}>Price High to Low</MenuItem>
          <MenuItem value={40}>Properties Name A-Z</MenuItem>
          <MenuItem value={50}>Properties Name Z-A</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
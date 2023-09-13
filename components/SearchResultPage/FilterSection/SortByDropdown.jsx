import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

export default function SortByDropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 100, maxWidth: 150 }}>
      <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label"> <Typography variant='caption'> Sort By</Typography></InputLabel> 
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort By"
          onChange={handleChange}
        >
          <MenuItem value={10}><Typography variant='caption'>Best Selling </Typography></MenuItem>
          <MenuItem value={20}><Typography variant='caption'>Price Low to High</Typography></MenuItem>
          <MenuItem value={30}><Typography variant='caption'>Price High to Low </Typography></MenuItem>
          <MenuItem value={40}><Typography variant='caption'>Properties Name A-Z </Typography></MenuItem>
          <MenuItem value={50}><Typography variant='caption'>Properties Name Z-A </Typography></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
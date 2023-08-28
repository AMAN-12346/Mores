import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import downArrow from '../../assets/ButtonIcons/fluent_ios-arrow-24-filled.svg';
import upArrow from '../../assets/ButtonIcons/UpArrow.png';

const DropdownButton = ({optionName, menuItem}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        className='flex'
      >
        <p className='mr-2'>{optionName}</p>
        {anchorEl ? 
          <Image src={upArrow} width={18} alt='down arrow' /> 
        : <Image src={downArrow} width={18} alt='down arrow' />
        }
        
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItem?.map((item)=>
           <MenuItem onClick={handleClose}>{item}</MenuItem>
        )}       
        
      </Menu>
    </div>
  );
};

export default DropdownButton;

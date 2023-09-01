import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import burgerMenuIcon from '@/assets/ButtonIcons/burgerMenuIcon.svg';

const BurgerMenu = () => {
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
          <Image src={burgerMenuIcon} width={25} height={50} className='md:w-[30px]'/>
        
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        <MenuItem onClick={handleClose} className='px-20px w-[200px]' >City</MenuItem>
        <MenuItem onClick={handleClose}>Sell</MenuItem>
        <MenuItem onClick={handleClose}>Rent</MenuItem>
        <MenuItem onClick={handleClose}>Projects</MenuItem>
        <MenuItem onClick={handleClose}>Agents</MenuItem>
        <MenuItem onClick={handleClose}>Services</MenuItem>
        <MenuItem onClick={handleClose}>Resources</MenuItem>
             
        
      </Menu>
    </div>
  );
};

export default BurgerMenu;

import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import downArrow from '../../assets/ButtonIcons/fluent_ios-arrow-24-filled.svg';
import upArrow from '../../assets/ButtonIcons/upArrow.svg';
import { useAuth } from '@/context/auth';
import { useRouter } from 'next/router';

const ProfileDropdownButton = () => {

  const [auth, setAuth] = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAuth({user: null,
      token: "",
      refreshToken: "",})
    localStorage.removeItem("auth");
    router.push('/');
  }

  return (
    <div>
      <button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        className='flex'
      >
        <Image src={auth.userResult?.images ? auth.userResult?.images : "https://s3-alpha-sig.figma.com/img/22aa/3b45/6260f5c114826d26f0063851b8322353?Expires=1693785600&Signature=X0scVn4d3eneQGiJHCUCFGZATEWF3GA5fsx4MNMeYtFzwC7m~4KjS4HFh1Hw6YgaFLPLwVN5D~4BnNwVMpFSmSNTHiRn2CuGV5pqMCMaIHKNN0QXkzadNgpG-EQRUSOw~Dw7gcuUuaHJZ1Fb2YAiJg-vZZV3EA6x5RK2sAzDQ0nFt22F3nysZDJDgVIvsjoBFOUfRzQ4o3xM6VXe12mVZLgtRA4zaMCOIHd6QIoXuN01aIbF8r60ksLtoinf6NG3yQBew1CgRyESShuI7YjrgtLGIzKsvnOZc5EKaGSpuYIqS60SAPkwrJ~tgvYH2rVA38gRSAYEBDrRtMh8TaAv8A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}  
          width={45} height={50}
          className='rounded-full ml-2 mr-2'
          style={{boxShadow: "0px 0px 1px 0.5px teal"}}
        />
        <div className='flex mt-4 text-sm'>
          {auth.userResult.firstName ? <p>{auth.userResult.firstName}</p> : "Your Name"}
          &nbsp;&nbsp;
          {anchorEl ? 
            <Image src={upArrow} width={12} alt='up arrow'/> 
          : <Image src={downArrow} width={13} alt='down arrow' />
          }
        </div>
        
      </button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
      <button className='px-10 py-1' onClick={handleLogout}>Logout</button>
        
      </Menu>
    </div>
  );
};

export default ProfileDropdownButton;

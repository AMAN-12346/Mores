import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import downArrow from '../../assets/ButtonIcons/fluent_ios-arrow-24-filled.svg';
import upArrow from '../../assets/ButtonIcons/upArrow.svg';
import Styles from './index.module.css';
import Link from 'next/link';


const DropdownButton = ({optionName, menuItem}) => {
  
  return (
        <div className={Styles.dropDown}>
          <button
            className='flex h-[60px] items-center'
          >
            <p className='mr-1'>{optionName}</p>    
          
            <Image src={downArrow} className={Styles.image} width={11} alt='down arrow' style={{marginTop: "2px"}} />
            
          </button>
          <div class={Styles.dropdownMenu}>
            <div className='flex'>
              {Object.keys(menuItem)?.map((head)=>
                <div className={Styles.innerDiv}>
                  <h3 className={Styles.headTag}>{head}</h3>
                  <hr className={Styles.underline}/>
                  {menuItem[head]?.map((data) => 
                    <Link href='/'>{data}</Link>
                  )}                
                </div>
              )}
            </div>                 
          </div>
        </div>
      );
}

export default DropdownButton;

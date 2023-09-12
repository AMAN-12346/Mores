import React, { useState } from 'react';
import Image from 'next/image';
import downArrow from '../../assets/ButtonIcons/fluent_ios-arrow-24-filled.svg';
import whiteTriangle from '../../assets/NavbarIcons/triangle.svg';
import Styles from './index.module.css';
import Link from 'next/link';


const DropdownButton = ({optionName, menuItem}) => {
  
  // color array
  const color = ["rgba(1, 129, 145, 0.08)", "rgba(147, 22, 2, 0.06)", "rgba(200, 142, 32, 0.06)"]

  return (
        <div className={Styles.dropDown}>
          <button
            className='flex h-[60px] items-center mr-3 relative'
          >
            <p className='mr-2' style={{letterSpacing: "0.5px"}}>{optionName}</p>    
          
            <Image src={downArrow} className={Styles.image} width={11} alt='down arrow' style={{marginTop: "1px"}} />
            <Image src={whiteTriangle} className={Styles.whiteTriangle} width={20} alt='white triangle' />
          </button>
          <div class={Styles.dropdownMenu}>
            
            <div className='flex'>
              {Object.keys(menuItem)?.map((head, index)=>
                <div className={Styles.innerDiv} style={{backgroundColor:color[index]}}>
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

import Image from "next/image"
import { useState } from "react"
const FilterButtons=({name, icon,isMobileView})=>{
    const[active,toggleactive]=useState(true)
    return(
        !isMobileView ? 
        (<div className='flex'>
        <div className={`flex gap-1 px-4 py-2 border border-solid border-searchFilterButtonBorder rounded-full text-white text-xs ${active ?'bg-searchFilterButton':'bg-primary border border-transparent'} `} >
        <div className='bg-white rounded-full p-1'>
            <Image
            src={icon}
            height={25}
            width={15}
            alt='icon'/>
        </div>
      <button onClick={()=>toggleactive(!active)}>{name}</button>
      </div>
      </div>
      ) :
      (<div className='flex mx-1'>
      <div className={`flex gap-1 px-1 py-1 border border-solid border-searchFilterButtonBorder rounded-full text-white text-xs ${active ?'bg-searchFilterButton':'bg-primary border border-transparent'} `} >
      <div className='bg-white rounded-full p-1'>
          <Image
          src={icon}
          height={25}
          width={15}
          alt='icon'/>
      </div>
    <button onClick={()=>toggleactive(!active)}>{name}</button>
    </div>
    </div>)
    )
}
export default FilterButtons
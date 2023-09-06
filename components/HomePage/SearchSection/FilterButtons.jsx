import Image from "next/image"
import { useState } from "react"
const FilterButtons=({name, icon})=>{
    const[active,toggleactive]=useState(true)
    return(
        <div className={`flex`}>
        <div className={`flex gap-2 px-4 py-2 border border-solid rounded-full text-white ${active ?'':'bg-primary border border-transparent'}`} >
        <div className='bg-white rounded-full p-1'>
            <Image
            src={icon}
            height={25}
            width={25}
            alt='icon'/>
        </div>
      <button onClick={()=>toggleactive(!active)}>{name}</button>
      </div>
      </div>
    )
}
export default FilterButtons
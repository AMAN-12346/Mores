import Image from "next/image"
import { useState } from "react"
const FilterButtons=({name, icon, isTAbletView  })=>{
    const[active,toggleactive]=useState(true)
    return(
        <div className={`flex`}>
        <div className={`flex gap-2 px-4 py-2 border border-solid border-white rounded-full text-white ${active ?'':'bg-primary border-transparent'}`} >
        <div className='bg-white  rounded-full p-1'>
            <Image
            src={icon}
            alt='icon'/>
        </div>
      <button onClick={()=>toggleactive(!active)}>{name}</button>
      </div>
      </div>
    )
}
export default FilterButtons
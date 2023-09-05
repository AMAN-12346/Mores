import Image from "next/image"
const FilterButtons=({name, icon})=>{
    console.log(icon)
    return(
        <div className='flex'>
        <div className='flex gap-2 px-4 py-2 border border-solid border-white rounded-full text-white'>
        <div className='bg-white rounded-full p-1'>
            <Image
            src={icon}
            alt='icon'/>
        </div>
      <button>{name}</button>
      </div>
      </div>
    )
}
export default FilterButtons
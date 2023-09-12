import React from 'react'

const Tags = (props) => {
  return (
    <div className=''>
        <div className='absolute h-[10px] ms-[100px] mb-[45px]'>
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
<circle cx="12.7174" cy="13.2826" r="8.76087" fill="white"/>
<path d="M20.6917 5.30834C16.4667 1.08334 9.5334 1.08334 5.3084 5.30834C1.0834 9.53334 1.0834 16.4667 5.3084 20.6917C9.5334 24.9167 16.3584 24.9167 20.5834 20.6917C24.8084 16.4667 24.9167 9.53334 20.6917 5.30834ZM16.0334 17.55L13.0001 14.5167L9.96673 17.55L8.45007 16.0333L11.4834 13L8.45007 9.96667L9.96673 8.45L13.0001 11.4833L16.0334 8.45L17.5501 9.96667L14.5167 13L17.5501 16.0333L16.0334 17.55Z" fill="black"/>
</svg>
        </div>
        <div className=" h-[40px] w-[110px] m-2 rounded-3xl border  border-slate-700 container p-2 flex justify-center">
        
            <div className='text-base text-slate-500'>{props.name}</div>
        </div>
    </div>
  )
}

export default Tags
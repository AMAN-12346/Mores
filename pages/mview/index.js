import React from 'react'
// import SearchResultCard from '@/components/SearchResultPage/Card/SearchResultCard'
// import LeftSectionCarousel from '@/components/SearchResultPage/FilterSection/LeftSectionCarousel'
import LeftSectionCarouselMview from '@/components/SearchResultPage/FilterSection/LeftSectionCarouselMview'
// import RightSection from '@/components/SearchResultPage/FilterSection/RightSection'
import PropertyListingData from '../../content/PropertyListingData/PropertyListing.json'
import RightSectionMview from '@/components/SearchResultPage/FilterSection/RightSectionMview'

const hello = () => {
  const arr = ['https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=600','https://images.pexels.com/photos/2980955/pexels-photo-2980955.jpeg?auto=compress&cs=tinysrgb&w=600','https://www.pexels.com/photo/brown-and-white-concrete-2-storey-house-1694360/']
  return (
    <div className='flex-row'>
    <div className='flex flex-col w-full m-5 bg-white rounded-xl'  >
        <div className='p-3'>
        <LeftSectionCarouselMview images = {arr}/>
        </div>
        <div className=' px-5'>
        <RightSectionMview details={PropertyListingData}/>
        </div>        
    </div>
    <div className='flex flex-col w-full m-5 bg-white rounded-xl'  >
    <div className='p-3'>
    <LeftSectionCarouselMview images = {arr}/>
    </div>
    <div className=' px-5'>
    <RightSectionMview details={PropertyListingData}/>
    </div>        
</div>
</div>
  )
}

export default hello
import React from 'react'
import FeaturesSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSectionCard';
export default function RecommenedCard({Data}) {
  return (
    <div>
      {/* Render property cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Data?.map((item) => (
          <FeaturesSectionCard singlePropertyData={item} />
        ))}
      </div>
    </div>
  )
}

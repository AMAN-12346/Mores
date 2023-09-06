import React from 'react'
<<<<<<< HEAD
import FeaturesSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSection';
export default function RecommenedCard() {
=======
import FeaturesSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSectionCard';
export default function RecommenedCard({Data}) {
>>>>>>> 4d0d82390ea302ce88464c3697cb8e2f19408b66

  return (
    <div>
      <div className="flex justify-center mt-4">
        <p className="text-3xl font-bold px-8">Recommened For You</p>
      </div>

      {/* Render property cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Data?.map((data) => (
          <FeaturesSectionCard data={data} />
        ))}
      </div>
    </div>
  )
}

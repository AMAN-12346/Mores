import React from 'react'
import FeaturesSectionCard from '@/components/HomePage/FeaturedPropertiesSection/FeaturedSection';
export default function RecommenedCard() {

  const similarPropertiesData = [
    { id: 1, name: 'Property 1', /* other property details */ },
    { id: 2, title: 'Property 2', /* other property details */ },
    { id: 3, title: 'Property 3', /* other property details */ },
    { id: 4, title: 'Property 4', /* other property details */ },
    { id: 5, title: 'Property 5', /* other property details */ },
    // ... more properties
  ];
  return (
    <div>
      <div className="flex justify-center mt-10">
        <p className="text-3xl font-bold px-8">Recommened For You</p>
      </div>

      {/* Render property cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {similarPropertiesData.map((data) => (
          <FeaturesSectionCard data={data} />
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { ExploreItem } from '../types/app';
import Image from 'next/image';
type ExploreCardProps = ExploreItem
function ExploreCard ({ img,location,distance }: ExploreCardProps) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 cursor-pointer hover:bg-gray-100 transition hover:scale-[1.01]'>
      <div className='relative w-16 h-16 rounded-md overflow-hidden'>
        <Image  src={ img} alt="this image" fill/>
      </div>
        <div>
          <h2>{ distance}</h2>
          <h2>{ location}</h2>
        </div>
    </div>
  )
}

export default ExploreCard

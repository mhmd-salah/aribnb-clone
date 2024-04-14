import React from 'react'
import ExploreCard from './ExploreCard';
import { getExplore } from '../utils/api';
import { ExploreData } from '../types/app';
import MainHeading from './MainHeading';

async function Explore() {
  const exlplorData:ExploreData = await getExplore()
  return (
    <section className='pt-6 '>
      <div className='container'>
        <MainHeading title='Explore Nearby'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          { exlplorData.map((item) => (
          <ExploreCard
            key={ item.img }
            img={ item.img }
            location={ item.location }
            distance={ item.distance } />
        ))}
        </div>
      </div>
    </section>
  )
}

export default Explore

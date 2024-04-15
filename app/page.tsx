import React from 'react'
import Banner from './components/Banner';
import Live from './components/Live';
import ExploreCard from './components/ExploreCard';
import Explore from './components/Explore';
import Greats from './components/Greats';

function page() {
  return (
    <main>
      <Banner />
      <Explore/>
      <Live />
      <Greats
        img='/pexels-asad-photo-maldives-1591361.jpg'
        title='Welcome Dear'
        description='this description'
        linkText='link'
      />
    </main>
  )
}

export default page

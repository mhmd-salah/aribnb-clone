import React from 'react';
import { getLive } from '../utils/api';
import { LiveData } from '../types/app';
import LiveCard from './LiveCard';

async function Live () {
  const liveData: LiveData = await getLive();
  console.log(liveData);
  return (
    <section className='pt-6'>
      <div className='container'>
        <div className='flex space-x-2 overflow-x-scroll snap-x no-scrollbar p-3 -ml-3 text-center'>
          {
            liveData.map((item) => (
              <div className='snap-center' key={ item.img }><LiveCard  img={ item.img } title={ item.title } /></div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Live;
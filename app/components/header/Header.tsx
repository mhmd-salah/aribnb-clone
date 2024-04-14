import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';

function Header () {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-sm py-5 '>
      <div className='container grid grid-cols-3 '>
        <Link href={ "/" } className='relative flex '>
          <Image
            src={ "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" }
            alt='this logo'
            width={ 150 }
            height={ 100 }
            className='object-contain object-left responsave'
          />
        </Link>

        <Searchbar/>

        <Navbar/>
      </div>
    </header>
  );
}

export default Header;

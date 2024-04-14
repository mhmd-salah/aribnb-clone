import Link from 'next/link';
import React from 'react'

function Footer () {
    const links = [
    {
      title: 'ABOUT',
      links: [
        'How Airbnb works',
        'Newsroom',
        'Investors',
        'Airbnbn Plus',
        'Airbnb Luxe',
      ],
    },
    {
      title: 'COMMUNITY',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
    {
      title: 'HOST',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
    {
      title: 'SUPPORT',
      links: [
        'Accessbility',
        'This is not a real site',
        'Its a pretty awesome clone',
        'Referrals accepted',
        'Papafam',
      ],
    },
  ];
  return (
    <footer>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-200 '>
        { links.map(link => (
          <div
            key={ link.title }
            className=' text-xs text-gray-800 flex flex-col text-center md:text-left gap-[15px] '
          >
            <h5>{ link.title }</h5>
            { link.links.map(item => (
              <Link
                key={ item }
                href={ item }
                className='m-0 p-0'
              >{ item }</Link>
            ))}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'

function MainHeading({title}:{title:string}) {
  return (
    <h2 className='text-4xl font-semibold pb-5'>{ title }</h2>
  )
}

export default MainHeading

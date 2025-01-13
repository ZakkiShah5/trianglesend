import React from 'react'

const Hero = () => {
  return (
    <section className='bg-primary unique-bg text-white py-20'>
      <div className='container mx-auto text-center'>
        <h1 className='text-4xl mb-1 font-pirate text-primary'>
          Join the Crew at Triangles End
        </h1>
        <span className='font-pirate text-primary font-semibold'>
          Build the Magic—One Adventure at a Time{' '}
        </span>
        <p className='max-w-[600px] p-6 md:p-0 mx-auto mb-6 text-white'>
          At Triangles End, we’re more than just a destination—we’re a living,
          breathing world brought to life by a crew of passionate builders,
          dreamers, and storytellers. Every set, prop, and experience is
          handcrafted, using recycled and repurposed materials to create
          something truly extraordinary. And now, we’re inviting you to be part
          of the magic.
        </p>
       
      </div>
    </section>
  )
}

export default Hero

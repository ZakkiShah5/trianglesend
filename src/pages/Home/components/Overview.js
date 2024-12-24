import ship from '../../../assets/slider/ship.jpg'

const Overview = () => {
  return (
    <div className='overview flex flex-col md:flex-row justify-around max-w-screen-xl mx-auto bg-primary text-white'>
      <div className='flex-1 relative p-10'>
        {/* <img
          className='h-full md:h-[80vh] object-cover w-full'
          src={ship}
          alt='adv'
        /> */}
      </div>
      <div className='flex-1 p-10 font-pirate'>
        <h1 className='text-4xl text-secondary mb-2'>Overview</h1>
        <div className='flex flex-col gap-2'>
          <p>
            Triangles End located on 60 acres of forest, fields and wetlands
            providing plenty of space for adventure. You'll encounter hidden
            treasures, mysterious clues and thrilling challenges but beware,
            this is not a walk in the park.
          </p>
          <p>
            You'll be walking a great deal, so make sure you wear comfortable
            shoes and don't forget to dress the part. We love to see our guests
            in pirate costumes, but street clothes are fine too. Just remember
            that this is a visit to the woods, and we haven't removed all the
            root demons or poisonous agriculture.
          </p>
          <p>
            These events occur rain or shine, so be prepared for any weather.
            Triangles End is the perfect place for pirate lovers of all ages but
            6 years and older are best as we've had a bit of a challenge having
            younger pirates handling a shovel or loading cannons. However
            younger crew are welcome.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Overview

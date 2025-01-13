import React from 'react'
import '../Places.css'

const KeyBlanco = () => {
  return (
    <div className='max-w-screen-xl mx-auto bg-white min-h-screen flex flex-col items-center py-10 px-5'>
      <div className='max-w-4xl w-full'>
        <header className='text-center mb-10'>
          <h1 className='text-2xl md:text-4xl font-bold text-primary font-pirate mb-2'>
            Key Blanco
          </h1>
          <h2 className='text-lg md:text-xl font-pirate text-primary'>
            The Edge of Adventure
          </h2>
        </header>

        <div className='flex flex-col md:flex-row gap-5'>
          <section className='flex-1 bg-white p-6 rounded-lg shadow-lg mb-8'>
            <h3 className='text-xl bg-secondary p-2 text-center font-bold text-primary font-pirate mb-4'>
              Journey to Key Blanco
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              Journey to Key Blanco, the farthest point of Triangles End, where
              the thrill of competition meets the charm of a secluded retreat.
              This is the place where camaraderie, excitement, and a touch of
              mischief converge, making it a must-visit destination for every
              adventurer.
            </p>
          </section>

          <section className='flex-1 bg-white p-6 rounded-lg shadow-lg mb-8'>
            <h3 className='text-xl bg-secondary p-2 text-center font-bold text-primary font-pirate mb-4'>
              Jolly Joe's
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              Nestled at the heart of Key Blanco is Jolly Joe’s, a remote pub
              where the drinks are cold, and the tales are bold. Whether you’re
              looking to toast a victory or simply savor the moment, Jolly Joe’s
              offers a perfect spot to relax and enjoy the lively energy of the
              Cannon Ball Range. With a beverage in hand and the sounds of
              spirited competition in the air, it’s the ideal backdrop for a
              moment of pirate leisure.
            </p>
          </section>
        </div>

        <div className='flex flex-col md:flex-row gap-5 items-stretch'>
          <section className='flex-1 bg-white p-6 rounded-lg shadow-lg mb-8'>
            <h3 className='text-xl bg-secondary p-2 text-center font-bold text-primary font-pirate mb-4'>
              The Cannon Ball Range
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              Step onto the Cannon Ball Range, a dodgeball field transformed
              into a high-stakes arena for ship-to-ship broadside combat. Here,
              daring challengers reenact the chaos of naval warfare, dodging and
              lobbing "cannonballs" in a game that demands strategy, agility,
              and teamwork. Whether you’re a bold participant or an enthusiastic
              spectator, the Cannon Ball Range delivers endless thrills and
              laughter.
            </p>
          </section>

          <section className='flex-1 bg-white p-6 rounded-lg shadow-lg'>
            <h3 className='text-xl bg-secondary p-2 text-center font-bold text-primary font-pirate mb-4'>
              A Destination Worth the Voyage
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              Key Blanco is more than just a point on the map—it’s a destination
              brimming with excitement and charm. From the vibrant atmosphere of
              Jolly Joe’s to the action-packed energy of the Cannon Ball Range,
              it’s a place where adventure and relaxation come together in
              perfect harmony.
            </p>
            <p className='text-gray-700 leading-relaxed mt-2'>
              Ready to chart a course for Key Blanco? Your next great memory is
              waiting.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default KeyBlanco

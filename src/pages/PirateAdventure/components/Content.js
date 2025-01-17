import circle from '../../../assets/circle.png'
import hunt from '../../../assets/slider/hunt.jpg'
import cannon from '../../../assets/slider/cannon.jpg'
import pirateball from '../../../assets/DodgeBall.avif'
import feast from '../../../assets/fest.avif'
import ribbon from '../../../assets/ribbon.png'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className='p-5  my-5 max-w-screen-lg  mx-auto'>
      <div className=' flex flex-col mb-5 relative items-center md:h-[55vh] md:flex-row gap-5'>
        <div className='text-white w-full md:w-4/6 z-20'>
          <h1 className='text-2xl font-pirate text-secondary'>Treasure Hunt</h1>
          <p>Set sail on an epic quest with your crew!</p>
          <ul className='my-2'>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Assemble Your Crew:</span>{' '}
                Choose your captain and raise your flag high.
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Find Hidden Treasures:</span>
                Use your map and compass to uncover the bounty hidden throughout
                Triangles End.
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Capture the Colors:</span> Seek
                out rival crews' flags and claim extra treasure. Beware—dice
                battles await those bold enough to try!
              </span>
            </li>
          </ul>
          <p>
            Forgotten your pirate skills? Fear not! A crew lead will guide you
            in mastering the ropes—or the plank, depending on your daring.{' '}
          </p>
        </div>

        <img
          className='w-full md:w-5/12'
          src={hunt}
          alt=''
        />
      </div>

      <img className='w-56 mx-auto' src={ribbon} alt="" />

      <div className='flex relative mb-5 flex-col mb-6-reverse items-center my-3 md:h-[55vh] md:flex-row gap-5'>
        <img
          className='w-full md:w-5/12  z-10'
          src={cannon}
          alt=''
        />
        <div className='text-white w-full md:flex-1 '>
          <h1 className='text-2xl font-pirate text-secondary'>Cannon Range</h1>
          <p>Fire away, matey! Test your aim on our Gunnery Range.</p>
          <ul className='my-2'>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Man the Cannons:</span> Six
                full-size steel cannons await ye and your crew.
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Show Your Skill:</span>
                Fire 10 rounds per cannon at targets of varying distances.
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Earn Treasure:</span> Each
                target hit adds treasure to your crew's chest.
              </span>
            </li>
          </ul>
          <p>
            No need to worry about safety—our air-powered cannons pack a punch
            without the risk of gunpowder. Under the watchful eye of our Master
            at Arms, ye’ll stay safe while blasting your way to glory!
          </p>
        </div>
      </div>
      <img className='w-56 mx-auto' src={ribbon} alt="" />

      <div className='flex relative flex-col mb-5 items-center md:h-[55vh] md:flex-row gap-5'>
        <div className='text-white w-full md:w-4/6 z-20'>
          <h1 className='text-2xl font-pirate text-secondary'>Pirate Ball</h1>
          <p>Experience the ultimate pirate showdown!</p>
          <ul className='my-2'>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Ship-to-Ship Combat:</span>
                Pirate Ball is a thrilling take on dodgeball, simulating naval
                battles with customized rules.{' '}
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Board the Enemy: </span>
                Use boarding ramps to invade the opposing ship if ye can dodge
                their fire!
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>
                  Last Crew Standing Wins:
                </span>{' '}
                Victory brings glory—and loot!
              </span>
            </li>
          </ul>
          <p>
            Prefer to watch the action? Cheer for your crew from the sidelines
            as they battle for victory. Pirate Ball is a heart-pounding way to
            live the life of a pirate!
          </p>
        </div>
        <img
          className='w-full h-72 md:w-5/12  z-10'
          src={pirateball}
          alt=''
        />
      </div>

      <img className='w-56 mx-auto' src={ribbon} alt="" />

      <div className='flex flex-col relative mb-5 items-center my-3 md:h-[55vh] md:flex-row gap-5'>
        <img
          className='w-full h-72 object-cover md:w-5/12'
          src={feast}
          alt='feast'
        />
        <div className='text-white w-full md:flex-1 '>
          <h1 className='text-2xl font-pirate text-secondary'>The Feast</h1>
          <p>Celebrate your triumphs at a feast fit for a king!</p>
          <ul className='my-2'>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>
                  Crowning the Champions:
                </span>{' '}
                Six Witness the grand weigh-in of treasures to declare the
                winning crew.
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>A Banquet of Bounty:</span>
                Enjoy roasted meats, fresh salads, and exotic dishes—something
                for every pirate’s palate.
              </span>
            </li>
            <li className='flex gap-2 items-center'>
              <img className='w-5 rounded-full' src={circle} alt='img' />{' '}
              <span>
                {' '}
                <span className='text-secondary'>Raise a Toast:</span>
                Share tales of adventure over drinks and laughter.
              </span>
            </li>
          </ul>
          <p>Ready to Embark on Your Adventure?</p>
        </div>
      </div>

      <img className='w-56  mx-auto' src={ribbon} alt="" />

      <div className='my-10 text-white'>
        <p>
          Don’t miss your chance to live the pirate’s life.{' '}
          <Link to="/contact">Book Your Pirate Adventure </Link> and set sail for a world of
          fun and excitement at Triangles End!
        </p>
      </div>
    </div>
  )
}

export default Content

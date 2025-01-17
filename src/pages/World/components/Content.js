import captain from '../../../assets/slider/pirate2.jpg'
import forest from '../../../assets/forest.jpg'

const Content = () => {
  return (
    <section className='bg-media'>
      <div className='p-5 py-10 flex gap-8 flex-col md:flex-row-reverse max-w-screen-lg  mx-auto'>
        <div className=''>
          <h1 className='text-3xl font-bold font-pirate'>
            Where Time Twists, and Legends Live On
          </h1>

          <p>
            In the late 1600s, Captain Fox and his daring crew embarked on a
            perilous journey through the Bermuda Triangle, chasing whispers of a
            treasure beyond imagination. What they found instead was a violent
            storm that hurled their ship far from the ocean's embrace. When the
            winds settled, they were marooned—thousands of miles inland—in a
            place unlike any they had ever known.
          </p>
          <p>
            This mysterious land became known as Triangles End, a realm where
            time bends, boundaries blur, and no one ever truly leaves.
          </p>

          <h1 className='text-3xl font-bold font-pirate'>
            A Meeting of Worlds
          </h1>
          <p>
            Captain Fox and his crew quickly discovered they were not alone.
            Over the centuries, others from across the globe and throughout
            history had also been drawn to Triangles End—some from ancient
            civilizations, others from contemporary times. Strangers who arrived
            with no explanation found themselves united in a land where time
            seems to stand still, yet echoes of the outside world remain.
          </p>
          <p>
            The crew has encountered strange wonders—carriages without horses,
            great metal birds soaring through the sky, and towering structures
            they cannot comprehend. Their attempts to describe these sights are
            rooted in their 17th-century worldview, painting a tapestry of
            mystery that fuels the legends of Triangles End.
          </p>
        </div>

        <img className='w-96' src={captain} alt='' />
      </div>
      <div className='p-5 py-10 max-w-screen-lg  mx-auto'>
        <h1 className='text-3xl font-bold font-pirate'>
          A Place You Never Truly Leave
        </h1>

        <p>
          For some, the strange allure of Triangles End proved too much. Over
          the years, a number of crew members have ventured back into the world
          beyond its borders. But time away has its price: the longer they stay
          gone, the more they forget who they were, as if Triangles End itself
          is fading from their minds. And yet, they remain tethered—unable to
          shake the psychic pull of the place they once called home.
        </p>
        <p>
          Periodically, they are drawn back to Triangles End, where Captain Fox
          and the remaining crew await them. These return visits, marked by
          games, challenges, and adventures, are known as the Pirate
          Adventures—a desperate and spirited attempt to reignite their memories
          and help them rediscover the lives they left behind.
        </p>

        <h1 className='text-3xl font-bold font-pirate'>The Mystery Endures</h1>
        <p>
          Triangles End is more than just a place—it’s a puzzle, a haven, and a
          legend. For those who remain, it is both a refuge and a challenge,
          filled with camaraderie, exploration, and the constant whisper of
          secrets waiting to be uncovered.
        </p>
        <p>
          Here, time doesn’t just stand still; it loops and tangles, revealing
          glimpses of other worlds and other eras. And while some may leave, the
          pull of Triangles End ensures that no one is ever truly gone.
        </p>
      </div>
      <div className='p-5 py-10 flex gap-8 flex-col md:flex-row max-w-screen-lg  mx-auto'>
        <div className=''>
          <h1 className='text-3xl font-bold font-pirate'>
            What to expect during a visit to Triangles End
          </h1>

          <p>
            Triangles End is located on 60 acres of forest, fields and wetlands
            providing plenty of space for adventure. You'll encounter hidden
            treasures, mysterious clues and thrilling challenges but beware,
            this is not a walk in the park. The search for treasure has no fixed
            path, and you will be traversing open fields, following game trails,
            and digging for treasure in your quest for glory.
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

          <p>
            Water will be available during the adventure and a pirate feast is
            provided for dinner, but otherwise provisions and privies will be
            sparse. Feel free to bring your own snacks, but no coolers please.
            Remember, the adventure is a race against time and the other crew –
            the first to the treasure is the first
          </p>
        </div>

        <img className='w-96' src={forest} alt='' />
      </div>
    </section>
  )
}

export default Content

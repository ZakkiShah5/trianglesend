import '../Home.css'
import goal from '../../../assets/icons/Asset 1.png'
import goal1 from '../../../assets/icons/Asset 3.png'
import goal2 from '../../../assets/icons/Asset 4.png'
import goal3 from '../../../assets/icons/Asset 5.png'
import goal4 from '../../../assets/icons/Asset 6.png'
const Cards = () => {
  let list = [
    {
      name: 'Our Goal',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos ea reprehenderit optio. ',
      img: goal
    },
    {
      name: 'Our Magic',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos ea reprehenderit optio. ',
      img: goal1
    },
    {
      name: 'Tickets',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos ea reprehenderit optio. ',
      img: goal3
    },
    {
      name: 'Activities',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos ea reprehenderit optio. ',
      img: goal4
    },
    {
      name: 'Features',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos ea reprehenderit optio. ',
      img: goal2
    }
  ]

  return (
    <div className='bg-primary flex flex-col md:flex-row font-pirate justify-between max-w-screen-xl mx-auto'>
      {list.map((li, index) => (
        <div key={index} className='flip-card cursor-pointer'>
          <div className='flip-card-inner'>
            <div className='flip-card-front flex flex-col justify-center items-center'>
              <img className='w-16 h-16 object-contain' src={li.img} alt='g' />
              <h2 className='text-3xl mt-5 font-bold text-secondary'>
                {li.name}
              </h2>
            </div>
            <div className='flip-card-back flex flex-col justify-center items-center'>
              <h1 className='font-bold'>lorem ipsum</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                dignissimos ea reprehenderit optio.
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards

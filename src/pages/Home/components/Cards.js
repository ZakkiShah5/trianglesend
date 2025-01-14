import '../Home.css'
import goal from '../../../assets/icons/Asset 1.png'
import goal1 from '../../../assets/icons/Asset 3.png'
import goal2 from '../../../assets/icons/Asset 4.png'
import goal3 from '../../../assets/icons/Asset 5.png'
import goal4 from '../../../assets/icons/Asset 6.png'
import { Link } from 'react-router-dom'

const Cards = () => {
  let list = [
    {
      name: 'Activities',
      title: 'Adventure & Camaraderie',
      desc: 'Step into the Camp, center of life at TE, where stories are shared...',
      img: goal,
      goto: '/places'
    },
    {
      name: 'Our Magic',
      title: 'Spirit Forge',
      desc: 'Bring Your Stories to Life with Spirit Forge',
      img: goal1,
      goto: '/spirit-forge'
    },
    {
      name: 'Events',
      title: 'Host Your Events',
      desc: 'A Canvas for Your Imagination',
      img: goal3,
      goto: '/custom-adventures'
    },
    {
      title: 'ASK us',
      name: 'Let’s Connect',
      desc: 'Have something specific in mind? Don’t hesitate to reach out...',
      img: goal4,
      goto: '/contact'
    },
    {
      name: 'Join US',
      title: 'Volunteer',
      desc: 'Join the crew of Triangles End and help build a world of wonder and adventure!',
      goto: '/volunteer',
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
              <h2 className='text-2xl mt-5 font-bold text-secondary'>
                {li.name}
              </h2>
            </div>
            <div className='flip-card-back flex flex-col justify-center items-center'>
              <h1 className='font-bold'>{li.title}</h1>
              <p className='text-sm'>
                {li.desc}
              </p>
              <button className='bg-primary text-white py-1 px-6 rounded shadow-md font-pirate '>
              <Link to={li.goto}>Set Sail</Link>
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards

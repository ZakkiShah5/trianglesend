import circle from '../../../assets/circle.png'
import '../Home.css'

const Circles = () => {
  return (
    <div className='max-w-full overflow-hidden hidden md:block'>
      <div className='circle'>
        <img src={circle} alt='circle' />
      </div>
      <div className='circle-2'>
        <img src={circle} alt='circle' />
      </div>
    </div>
  )
}

export default Circles

import ship from '../../../assets/ship_at_sea.png'

const Qoute = () => {
  return (
    <div className='min-h-[100vh] flex flex-col justify-center gap-4 items-center bg-white'>
      <img className='min-w-fit' src={ship} alt='ship' />
      <h1 className='text-secondary font-pirate font-extrabold text-4xl'>
        “Play is the exultation of the possible.”
      </h1>
      <span className='font-pirate text-primary'>~ Martin Buber</span>
    </div>
  )
}

export default Qoute

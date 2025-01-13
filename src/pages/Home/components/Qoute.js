import ship from '../../../assets/ship_at_sea.png'

const Qoute = () => {
  return (
    <div className='bg-media h-full md:min-h-[100vh] flex flex-col justify-center gap-4 p-10 md:p-0 items-center bg-white'>
      <img className='w-full md:max-w-fit' src={ship} alt='ship' />
      <h1 className='text-secondary font-pirate font-extrabold text-md md:text-4xl'>
        “Play is the exultation of the possible.”
      </h1>
      <span className='font-pirate text-primary text-sm md:text-md'>~ Martin Buber</span>
    </div>
  )
}

export default Qoute

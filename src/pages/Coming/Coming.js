import wheel from '../../assets/icons/wheel.png'
import './Coming.css'

const Coming = () => {  
  return (  
    <div className="unique-bg md:min-h-[90vh] flex flex-col items-center justify-center bg-primary">  
      <div className="text-center">  
        <h1 className="text-2xl md:text-5xl font-bold mb-2 font-pirate text-black">Ahoy, Matey!</h1>  
        <p className="text-lg md:text-xl text-white font-pirate mb-2">The ship has departed and will reach sail soon.</p>  

        <div className="w-64 h-64 mx-auto relative mb-2 pirate-wheel2">  
          <div className="absolute inset-0">  
            <img  
              src={wheel}  
              alt="Pirate Wheel"  
              className="w-full h-full object-contain"  
            />  
          </div>  
        </div>  

        <p className="text-md md:text-lg italic font-pirate text-black">  
          Get ready for a swashbuckling adventure!  
        </p> 
      </div>  

    
    </div>  
  );  
};  

export default Coming;  

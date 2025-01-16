import { Link } from "react-router-dom";



const Schedule = () => {
  return (
    <section className="bg-media py-10 px-5">
      {/* Schedule Overview Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-pirate font-bold text-primary mb-6">Pirate Adventure Schedule</h2>
        <p className="text-lg italic mx-auto text-primary max-w-[520px] mb-6">
          Plan your adventure with our schedule! Each activity is carefully
          timed to ensure you have a full day of swashbuckling excitement and
          camaraderie with your crew.
        </p>
        <button className='bg-primary text-secondary mt-5 py-2 px-6 font-semibold rounded shadow-md hover:from-yellow-300 font-pirate hover:to-secondary hover:scale-105 transform transition-all duration-300 ease-in-out'>
          <Link to='/contact'>Schedule your adventure with us</Link>
        </button>
      </div>
    </section>
  );
};

export default Schedule;

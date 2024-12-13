import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Overview from "./components/Overview"
import Qoute from "./components/Qoute"


const Home = () => {
  return (
    <div>
        <Hero />
        <Cards/>
        <Overview/>
        <Qoute />
    </div>
  )
}

export default Home
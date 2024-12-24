import Cards from './components/Cards'
import Circles from './components/Circles'
import Hero from './components/Hero'
import More from './components/More'
import Overview from './components/Overview'
import Qoute from './components/Qoute'

const Home = () => {
  return (
    <div>
      <Circles />
      <Hero />
      <Cards />
      <Overview />
      <More />
      <Qoute />
    </div>
  )
}

export default Home

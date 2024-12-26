import { Footer } from './components'
import { Header } from './components'
import { Custom, Home, PirateAdventure } from './pages'
import { Routes, Route } from 'react-router-dom'
import Circles from './pages/Home/components/Circles'

const App = () => {
  return (
    <>
      <Header />
      <Circles />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/pirate-adventure' element={<PirateAdventure />}></Route>
        <Route path='/custom-adventures' element={<Custom/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

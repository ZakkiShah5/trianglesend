import { Footer } from "./components"
import {Header} from "./components"
import { Home } from "./pages"

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Home/>
      </div>
      <Footer/>
    </>
  )
}

export default App
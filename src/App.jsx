import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar'
import { Approach } from './components/Approach'
import { Contact } from './components/Contact'
import { ParallaxImage } from './components/ParallaxImage'
import { About } from './components/About'
import { Services } from './components/Services'

function App () {
  return (
    <div>
      <Navbar />
      <Header />
      <Approach />
      <ParallaxImage />
      <About />
      <Services />
      {/* <Contact /> */}
    </div>
  )
}

export default App

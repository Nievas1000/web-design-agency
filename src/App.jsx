import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { Funnel } from './pages/funnel.jsx'
import { ThanksPage } from './components/Funnel/ThanksPage.jsx'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/get-clients-guide'>
        <Route path='' element={<Funnel />} />
        <Route path='thanks-guide' element={<ThanksPage />} />
      </Route>
    </Routes>
  )
}

export default App

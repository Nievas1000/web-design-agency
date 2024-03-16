import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { Funnel } from './pages/funnel.jsx'
import { ThanksPage } from './components/Funnel/ThanksPage.jsx'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/get-free-website'>
        <Route path='' element={<Funnel />} />
        <Route path='thanks-website' element={<ThanksPage />} />
      </Route>
    </Routes>
  )
}

export default App

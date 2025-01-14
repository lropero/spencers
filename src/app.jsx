import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './components/home'
import Menu from './components/menu'
import NotFound from './components/not-found'
import Reserve from './components/reserve'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!window.Vocal0) return
    window.Vocal0.on('navigate', path => {
      navigate(`/${path}`)
    })
    return () => window.Vocal0.off('navigate')
  }, [window.Vocal0])

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/menu' element={<Menu />} />
      <Route path='/reserve' element={<Reserve />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App

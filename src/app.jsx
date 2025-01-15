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
    window.Vocal0.on('click', ({ element }) => {
      if (element === 'submit') {
        const submit = document.querySelector('#submit')
        if (submit) submit.click()
      }
    })
    window.Vocal0.on('input', ({ field, value }) => {
      if (field === 'partySize') {
        const select = document.querySelector('#OT_partySizeSelect')
        if (select) select.value = value
      } else if (field === 'date') {
        const input = document.querySelector('#startDate')
        if (input) input.value = value
      } else if (field === 'time') {
        const select = document.querySelector('#OT_timeSelect')
        if (select) select.value = value
      }
    })
    window.Vocal0.on('reserve', () => {
      const element = document.querySelector('#content-container')
      if (element) element.innerHTML = '<h2 style="margin-bottom: 4px;">Your table is ready!</h2><small>(not really, this is a demo)</small><h3>Thank you for trying out our voice agent provided by <a href="https://www.vocal0.com" target="_blank">Vocal0</a></h3>'
    })
    window.Vocal0.on('navigate', ({ path }) => {
      navigate(`/${path}`)
    })
    return () => window.Vocal0.off()
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

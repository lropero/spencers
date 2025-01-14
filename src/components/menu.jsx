import { useEffect, useState } from 'react'

const Menu = () => {
  const [html, setHtml] = useState('')

  useEffect(() => {
    fetch('/menu.html')
      .then(response => response.text())
      .then(html => setHtml(html))
      .catch(error => console.error('Error loading HTML:', error))
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Menu

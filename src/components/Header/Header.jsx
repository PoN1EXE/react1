import { useState, useEffect } from 'react'
import logo from '/logo-name.svg'
import './Header.css'

const Header = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(intervalTime)
  }, [])

  return (
    <header>
      <img src={logo} alt={'Result university'} />
      {/* <h3>David v rot ebal</h3> */}

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export { Header }

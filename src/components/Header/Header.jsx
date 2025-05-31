import { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import logo from '/logo-name.svg'

const HeaderCont = styled.header`
  height: 50px;
  display: flex;
  padding: 0 2rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  background: #fafafa;
`

const Header = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const intervalTime = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(intervalTime)
  }, [])

  return (
    <HeaderCont>
      <img src={logo} alt={'Result university'} />

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </HeaderCont>
  )
}

export { Header }

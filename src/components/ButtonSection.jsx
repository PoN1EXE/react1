import { Button } from './Button/Button.jsx'
import { ways, differences } from '../data.js'
import { useState } from 'react'

const ButtonSection = () => {
  const [contentType, setContentType] = useState(null)

  console.log('app render')

  function handleClick(type) {
    setContentType(type)
    console.log(contentType)
  }

  return (
    <section>
      <h3>Lorem Ipsum is simply dummy text</h3>

      <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>
        Подход
      </Button>
      <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>
        Доступность
      </Button>
      <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>
        Концентрация
      </Button>
      {!contentType && <p>Нажми на кнопку</p>}
      {contentType && <p>{differences[contentType]}</p>}
    </section>
  )
}

export { ButtonSection }

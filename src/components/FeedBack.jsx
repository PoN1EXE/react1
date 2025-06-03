import { useState } from 'react'
import { Button } from './Button/Button.jsx'

const FeedBack = () => {
  const [form, setForm] = useState({
    name: '',
    reason: 'help',
  })

  const isNameValid = form.name.trim().length > 0
  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor='name'>Ваше имя</label>
        <input
          type='text'
          id='name'
          className='control'
          value={form.name}
          style={{
            border: form.name.trim().length ? undefined : '1px solid red',
          }}
          onChange={handleChange('name')}
        />

        <label htmlFor='reason'>Причина обращения</label>
        <select>
          id='reason' className='control' value={form.reason}
          onChange={handleChange('reason')}
          <option value='error'>Ошибка</option>
          <option value='help'>Нужна помощь ?</option>
          <option value='strength'>я крайне сильный</option>
        </select>

        <Button disabled={!isNameValid}>Отправить</Button>
      </form>
    </section>
  )
}
export { FeedBack }

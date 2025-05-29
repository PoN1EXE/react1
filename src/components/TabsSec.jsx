import Button from './Button/Button'

export default function TabsSec({ active, onChange }) {
  return (
    <section style={{ marginBottom: '20px' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>
      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>
        Обратная связь
      </Button>
    </section>
  )
}

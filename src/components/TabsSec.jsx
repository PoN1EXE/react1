import { Button } from './Button/Button'
import { EffectSec } from './EffectSec'

const TabsSec = ({ active, onChange }) => {
  return (
    <section style={{ marginBottom: '20px' }}>
      <Button isActive={active === 'main'} onClick={() => onChange('main')}>
        Главная
      </Button>
      <Button isActive={active === 'feedback'} onClick={() => onChange('feedback')}>
        Обратная связь
      </Button>
      <Button isActive={active === 'effect'} onClick={() => onChange('effect')}>
        Effect
      </Button>
    </section>
  )
}

export { TabsSec }

import WayToText from './WayToText.jsx'
import { ways, differences } from '../data.js'

export default function TextSection() {
  return (
    <section>
      <h3>Lorem Ipsum is simply dummy text</h3>

      <ul>
        {ways.map((way) => (
          <WayToText key={way.title} {...way} />
        ))}
      </ul>
    </section>
  )
}

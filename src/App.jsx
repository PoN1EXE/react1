import Header from './components/Header/Header.jsx'
import TextSection from './components/TextSection.jsx'
import ButtonSection from './components/ButtonSection.jsx'
import IntroSection from './components/IntroSection.jsx'
import TabsSec from './components/TabsSec.jsx'
import FeedBack from './components/FeedBack.jsx'
import { useState } from 'react'

export default function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSec active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TextSection />
            <ButtonSection />
          </>
        )}

        {tab === 'feedback' && <FeedBack />}
      </main>
    </>
  )
}

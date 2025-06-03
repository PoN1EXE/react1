import { Header } from './components/Header/Header.jsx'
import { TextSection } from './components/TextSection.jsx'
import { ButtonSection } from './components/ButtonSection.jsx'
import { IntroSection } from './components/IntroSection.jsx'
import { TabsSec } from './components/TabsSec.jsx'
import { FeedBack } from './components/FeedBack.jsx'
import { useState } from 'react'
import { UserSearchWithModal } from './components/UserSearchWithModal.jsx'

const App = () => {
  const [tab, setTab] = useState('effect')

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
        {tab === 'effect' && <UserSearchWithModal />}
      </main>
    </>
  )
}

export { App }

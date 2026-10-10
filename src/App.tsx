import './style.css'
import { Analytics } from '@vercel/analytics/react';

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import SkillSection from './sections/SkillSection'
import VIPSection from './sections/VIPSection'
import JourneySection from './sections/JourneySection'
import FinalCTA from './sections/FinalCTA'

const LOCK_WEBSITE = false; // Set to true to lock the website

function App() {
  return (
   <>
   {LOCK_WEBSITE ? (
    <div className="lock-screen">
      <h1>Website Locked</h1>
      <p>This website is currently locked. Please check back later.</p>
    </div>
   ) : (
    <> <main className="page">
      <Navbar />
      <Hero />

      <div className="content">
        <SkillSection />
        <VIPSection />
        <JourneySection />
        <FinalCTA />

        <p className="disclaimer">
          Educational content only. Trading involves substantial risk and
          losses can occur. No profit or return is guaranteed.
        </p>
      </div>
    </main></>)}

    <Analytics/>
   </>
  )
}

export default App

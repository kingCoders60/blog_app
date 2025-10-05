import React from 'react'
import HeroSection from '../components/HeroSection'
import { NavbarDemo } from '../components/Navbar2'
import { AppleCard } from '../components/AppleCard'
import { FeatureSection1 } from '../components/FeatureSection1'
import { FeatureSection2 } from '../components/FeatureSection2'
import { BentoGridLayout } from '../components/BentoGrid'
import { Searchbar } from '../components/Searchbar'
import Footer from '../components/Footer'
import Faq1 from '../components/faq-1'
import WaitlistPage from '../components/waitlist'
import { useDarkMode } from '../contexts/DarkModeContext'

function Home() {
  const { isDarkMode } = useDarkMode();
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
        {/* <NavbarDemo /> */}
        <HeroSection />
        <AppleCard />
        <FeatureSection1 />
        <BentoGridLayout />
        <FeatureSection2 />
        <Searchbar />
        <WaitlistPage />
        <Faq1 />
        <Footer />
    </div>
  )
}

export default Home
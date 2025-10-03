import React from 'react'
import HeroSection from '../components/HeroSection'
import { NavbarDemo } from '../components/Navbar2'
import { AppleCard } from '../components/AppleCard'
import { FeatureSection1 } from '../components/FeatureSection1'
import { FeatureSection2 } from '../components/FeatureSection2'
import { BentoGridLayout } from '../components/BentoGrid'
import { Searchbar } from '../components/Searchbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
        <NavbarDemo />
        <HeroSection />
        <AppleCard />
        <FeatureSection1 />
        <BentoGridLayout />
        <FeatureSection2 />
        <Searchbar />
        <Footer />
    </div>
  )
}

export default Home
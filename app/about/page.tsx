import CorePrinciplesSection from '@/components/about/CorePrinciplesSection'
import HeroSection from '@/components/about/HeroSection'
import LeadershipSection from '@/components/about/LeadershipSection'
import MissionVisionSection from '@/components/about/MissionVisionSection'
import StorySection from '@/components/about/StorySection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <MissionVisionSection />
        <CorePrinciplesSection />
        <LeadershipSection />
      </main>
      <Footer />
    </>
  )
}

export default page
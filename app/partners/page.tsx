import Footer from '@/components/Footer'
import Header from '@/components/Header'
import GlassForm from '@/components/partnership/GlassForm'
import HeroSection from '@/components/partnership/HeroSection'
import PartnershipOptions from '@/components/partnership/PartnershipOptions'
import TrustedBySection from '@/components/partnership/TrustedBySection'
import WhyPartnerSection from '@/components/partnership/WhyPartnerSection'
import React from 'react'

const page = () => {
  return (
     <>
      <Header />
      <main>
        <HeroSection />
        <WhyPartnerSection />
        <TrustedBySection />
        <PartnershipOptions />
        <GlassForm />
      </main>
      <Footer />
    </>
  )
}

export default page
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import CoreServicesSection from '@/components/services/CoreServicesSection'
import CTASection from '@/components/services/CTASection'
import HeroSection from '@/components/services/HeroSection'
import PerformanceGrid from '@/components/services/PerformanceGrid'
import TestimonialsSection from '@/components/services/TestimonialsSection'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CoreServicesSection />
        {/* <TestimonialsSection /> */}
        <CTASection />
        <PerformanceGrid />
      </main>
      <Footer />
    </>
  )
}

export default page
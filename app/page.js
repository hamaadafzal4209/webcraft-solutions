import BlogSection from '@/components/Home/Blog'
import ContactComponent from '@/components/Home/Contact'
import Hero from '@/components/Home/Hero'
import PortfolioSection from '@/components/Home/Portfolio'
import Services from '@/components/Home/Services'
import TeamSection from '@/components/Home/Team'
import TestimonialSlider from '@/components/Home/Testimonial'
import WhoWeAre from '@/components/Home/WhoWeAre'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <WhoWeAre/>
      {/* <Services/>
      <TeamSection/>
      <PortfolioSection/>
      <TestimonialSlider/>
      <BlogSection/>
      <ContactComponent/> */}
    </div>
  )
}

export default page

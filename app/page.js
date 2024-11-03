import BlogSection from '@/components/Home/Blog'
import Hero from '@/components/Home/Hero'
import PortfolioSection from '@/components/Home/Portfolio'
import Services from '@/components/Home/Services'
import TeamSection from '@/components/Home/Team'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <TeamSection/>
      <PortfolioSection/>
      <BlogSection/>
    </div>
  )
}

export default page

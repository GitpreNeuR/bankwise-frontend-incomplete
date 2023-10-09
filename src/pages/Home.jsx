import { Button } from '@/components/ui/button'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './sections/HomeNav'
import HomeHero from './sections/HomeHero'
import HomeImg from './sections/HomeImg'
import HomeFeatures from './sections/HomeFeatures'
import HomeAccordion from './sections/HomeAccordion'

function Home() {
  return (
    <>
<main className="h-full bg-[#161B2C] overflow-auto">
    <div className="mx-auto relative h-full w-full">
          <HomeNav/>
          <HomeHero/>
          <HomeFeatures/>
          <HomeImg/>
          <HomeAccordion/>
          
        </div>
      </main>
    </>
  )
}

export default Home
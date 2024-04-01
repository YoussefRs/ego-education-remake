import React from 'react'
import "./Home.css"
import HomeHero from '../../components/Home/HomeHero'
import HomeAbout from '../../components/Home/HomeAbout'
import HomeFeatures from '../../components/Home/HomeFeatures'
import HomeCourseSlider from '../../components/Home/HomeCourseSlider'
import HomeFeatures_2 from '../../components/Home/HomeFeatures_2'
import HomeLecturers from '../../components/Home/HomeLecturers'

function Home() {
  return (
    <>
        <HomeHero />
        <HomeAbout />
        <HomeFeatures />
        <HomeCourseSlider />
        <HomeFeatures_2 />
        <HomeLecturers />
    </>
  )
}

export default Home
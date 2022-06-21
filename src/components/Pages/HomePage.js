import React from 'react'
import Footer from './Footer'
import MainSection from './MainSection'
import ProfileInfo from './ProfileInfo'
import SideBar from './SideBar'

function HomePage() {
  return (
    <div>
        <SideBar/>
        <MainSection/>
        <ProfileInfo/>
        <Footer/>
    </div>
  )
}

export default HomePage
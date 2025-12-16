import React, { useState } from 'react'
import Banner from '../components/Banner'
import HolidayPackages from '../components/HolidayPackages'
import CarRental from '../components/CarRental'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'

const Home = () => {
  const [searchFilters, setSearchFilters] = useState(null)

  const handleSearch = (filters) => {
    setSearchFilters(filters)
  }

  const handleClearSearch = () => {
    setSearchFilters(null)
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="home">
      <Banner onSearch={handleSearch} />
      <HolidayPackages searchFilters={searchFilters} onClearSearch={handleClearSearch} />
      <CarRental searchFilters={searchFilters} onClearSearch={handleClearSearch} />
      <Features />
      <Testimonials />
    </div>
  )
}

export default Home


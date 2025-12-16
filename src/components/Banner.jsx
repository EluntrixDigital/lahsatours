import React, { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'
import { Search, Calendar, MapPin } from 'lucide-react'

const Banner = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    to: '',
    date: ''
  })
  const [availableCities, setAvailableCities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCities = async () => {
      try {
        // Fetch packages for destination cities
        const packagesSnapshot = await getDocs(collection(db, 'holidayPackages'))
        const packageLocations = new Set()
        packagesSnapshot.docs.forEach(doc => {
          const data = doc.data()
          if (data.location) {
            packageLocations.add(data.location)
          }
        })

        // Sort locations
        const sortedLocations = Array.from(packageLocations).sort()
        setAvailableCities(sortedLocations)
      } catch (error) {
        console.error('Error fetching cities:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCities()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSearch) {
      onSearch(formData)
    }
    // Scroll to packages section
    const packagesSection = document.getElementById('packages')
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="relative min-h-[500px] md:h-[650px] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-0 h-full flex items-center">
        <div className="w-full">
          <div className="text-center mb-6 md:mb-12">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-semibold mb-4 md:mb-8 border border-white/30 tracking-wide uppercase">
              <span className="hidden sm:inline">Atithi Devo Bhava - Serving Since 2010</span>
              <span className="sm:hidden">Since 2010</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 drop-shadow-2xl leading-tight tracking-tight px-2">
              Discover Incredible
              <span className="block text-white mt-1 md:mt-2">
                India With Us
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/95 max-w-3xl mx-auto mb-6 md:mb-10 drop-shadow-lg font-light px-2">
              Explore the rich heritage, diverse culture, and breathtaking landscapes of India with our curated tour packages and premium car rentals
            </p>
            <div className="hidden md:flex items-center justify-center space-x-12 text-white/95">
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">50K+</div>
                <div className="text-sm font-medium uppercase tracking-wide">Happy Yatris</div>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">28+</div>
                <div className="text-sm font-medium uppercase tracking-wide">Indian States</div>
              </div>
              <div className="w-px h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-1">4.8</div>
                <div className="text-sm font-medium uppercase tracking-wide">Average Rating</div>
              </div>
            </div>
            {/* Mobile Stats - Compact Version */}
            <div className="md:hidden flex items-center justify-center space-x-4 text-white/95 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-[10px] font-medium uppercase">Yatris</div>
              </div>
              <div className="w-px h-10 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">28+</div>
                <div className="text-[10px] font-medium uppercase">States</div>
              </div>
              <div className="w-px h-10 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">4.8</div>
                <div className="text-[10px] font-medium uppercase">Rating</div>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {/* To */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-2 md:mb-2.5 uppercase tracking-wide">
                    <MapPin className="inline h-3 w-3 md:h-3.5 md:w-3.5 mr-1 md:mr-1.5 text-primary-600" />
                    To
                  </label>
                  <select
                    name="to"
                    value={formData.to}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-gray-900 font-medium bg-white text-sm md:text-base"
                    required
                  >
                    <option value="">Destination city</option>
                    {availableCities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-2 md:mb-2.5 uppercase tracking-wide">
                    <Calendar className="inline h-3 w-3 md:h-3.5 md:w-3.5 mr-1 md:mr-1.5 text-primary-600" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2.5 md:px-4 md:py-3.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-gray-900 font-medium text-sm md:text-base"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-4 md:mt-7 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 md:py-4 rounded-lg font-bold text-sm md:text-base hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-[1.01] flex items-center justify-center space-x-2 shadow-xl uppercase tracking-wide"
              >
                <Search className="h-4 w-4 md:h-5 md:w-5" />
                <span>Search Tours</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </div>
  )
}

export default Banner


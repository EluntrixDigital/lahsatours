import React from 'react'
import { FileText, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TermsConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center mb-8">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
                <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                Please read these Terms and Conditions carefully before using our services. By accessing or using Varanasi Tours, you agree to be bound by these terms.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using the services of Varanasi Tours, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Varanasi Tours provides travel and tourism services including but not limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Holiday packages and tour arrangements</li>
                    <li>Car rental services</li>
                    <li>Travel consultation and planning</li>
                    <li>Related travel services</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Booking and Payment</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    All bookings are subject to availability and confirmation. Payment terms are as follows:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Full payment or deposit as specified must be made at the time of booking</li>
                    <li>All prices are in Indian Rupees (INR) unless otherwise stated</li>
                    <li>Prices are subject to change without prior notice</li>
                    <li>Payment can be made through accepted payment methods</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation and Refunds</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Cancellation policies vary by service type. Please refer to our Cancellation Policy and Refund Policy for detailed information regarding cancellations, refunds, and applicable charges.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Travel Documents</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    It is the responsibility of the traveler to ensure they have:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Valid travel documents including passports, visas, and permits</li>
                    <li>Required health certificates and vaccinations</li>
                    <li>Travel insurance as recommended</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Liability</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Varanasi Tours acts as an intermediary between travelers and service providers. We are not liable for any loss, damage, injury, or inconvenience caused by third-party service providers. Travelers are advised to obtain appropriate travel insurance.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Changes to Services</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Varanasi Tours reserves the right to modify, suspend, or discontinue any service at any time without prior notice. We are not liable to you or any third party for any modification, suspension, or discontinuation of services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the property of Varanasi Tours and is protected by copyright and other intellectual property laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For any questions regarding these Terms and Conditions, please contact us at:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="text-gray-700"><strong>Email:</strong> info@varanasitours.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> 88401 42147</p>
                    <p className="text-gray-700"><strong>Address:</strong> Ashok Marg, Road, near Tibbati Temple, Sarnath, Varanasi, Uttar Pradesh 221007</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default TermsConditions


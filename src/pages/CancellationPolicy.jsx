import React from 'react'
import { XCircle, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const CancellationPolicy = () => {
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
                <XCircle className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Cancellation Policy</h1>
                <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                This Cancellation Policy outlines the terms and conditions for cancelling bookings with Varanasi Tours. Please read this policy carefully before making a booking.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. General Cancellation Terms</h2>
                  <p className="text-gray-700 leading-relaxed">
                    All cancellations must be made in writing via email or through our customer service. Cancellation charges apply based on the time of cancellation and the type of service booked. The cancellation charges are calculated from the date of receipt of the cancellation request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Holiday Packages Cancellation</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Cancellation Charges for Holiday Packages:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>30+ days before departure:</strong> 5% of total package cost (processing fee)</li>
                      <li><strong>15-30 days before departure:</strong> 30% of total package cost</li>
                      <li><strong>7-14 days before departure:</strong> 50% of total package cost</li>
                      <li><strong>3-6 days before departure:</strong> 75% of total package cost</li>
                      <li><strong>Less than 3 days before departure:</strong> 100% of total package cost (no refund)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Car Rental Cancellation</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Cancellation Charges for Car Rentals:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>48+ hours before rental start:</strong> 5% of total rental cost (processing fee)</li>
                      <li><strong>24-48 hours before rental start:</strong> 50% of total rental cost</li>
                      <li><strong>Less than 24 hours before rental start:</strong> 100% of total rental cost (no refund)</li>
                      <li><strong>No-show:</strong> 100% of total rental cost (no refund)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Special Circumstances</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <p className="text-gray-700 leading-relaxed mb-2">
                      <strong>Force Majeure Events:</strong>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      In case of force majeure events (natural disasters, pandemics, government restrictions, etc.), cancellation charges may be waived or reduced. Each case will be evaluated individually, and we will work with you to find the best solution.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation by Varanasi Tours</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If we are forced to cancel a booking due to circumstances beyond our control, we will provide you with:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
                    <li>Full refund of all payments made</li>
                    <li>Alternative booking options (subject to availability)</li>
                    <li>Compensation as per applicable regulations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Non-Refundable Components</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The following components are non-refundable in case of cancellation:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Processing and administrative fees</li>
                    <li>Third-party charges (visa fees, insurance premiums, etc.)</li>
                    <li>Services already utilized</li>
                    <li>Special offers and promotional discounts</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. How to Cancel</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To cancel your booking:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li>Send an email to info@varanasitours.com with your booking reference number</li>
                    <li>Call us at 88401 42147 during business hours</li>
                    <li>Provide your booking details and reason for cancellation</li>
                    <li>Wait for confirmation email with cancellation charges</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Refund Processing</h2>
                  <p className="text-gray-700 leading-relaxed">
                    After cancellation, any applicable refund will be processed within 7-14 business days. The refund will be credited to the original payment method used for booking. Please refer to our Refund Policy for detailed information.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Modification vs Cancellation</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you wish to modify your booking (change dates, services, etc.) instead of cancelling, please contact us. Modification charges may apply, but they are typically lower than cancellation charges. Modifications are subject to availability.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For cancellation requests or questions about this policy, please contact us at:
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

export default CancellationPolicy


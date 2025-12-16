import React from 'react'
import { RefreshCw, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const RefundPolicy = () => {
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
                <RefreshCw className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Refund Policy</h1>
                <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed mb-6">
                At Varanasi Tours, we strive to provide the best travel experiences. This Refund Policy outlines the terms and conditions for refunds on our services.
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Eligibility</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Refunds may be available under the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Cancellation made within the specified time frame</li>
                    <li>Service not provided as described</li>
                    <li>Force majeure events (natural disasters, pandemics, etc.)</li>
                    <li>Service provider cancellation</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Refund Processing Time</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Once your refund request is approved, the refund will be processed within 7-14 business days. The actual time for the refund to reflect in your account depends on your bank or payment provider.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Holiday Packages</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Refund Policy for Holiday Packages:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>30+ days before departure:</strong> Full refund minus processing fees (5% of total amount)</li>
                      <li><strong>15-30 days before departure:</strong> 70% refund</li>
                      <li><strong>7-14 days before departure:</strong> 50% refund</li>
                      <li><strong>Less than 7 days before departure:</strong> No refund (unless due to force majeure)</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Car Rentals</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Refund Policy for Car Rentals:</strong>
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li><strong>48+ hours before rental start:</strong> Full refund minus processing fees (5% of total amount)</li>
                      <li><strong>24-48 hours before rental start:</strong> 50% refund</li>
                      <li><strong>Less than 24 hours before rental start:</strong> No refund</li>
                      <li><strong>Early return:</strong> No partial refund for unused days</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Non-Refundable Items</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The following items are typically non-refundable:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Processing fees and administrative charges</li>
                    <li>Third-party service charges (visa fees, insurance, etc.)</li>
                    <li>Special offers and promotional discounts</li>
                    <li>Services already utilized</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. How to Request a Refund</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To request a refund, please:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li>Contact us via email or phone with your booking reference number</li>
                    <li>Provide reason for cancellation/refund request</li>
                    <li>Submit any required documentation</li>
                    <li>Wait for confirmation and processing</li>
                  </ol>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Partial Refunds</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In cases where only part of the service is cancelled or not provided, we will calculate the refund based on the unused portion of the service, minus applicable cancellation fees.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disputes</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you are not satisfied with our refund decision, you may contact us for review. We will investigate your case and provide a resolution within 10 business days.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed">
                    For refund requests or questions about this policy, please contact us at:
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

export default RefundPolicy


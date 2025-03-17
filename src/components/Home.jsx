import React from 'react';

function Home() {
  return (
    <div className="text-gray-800">
      {/* HERO */}
      <section className="bg-blue-600 text-white py-24 text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Professional Home Services, On-Demand</h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Book trusted professionals for all your home needs in just a few clicks
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded">
          Book a Service
        </button>
      </section>

      {/* BENEFITS */}
      <section className="py-16 text-center" id="benefits">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Benefits of Using MONKEY5</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <div className="flex-1 p-4">
            <div className="text-6xl mb-4">🕒</div>
            <h3 className="text-xl font-bold mb-2">Convenience</h3>
            <p>Book home services quickly and easily from your phone or computer.</p>
          </div>
          <div className="flex-1 p-4">
            <div className="text-6xl mb-4">👨‍🔧</div>
            <h3 className="text-xl font-bold mb-2">Trusted Professionals</h3>
            <p>We carefully vet all of our service providers to ensure quality and reliability.</p>
          </div>
          <div className="flex-1 p-4">
            <div className="text-6xl mb-4">🔒</div>
            <h3 className="text-xl font-bold mb-2">Secure Payments</h3>
            <p>Pay securely through our platform with our secure payment system.</p>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="py-16 text-center bg-gray-100" id="services">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">Our Services</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-6xl mb-4">🧹</div>
            <h3 className="text-xl font-bold mb-2">General Cleaning</h3>
            <p className="mb-4">Professional cleaning services for your entire home</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More →
            </button>
          </div>
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-6xl mb-4">🍳</div>
            <h3 className="text-xl font-bold mb-2">Home Cooking</h3>
            <p className="mb-4">Experienced chefs for your daily meals or special occasions</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More →
            </button>
          </div>
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-6xl mb-4">👶</div>
            <h3 className="text-xl font-bold mb-2">Babysitting</h3>
            <p className="mb-4">Trusted childcare professionals available 24/7</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Learn More →
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 text-center" id="how-it-works">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Choose Service</h3>
            <p>Select from our professional home services</p>
          </div>
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-6xl mb-4">⏰</div>
            <h3 className="text-xl font-bold mb-2">Pick Time & Staff</h3>
            <p>Select your preferred time and available professionals</p>
          </div>
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-6xl mb-4">😊</div>
            <h3 className="text-xl font-bold mb-2">Enjoy Service</h3>
            <p>Relax while our experts handle your home needs</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-gray-100" id="testimonials">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 max-w-5xl mx-auto">
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="mb-2">
              “The cleaning service was exceptional! My home has never been cleaner.”
            </p>
            <p className="text-sm font-bold">- Sarah T.</p>
          </div>
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="mb-2">
              “The chef prepared an amazing meal for our anniversary. Highly recommend!”
            </p>
            <p className="text-sm font-bold">- Michael L.</p>
          </div>
          <div className="flex-1 bg-white p-6 rounded shadow">
            <div className="text-yellow-500 text-xl mb-2">★★★★★</div>
            <p className="mb-2">
              “Our babysitter was wonderful with the kids. We’ll definitely book again!”
            </p>
            <p className="text-sm font-bold">- Emily R.</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center bg-blue-600 text-white" id="cta">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Home?</h2>
        <p className="mb-6">Join thousands of happy customers enjoying our professional services</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded">
          Get Started Now
        </button>
      </section>
    </div>
  );
}

export default Home;

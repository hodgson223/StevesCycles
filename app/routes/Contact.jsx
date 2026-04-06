import React from "react";
import contactBike from "../Components/jump.jpg";
import Footer from "../Components/Footer";

export default function Contact() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* HERO */}
      <section
        className="relative min-h-[45vh] md:min-h-[55vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${contactBike})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-16">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold uppercase leading-tight">
              Contact Steve Does Bikes
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-100 leading-relaxed">
              Get in touch for mobile bike repairs, servicing, and maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Get In Touch
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you need a puncture repair, brake adjustment, full bike
              service, or general advice, feel free to get in touch. Mobile
              repairs are available across Swansea and surrounding areas.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Phone</h3>
                <p className="text-gray-600">Your phone number here</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Email</h3>
                <p className="text-gray-600">your@email.com</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Location</h3>
                <p className="text-gray-600">
                  Swansea and surrounding areas
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What do you need help with?"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Tell us about the repair or service you need"
                  className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-300 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
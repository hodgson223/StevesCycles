import React from "react";
import bikes from "../Components/bikes.jpg";
import steve from "../Components/Steve.jpg";
import Footer from "../Components/Footer";

export default function About() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bikes})`,
        }}
      >
        <div className="flex items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold uppercase">
            About Steve Does Bikes
          </h1>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Passion for Bikes
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            What started as a hobby quickly grew into a passion for bike maintenance and repair. 
            Spending countless hours working on bikes, learning the mechanics, and improving performance 
            led to developing strong hands-on experience across a wide range of repairs.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed">
            From mountain bikes to everyday commuters, every bike is treated with care and attention 
            to detail. The goal is simple — keep riders safe, confident, and enjoying their time on the bike.
          </p>

          <p className="text-gray-600 leading-relaxed">
            With a focus on convenience, Steve Does Bikes offers mobile repair services, bringing 
            professional bike maintenance directly to your home, workplace, or trailside.
          </p>
        </div>

        {/* IMAGE */}
        <div>
          <img
            src={steve}
            alt="Steve repairing bikes"
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

      </section>

      {/* EXTRA SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Passion Driven
              </h3>
              <p className="text-gray-600">
                Built from a genuine love for cycling and bike maintenance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Mobile Service
              </h3>
              <p className="text-gray-600">
                Repairs brought directly to you — no need to visit a shop.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">
                Reliable & Friendly
              </h3>
              <p className="text-gray-600">
                Honest service focused on quality and customer satisfaction.
              </p>
            </div>

          </div>
        </div>
        <Footer />
      </section>

    </div>
  );
}
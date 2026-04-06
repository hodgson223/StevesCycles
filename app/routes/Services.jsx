import React from "react";
import bike from "../Components/bike.jpg";
import Footer from "../Components/Footer";

export default function Services() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section
        className="relative h-[50vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bike})`,
        }}
      >
        <div className="flex items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-3xl md:text-5xl font-semibold uppercase">
            Our Bike Services
          </h1>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Service 1 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Puncture Repairs
            </h3>
            <p className="text-gray-600">
              Fast roadside or at-home puncture repair to get you back riding quickly.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Brake Adjustments
            </h3>
            <p className="text-gray-600">
              Ensure your brakes are safe and responsive with professional tuning.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Gear Tuning
            </h3>
            <p className="text-gray-600">
              Smooth gear shifting and drivetrain optimisation.
            </p>
          </div>

          {/* Service 4 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Full Bike Service
            </h3>
            <p className="text-gray-600">
              Complete inspection, cleaning, and adjustment of your bike.
            </p>
          </div>

          {/* Service 5 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Chain & Drivetrain
            </h3>
            <p className="text-gray-600">
              Cleaning, lubrication, and replacement of worn components.
            </p>
          </div>

          {/* Service 6 */}
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">
              Bike Assembly
            </h3>
            <p className="text-gray-600">
              Professional assembly for new bikes or upgrades.
            </p>
          </div>

        </div>
      </section>
      <Footer />

    </div>
  );
}
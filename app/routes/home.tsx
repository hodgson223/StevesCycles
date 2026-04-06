import React from "react";
import background from "../Components/background.jpg";
import { Wrench, Timer, Cog, Check } from "lucide-react";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <section
        className="relative min-h-[58vh] sm:min-h-[62vh] md:min-h-[68vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.38), rgba(0,0,0,0.38)), url(${background})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-40 sm:pt-44 md:pt-36 pb-12 sm:pb-14 md:pb-16">
          <div className="max-w-[300px] sm:max-w-md md:max-w-xl text-white">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight uppercase">
              Mobile & Home
              <br />
              Bike Repairs
            </h1>

            <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-medium uppercase text-yellow-400 leading-snug">
              Servicing Swansea and
              <br />
              Surrounding Areas
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 sm:-mt-8 md:-mt-12 bg-white py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10">
          <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 uppercase tracking-wide leading-snug">
             Same Day Service!
          </h2>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
            <div className="text-center px-2 sm:px-4 md:px-8 md:border-r border-gray-200">
              <div className="flex justify-center mb-3">
                <Wrench className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 uppercase leading-snug">
                Trailside & At Home Repairs
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                Expert bike repairs at your home, office, or trailside from a
                fully equipped van.
              </p>
            </div>

            <div className="text-center px-2 sm:px-4 md:px-8 md:border-r border-gray-200">
              <div className="flex justify-center mb-3">
                <Timer className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 uppercase leading-snug">
                Fast, Reliable & Affordable
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                Same-day service available to get you back on the bike quickly.
              </p>
            </div>

            <div className="text-center px-2 sm:px-4 md:px-8">
              <div className="flex justify-center mb-3">
                <Cog className="w-8 h-8 sm:w-9 sm:h-9 text-gray-800" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 uppercase leading-snug">
                20 Years Of Experience
              </h3>
              <p className="mt-2 text-sm sm:text-base text-gray-600 leading-6 sm:leading-7">
                Friendly, professional, and certified mechanic with 20 years
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative min-h-[34vh] sm:min-h-[38vh] md:min-h-[42vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.42), rgba(0,0,0,0.42)), url(${background})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-10 py-10 sm:py-12 md:py-14">
          <div className="max-w-[320px] sm:max-w-md md:max-w-xl text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Expert mobile bike repairs
              <br />
              in <span className="text-yellow-400">YOUR</span> area
            </h2>

            <ul className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
                <span>Puncture Repair & Wheels</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
                <span>Gear & Brake Adjustments</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
                <span>Chain & Drivetrain Services</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base md:text-lg">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 mt-1 shrink-0" />
                <span>Bike Assembly & Maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}
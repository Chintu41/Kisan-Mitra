// import React from 'react'
// import {Link} from 'react-router'
// import logo from "../assets/logo.png"
import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/logo.png";
import heroBg from "../assets/hero_bg.png";

// const Herosection = () => {
//   return (
//     <div>
//         <section>
//         <div>
//         <img
//         src={logo} alt="Kisan Mitra Logo" className="w-24 h-24 mb-6 animate-fade-in"/>

//         <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4">
//         KISAN MITRA
//         </h1>

//        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
//         Your Farming Companion — Empowering farmers with smart tools for seeds,
//         markets, transport, and expert guidance.
//       </p>

//        <Link to="/loginselection"
//         className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded-xl shadow-md transition-all"
//       >
//         🌱 Start Farming Smarter
//       </Link>
//         </div>
//         </section>
//     </div>
//   )
// }

// export default Herosection

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Sun, Droplets } from "lucide-react";
import { Link } from "react-router";

function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-fade-in-slow"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">

        {/* Logo Animation */}
        <div className="mb-8 animate-bounce-slow">
          <img
            src={logo}
            alt="Kisan Mitra Logo"
            className="w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg animate-slide-up">
          KISAN <span className="text-green-400">MITRA</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-gray-100 max-w-3xl mb-10 leading-relaxed font-light drop-shadow-md animate-slide-up delay-100">
          Your Farming Companion — Empowering farmers with smart tools for seeds,
          markets, transport, and expert guidance.
        </p>

       <Link to="/loginselection"
        className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded-xl shadow-md transition-all"
      >
        🌱 Start Farming Smarter
      </Link>
        {/* CTA Button */}
        <div className="animate-slide-up delay-200">
          <Link
            to="/loginSelection"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-green-600 font-pj rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 hover:bg-green-700 hover:scale-105 shadow-lg hover:shadow-green-500/30"
          >
            <span className="mr-2">🌱</span> Start Farming Smarter
            <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-600 opacity-20 blur-lg transition-all duration-200 group-hover:opacity-40 group-hover:-inset-4"></div>
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default HeroSection;

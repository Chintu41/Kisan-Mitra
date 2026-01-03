import React from 'react';
import { Link } from 'react-router';
import logo from "../assets/logo.png";
import heroBg from "../assets/hero_bg.png";

const Herosection = () => {
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

       <Link to="/loginSelection"
        className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded-xl shadow-md transition-all"
      >
        🌱 Start Farming Smarter
      </Link>
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default Herosection;
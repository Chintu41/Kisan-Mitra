import React from 'react'
import {Link} from 'react-router'
import logo from "../assets/logo.png"

const Herosection = () => {
  return (
    <div>
        <section>
        <div>
        <img
        src={logo} alt="Kisan Mitra Logo" className="w-24 h-24 mb-6 animate-fade-in"/>

        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 mb-4">
        KISAN MITRA
        </h1>

       <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
        Your Farming Companion — Empowering farmers with smart tools for seeds,
        markets, transport, and expert guidance.
      </p>

       <Link to="/loginselection"
        className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white text-lg font-semibold rounded-xl shadow-md transition-all"
      >
        🌱 Start Farming Smarter
      </Link>
        </div>
        </section>
    </div>
  )
}

export default Herosection
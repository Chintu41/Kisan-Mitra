import React from "react";
import farmerImg from "../assets/farmerImg.jpg";
import customerImg from "../assets/customerImg.jpg"
import agriexport from "../assets/agriexport.png"
import adminImg from "../assets/adminImg.jpg"
import { Link } from "react-router";

const LoginSelection = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-emerald-100 p-6">
      <h1 className="text-4xl font-extrabold text-green-800 mb-2">
        Welcome to Kisan Mitra
      </h1>
      <p className="text-gray-600 mb-10 text-xl font-style: italic">
        Choose how you want to use the app
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Farmer Card */}
        <div className="bg-white shadow-m rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-xl transition-all">
          <img src={farmerImg} alt="Farmer" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-2">Farmer</h2>
          <p className="text-gray-600 mb-4 font-style: italic">
            Sell crops, buy seeds, book vehicles, and get expert advice.
          </p>
          <ul className="text-left text-gray-700 list-disc list-inside mb-6">
            <li>Sell vegetables</li>
            <li>Buy seeds & pesticides</li>
            <li>Book transport</li>
            <li>Consult experts</li>
          </ul>
          <Link
            to="/login?role=farmer"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Login as Farmer
          </Link>
        </div>

        {/* Customer Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
          <img src={customerImg} alt="Farmer" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-2">Customer</h2>
          <p className="text-gray-600 mb-4 font-style: italic">
            Buy fresh vegetables and crops directly from farmers.
          </p>
          <ul className="text-left text-gray-700 list-disc list-inside mb-6">
            <li>Buy fresh produce</li>
            <li>Bulk ordering</li>
            <li>Track deliveries</li>
            <li>Quality assured</li>
          </ul>
          <Link
            to="/login?role=customer"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Login as Customer
          </Link>
        </div>

        {/* {Agri-Doctor} */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
          <img src={agriexport} alt="Agri Expert" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Agri Expert
          </h2>
          <p className="text-gray-600 mb-4 font-style: italic">
            Provide consultations and help farmers with crop health.
          </p>
          <ul className="text-left text-gray-700 list-disc list-inside mb-6">
            <li>Manage appointments</li>
            <li>Online consultations</li>
            <li>Earn from expertise</li>
            <li>Help farmers</li>
          </ul>
          <Link
            to="/login?role=expert"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Login as Expert
          </Link>
        </div>

        {/* Admin Card */}
        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition-all">
          <img src={adminImg} alt="Admin" className="w-24 h-24 mb-4" />
          <h2 className="text-2xl font-bold text-green-700 mb-2">Admin</h2>
          <p className="text-gray-600 mb-4 font-style: italic">
            Manage platform operations, users, and data integrity.
          </p>
          <ul className="text-left text-gray-700 list-disc list-inside mb-6">
            <li>Monitor system usage</li>
            <li>Manage users and experts</li>
            <li>Approve listings</li>
            <li>Access analytics</li>
          </ul>
          <Link
            to="/login?role=admin"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
            Login as Admin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;

import React, { useState } from "react";
import { motion } from "framer-motion";

const ShippingpartnersModel = ({ onClose }) => {
  const [methodName, setMethodName] = useState("");
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-[600px] border-t-[6px] border-[#F77F00]"
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#F77F00]">Shipping Method Form</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">✕</button>
        </div>

        {/* Select Method Name */}
        <label className="block mb-2 font-medium text-[#0B0F19]">Select Method Name<span className="text-red-500">*</span></label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
          placeholder="Enter method name"
          value={methodName}
          onChange={(e) => setMethodName(e.target.value)}
        />

        {/* Shipping Method Login ID */}
        <label className="block mb-2 font-medium text-[#0B0F19] mt-3">Shipping Method Login Id<span className="text-red-500">*</span></label>
        <div className="relative">
          <input
            type="text"
            className="w-full p-2 border rounded pl-10 focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            placeholder="Enter login id"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔑</span>
        </div>

        {/* Shipping Method Login Password */}
        <label className="block mb-2 font-medium text-[#0B0F19] mt-3">Shipping Method Login Password<span className="text-red-500">*</span></label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full p-2 border rounded pl-10 focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            placeholder="Enter login password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />
          <span className="absolute left-3 top-2.5 text-gray-500">🔒</span>
          <button
            type="button"
            className="absolute right-3 top-2.5 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={onClose}>Close</button>
          <button className="bg-[#F77F00] text-white px-4 py-2 rounded hover:bg-[#d96d00]">Confirm</button>
        </div>
      </motion.div>
    </div>
  );
};

export default ShippingpartnersModel;
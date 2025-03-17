import React, { useState } from "react";
import { motion } from "framer-motion";

const SocialLinksModel = ({ onClose }) => {
  const [socialName, setSocialName] = useState("");
  const [socialLink, setSocialLink] = useState("");
  const [icon, setIcon] = useState("fab fa-facebook"); // Default icon

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
          <h2 className="text-xl font-bold text-[#F77F00]">Social Links Form</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">
            ✕
          </button>
        </div>

        {/* Social Name */}
        <label className="block mb-2 font-medium text-[#0B0F19]">
          Social Name<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
          placeholder="Enter social name"
          value={socialName}
          onChange={(e) => setSocialName(e.target.value)}
        />

        {/* Social Link */}
        <label className="block mb-2 font-medium text-[#0B0F19] mt-3">
          Social Link<span className="text-red-500">*</span>
        </label>
        <input
          type="url"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
          placeholder="Enter social link"
          value={socialLink}
          onChange={(e) => setSocialLink(e.target.value)}
        />

        {/* Icon Selection */}
        <label className="block mb-2 font-medium text-[#0B0F19] mt-3">
          Icon<span className="text-red-500">*</span>
        </label>
        <div className="flex items-center space-x-3">
          <i className={`${icon} text-3xl text-[#F77F00]`}></i>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
            placeholder="Enter FontAwesome icon class (e.g., fab fa-twitter)"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={onClose}>
            Close
          </button>
          <button className="bg-[#F77F00] text-white px-4 py-2 rounded hover:bg-[#d96d00]">
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SocialLinksModel;

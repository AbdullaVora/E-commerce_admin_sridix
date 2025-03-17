import { useState } from "react";
import { motion } from "framer-motion";

const VariantsModel = ({ onClose }) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDescription, setCategoryDescription] = useState("");
    const [parentCategory, setParentCategory] = useState("");

    const parentCategories = ["Electronics", "Fashion", "Home & Kitchen", "Sports", "Books"];

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
                    <h2 className="text-xl font-bold text-[#F77F00]">Add New Category</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">
                        ✕
                    </button>
                </div>

                {/* Category Name */}
                <label className="block mb-2 font-medium text-[#0B0F19]">Category Name <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    placeholder="Enter Category Name"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                />

                {/* Category Description */}
                <label className="block mb-2 font-medium text-[#0B0F19] mt-3">Category Description</label>
                <textarea
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    placeholder="Enter Category Description"
                    value={categoryDescription}
                    onChange={(e) => setCategoryDescription(e.target.value)}
                ></textarea>

                {/* Parent Category */}
                <label className="block mb-2 font-medium text-[#0B0F19] mt-3">Parent Category</label>
                <select
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    value={parentCategory}
                    onChange={(e) => setParentCategory(e.target.value)}
                >
                    <option value="">Select Parent Category</option>
                    {parentCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-2 mt-4">
                    <button
                        className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                        onClick={onClose}
                    >
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

export default VariantsModel;

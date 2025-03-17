import { useState } from "react";
import { motion } from "framer-motion";
import { FaLink, FaFile } from "react-icons/fa";

const BannerModel = ({ onClose }) => {
    const [relatedTo, setRelatedTo] = useState("");
    const [categoryOptions, setCategoryOptions] = useState([]);
    const [desktopImage, setDesktopImage] = useState(null);
    const [mobileImage, setMobileImage] = useState(null);

    const categoryData = {
        Brand: ["Nike", "Adidas", "Puma"],
        Category: ["Shoes", "Clothing", "Accessories"],
    };

    const handleRelatedChange = (e) => {
        const selectedValue = e.target.value;
        setRelatedTo(selectedValue);
        setCategoryOptions(categoryData[selectedValue] || []);
    };

    const handleImageUpload = (event, type) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            if (type === "desktop") {
                setDesktopImage(imageUrl);
            } else {
                setMobileImage(imageUrl);
            }
        }
    };

    return (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg w-[800px] border-t-[6px] border-[#F77F00]"
            >
                {/* Modal Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#F77F00]">Add New Slider</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">
                        ✕
                    </button>
                </div>

                {/* Name Field */}
                <label className="block mb-2 font-medium text-[#0B0F19]">Name <span className="text-red-500">*</span></label>
                <div className="relative w-full">
                    <FaFile className="absolute left-3 top-3 text-gray-500" />
                    <input
                        type="text"
                        className="w-full pl-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                        placeholder="Enter Name"
                    />
                </div>

                {/* Related To & Category */}
                <div className="flex space-x-4 mt-3">
                    <div className="w-1/2">
                        <label className="block mb-2 font-medium text-[#0B0F19]">Related To <span className="text-red-500">*</span></label>
                        <select
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                            value={relatedTo}
                            onChange={handleRelatedChange}
                        >
                            <option value="">Select</option>
                            <option value="Brand">Brand</option>
                            <option value="Category">Category</option>
                        </select>
                    </div>

                    <div className="w-1/2">
                        <label className="block mb-2 font-medium text-[#0B0F19]">
                            {relatedTo ? relatedTo : "Category"} <span className="text-red-500">*</span>
                        </label>
                        <select
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                            disabled={!relatedTo}
                        >
                            <option value="">Select</option>
                            {categoryOptions.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Slider Link */}
                <label className="block mb-2 font-medium text-[#0B0F19] mt-3">Slider Link <span className="text-red-500">*</span></label>
                <div className="relative w-full">
                    <FaLink className="absolute left-3 top-3 text-gray-500" />
                    <input
                        type="url"
                        className="w-full pl-10 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00] bg-gray-100"
                        placeholder="Enter URL"
                    />
                </div>

                {/* Upload Images */}
                <div className="grid grid-cols-2 gap-4 mt-3">
                    {/* Desktop Image */}
                    <div>
                        <label className="block mb-2 font-medium text-[#0B0F19]">Desktop Banner <span className="text-red-500">*</span></label>
                        <div
                            className="w-full border rounded p-3 flex justify-center items-center cursor-pointer bg-gray-100"
                            onClick={() => document.getElementById("desktopUpload").click()}
                        >
                            {desktopImage ? (
                                <img src={desktopImage} alt="Desktop Banner" className="w-40 h-40 object-contain" />
                            ) : (
                                <div className="text-gray-500 text-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
                                        alt="Upload"
                                        className="w-16 h-16 mx-auto mb-2 opacity-60" />
                                    Click For Select Image
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            id="desktopUpload"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "desktop")}
                        />
                    </div>

                    {/* Mobile Image */}
                    <div>
                        <label className="block mb-2 font-medium text-[#0B0F19]">Mobile Banner <span className="text-red-500">*</span></label>
                        <div
                            className="w-full border rounded p-3 flex justify-center items-center cursor-pointer bg-gray-100"
                            onClick={() => document.getElementById("mobileUpload").click()}
                        >
                            {mobileImage ? (
                                <img src={mobileImage} alt="Mobile Banner" className="w-40 h-40 object-contain" />
                            ) : (
                                <div className="text-gray-500 text-center">
                                    <img src="https://cdn-icons-png.flaticon.com/512/126/126477.png"
                                        alt="Upload"
                                        className="w-16 h-16 mx-auto mb-2 opacity-60" />
                                    Click For Select Image
                                </div>
                            )}
                        </div>
                        <input
                            type="file"
                            id="mobileUpload"
                            className="hidden"
                            onChange={(e) => handleImageUpload(e, "mobile")}
                        />
                    </div>
                </div>

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

export default BannerModel;

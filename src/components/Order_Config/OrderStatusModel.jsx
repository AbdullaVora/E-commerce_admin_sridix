import { useState } from "react";
import { motion } from "framer-motion";

const OrderStatusModel = ({ onClose }) => {
    const [productCode, setProductCode] = useState("");
    const [productName, setProductName] = useState("");
    const [productStatus, setProductStatus] = useState("");
    const [updateDate, setUpdateDate] = useState("");

    const statusOptions = ["Pending", "In Progress", "Complete", "Cancelled"];

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
                    <h2 className="text-xl font-bold text-[#F77F00]">Update Order Status</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">
                        ✕
                    </button>
                </div>

                {/* Product Code */}
                <label className="block mb-2 font-medium text-[#0B0F19]">
                    Product Code <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    placeholder="Enter Product Code"
                    value={productCode}
                    onChange={(e) => setProductCode(e.target.value)}
                />

                {/* Product Name */}
                <label className="block mb-2 font-medium text-[#0B0F19] mt-3">
                    Product Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    placeholder="Enter Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                {/* Product Status (Dropdown) */}
                <label className="block mb-2 font-medium text-[#0B0F19] mt-3">
                    Product Status <span className="text-red-500">*</span>
                </label>
                <select
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    value={productStatus}
                    onChange={(e) => setProductStatus(e.target.value)}
                >
                    <option value="">Select Status</option>
                    {statusOptions.map((status, index) => (
                        <option key={index} value={status}>{status}</option>
                    ))}
                </select>

                {/* Update Date */}
                <label className="block mb-2 font-medium text-[#0B0F19] mt-3">
                    Update Date <span className="text-red-500">*</span>
                </label>
                <input
                    type="date"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#F77F00]"
                    value={updateDate}
                    onChange={(e) => setUpdateDate(e.target.value)}
                />

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

export default OrderStatusModel;

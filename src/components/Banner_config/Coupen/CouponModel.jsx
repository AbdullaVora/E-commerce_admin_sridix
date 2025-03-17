import { useState } from "react";
import { motion } from "framer-motion";
import { FaFileAlt, FaRupeeSign, FaPercent } from "react-icons/fa";

const CouponModel = ({ onClose }) => {
    const [couponType, setCouponType] = useState("amount");
    const [couponValue, setCouponValue] = useState("");
    const [amountRange, setAmountRange] = useState("");
    const [launchDate, setLaunchDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [maxUsage, setMaxUsage] = useState(1);
    
    return (
        <div className="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-lg w-[600px] border-t-[6px] border-[#F77F00]"
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-[#F77F00]">Coupon Form</h2>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-lg">✕</button>
                </div>

                <label className="block font-medium">Coupon Name <span className="text-red-500">*</span></label>
                <div className="relative w-full mb-3">
                    <FaFileAlt className="absolute left-3 top-3 text-gray-500" />
                    <input type="text" className="w-full pl-10 p-2 border rounded" placeholder="Enter Coupon Name" />
                </div>

                <label className="block font-medium">Coupon Type <span className="text-red-500">*</span></label>
                <div className="flex gap-4 mb-3">
                    <label className="flex items-center gap-2">
                        <input type="radio" value="percentage" checked={couponType === "percentage"} onChange={() => setCouponType("percentage")} /> In Percentage
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="radio" value="amount" checked={couponType === "amount"} onChange={() => setCouponType("amount")} /> In Amount
                    </label>
                </div>

                <label className="block font-medium">Coupon Value <span className="text-red-500">*</span></label>
                <div className="relative w-full mb-3">
                    {couponType === "amount" ? <FaRupeeSign className="absolute left-3 top-3 text-gray-500" /> : <FaPercent className="absolute left-3 top-3 text-gray-500" />}
                    <input type="number" className="w-full pl-10 p-2 border rounded" placeholder="Enter Value" value={couponValue} onChange={(e) => setCouponValue(e.target.value)} />
                </div>

                <label className="block font-medium">Coupon Amount Range <span className="text-red-500">*</span></label>
                <div className="relative w-full mb-3">
                    <FaRupeeSign className="absolute left-3 top-3 text-gray-500" />
                    <input type="number" className="w-full pl-10 p-2 border rounded" placeholder="Enter Amount" value={amountRange} onChange={(e) => setAmountRange(e.target.value)} />
                </div>

                <div className="flex gap-4 mb-3">
                    <div className="w-1/2">
                        <label className="block font-medium">Launch Date <span className="text-red-500">*</span></label>
                        <input type="date" className="w-full p-2 border rounded" value={launchDate} onChange={(e) => setLaunchDate(e.target.value)} />
                    </div>
                    <div className="w-1/2">
                        <label className="block font-medium">Expiry Date <span className="text-red-500">*</span></label>
                        <input type="date" className="w-full p-2 border rounded" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                    </div>
                </div>

                <label className="block font-medium">Max Used Limit <span className="text-red-500">*</span></label>
                <input type="number" className="w-full p-2 border rounded mb-4" value={maxUsage} onChange={(e) => setMaxUsage(e.target.value)} />

                <div className="flex justify-end gap-2">
                    <button className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={onClose}>Close</button>
                    <button className="bg-[#F77F00] text-white px-4 py-2 rounded hover:bg-[#d96d00]">Confirm</button>
                </div>
            </motion.div>
        </div>
    );
};

export default CouponModel;
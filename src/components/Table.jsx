import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";

const Table = ({ data, onEdit, onDelete, onToggle }) => {
    const [filteredData, setFilteredData] = useState(data || []);
    const [searchTerm, setSearchTerm] = useState("");
    const [status, setStatus] = useState(
        (data || []).reduce((acc, row) => ({ ...acc, [row.id]: row.isAction }), {})
    );
    const [limit, setLimit] = useState(10); // Default limit
    const [sortCriteria, setSortCriteria] = useState("latest"); // Default sorting criteria

    useEffect(() => {
        if (!data || data.length === 0) {
            setFilteredData([]);
            return;
        }

        let filtered = data;

        // Apply search filter
        if (searchTerm.trim()) {
            filtered = data.filter((row) => {
                return Object.keys(row).some((key) => {
                    if (
                        typeof row[key] === "boolean" ||
                        key === "isAction" ||
                        key === "isSlider" ||
                        key === "isBanner" ||
                        (typeof row[key] === "string" && row[key].startsWith("http"))
                    ) {
                        return false;
                    }
                    const value = String(row[key]).toLowerCase();
                    return value.includes(searchTerm.toLowerCase());
                });
            });
        }

        // Apply sorting
        if (sortCriteria === "latest") {
            filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (sortCriteria === "oldest") {
            filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        } else if (sortCriteria === "nameAtoZ") {
            filtered.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortCriteria === "nameZtoA") {
            filtered.sort((a, b) => b.name.localeCompare(a.name));
        }

        // Apply limit
        filtered = filtered.slice(0, limit);

        setFilteredData(filtered);
    }, [data, searchTerm, limit, sortCriteria]);

    const handleEdit = (id) => {
        if (onEdit) onEdit(id);
        console.log("Edit clicked for ID:", id);
    };

    const handleDelete = (id) => {
        if (onDelete) onDelete(id);
        console.log("Delete clicked for ID:", id);
    };

    const handleToggleStatus = (id) => {
        const newStatus = !status[id];
        setStatus((prev) => ({ ...prev, [id]: newStatus }));
        if (onToggle) onToggle(id, newStatus);
        console.log("Status toggled for ID:", id, "New Status:", newStatus);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleLimitChange = (e) => {
        setLimit(Number(e.target.value));
    };

    const handleSortChange = (e) => {
        setSortCriteria(e.target.value);
    };

    if (!data || data.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-md p-4 text-center text-gray-500">
                No Data Found
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "pending":
                return "bg-yellow-500 text-white";
            case "cancelled":
                return "bg-red-500 text-white";
            case "complete":
                return "bg-green-500 text-white";
            case "in progress":
                return "bg-blue-500 text-white";
            default:
                return "bg-gray-300 text-gray-700";
        }
    };

    const columns = Object.keys(data[0]).filter(column => column !== "isAction" && column !== "isSlider" && column !== "isBanner" && column !== "isCoupon" && column !== "isInquiry" && column !== "isCategory" && column !== "isVariant" && column !== "isOrderStatus" && column !== "ispayment" && column !== "isShippingPartner" && column !== "isSocial");

    return (
        <div className="bg-white rounded-xl shadow-md">
            {(data[0].isBanner || data[0].isCoupon || data[0].isInquiry || data[0].isCategory || data[0].isVariant || data[0].isOrderStatus || data[0].isPayment || data[0].isShippingPartner || data[0].isSocial) && (
                <div className="px-4 py-3 bg-gray-50 rounded-2xl border-gray-200 flex justify-between items-center">
                    <div className="relative w-64 mx-1">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <FaSearch className="text-gray-400 text-sm" />
                        </div>
                        <input
                            type="text"
                            className="block w-full font-medium pl-10 pr-3 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                            placeholder="Search table..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <select
                            className="block w-32 font-medium pl-3 pr-10 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                            value={limit}
                            onChange={handleLimitChange}
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={50}>50</option>
                        </select>
                        <select
                            className="block w-42 font-medium pl-3 pr-10 py-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400"
                            value={sortCriteria}
                            onChange={handleSortChange}
                        >
                            <option value="latest">Latest</option>
                            <option value="oldest">Oldest</option>
                            <option value="nameAtoZ">Name A-Z</option>
                            <option value="nameZtoA">Name Z-A</option>
                        </select>
                    </div>
                </div>
            )}

            <div className="overflow-x-auto shadow-lg">
                <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <thead className="bg-gray-900 text-white">
                        <tr>
                            {columns.map((column) => (
                                <th key={column} className="py-3 px-6 text-left capitalize">
                                    {column.replace(/([A-Z])/g, ' $1').trim()}
                                </th>
                            ))}
                            {data.some(row => row.isAction) && (
                                <th className="py-3 px-6 text-left">Action</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + (data.some(row => row.isAction) ? 1 : 0)} className="py-4 px-6 text-center text-gray-500">
                                    No matching results found
                                </td>
                            </tr>
                        ) : (
                            filteredData.map((row, index) => (
                                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                    {columns.map((column) => (
                                        <td key={column} className="py-3 px-6">
                                            {column === "desktopImage" || column === "mobileImage" || column === "image" || column === "icon" ? (
                                                <img
                                                    src={row[column]}
                                                    alt={column}
                                                    className={`${row.isSlider ? 'w-100 h-50 rounded-md' : 'w-15 h-15 rounded-full'} ${column === "desktopImage" ? 'w-50 h-30 rounded-md' : 'w-15 h-15 rounded-full'} ${column === "mobileImage" ? 'w-30 h-45 rounded-md' : 'w-15 h-15 rounded-full'} ${column === "icon" ? 'rounded-md' : 'w-15 h-15 rounded-full'} object-cover`}
                                                />
                                            ) : typeof row[column] === "string" && row[column].startsWith("http") ? (
                                                <a href={row[column]} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                                                    <FaEye size={20} />
                                                </a>
                                            ) : column.toLowerCase() === "status" || column.toLowerCase().includes("status") ? (
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(row[column])}`}>
                                                    {row[column]}
                                                </span>
                                            ) : (
                                                row[column]
                                            )}
                                        </td>
                                    ))}
                                    {row.isAction && (
                                        <td className={`py-3 px-6 flex items-center space-x-3 ${row.isCoupon || row.isCategory || row.isOrderStatus || row.isPayment || row.isShippingPartner || row.isSocial ||row.isVariant ? 'my-2' : row.isBanner ? 'my-[48%]' : 'my-[52%]'}`}>
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleEdit(row.id)}
                                            >
                                                ✏️
                                            </button>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => handleDelete(row.id)}
                                            >
                                                🗑️
                                            </button>
                                            <label className="flex items-center cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="sr-only peer"
                                                    checked={status[row.id]}
                                                    onChange={() => handleToggleStatus(row.id)}
                                                />
                                                <div className={`w-10 h-5 rounded-full relative transition-all ${status[row.id] ? "bg-green-500" : "bg-gray-300"
                                                    }`}>
                                                    <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${status[row.id] ? "left-6" : "left-1"
                                                        }`}></div>
                                                </div>
                                            </label>
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
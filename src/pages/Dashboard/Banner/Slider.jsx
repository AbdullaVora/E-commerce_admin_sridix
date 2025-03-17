import React, { useState, useEffect } from "react";
import Table from "../../../components/Table";
import sliderData from "../../../../data/slider.json";
import SortModal from "../../../components/Banner_config/Slider/SortModal";
import Model from "../../../components/Banner_config/Slider/SliderModel";

const Slider = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSortModalOpen, setIsSortModalOpen] = useState(false);
    const [sliderList, setSliderList] = useState(sliderData);

    useEffect(() => {
        document.body.style.overflow = isModalOpen || isSortModalOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [isModalOpen, isSortModalOpen]);

    return (
        <div className="flex bg-gray-100 custom-container">
            <div className="flex-1 flex flex-col">
                <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 flex justify-between items-center shadow-md">
                    <h1 className="text-2xl font-bold">Slider</h1>
                </header>
                <div className="box bg-white p-4 mx-3 mt-5 rounded shadow">
                    <div className="flex space-x-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Add Slider
                        </button>
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setIsSortModalOpen(true)}
                        >
                            ☰ Sort Slider
                        </button>
                    </div>
                    <div className="py-3">
                        <h2 className="text-xl font-bold mb-2">Recent Sliders</h2>
                        <Table data={sliderList} />
                    </div>
                </div>
            </div>

            {/* Add Slider Modal */}
            {isModalOpen && <Model onClose={() => setIsModalOpen(false)} />}

            {/* Sorting Modal */}
            {isSortModalOpen && (
                <SortModal
                    sliders={sliderList}
                    onClose={() => setIsSortModalOpen(false)}
                    onConfirm={(newList) => {
                        setSliderList(newList);
                        setIsSortModalOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default Slider;

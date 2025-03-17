import React, { useState } from 'react'
import socialLinksData from '../../../../data/social.json'
import Table from '../../../components/Table';
import SocialLinksModel from '../../../components/Website_Config/SocialLinksModel';
const SocialLinks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex bg-gray-100 custom-container">
            <div className="flex-1 flex flex-col">
                <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 flex justify-between items-center shadow-md">
                    <h1 className="text-2xl font-bold">Social Links</h1>
                </header>
                <div className="box bg-white p-4 mx-3 mt-5 rounded shadow">
                    <div className="flex space-x-4">
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            onClick={() => setIsModalOpen(true)}
                        >
                            + Add Payment Method
                        </button>
                        <button
                            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
                        >
                            ☰ Sort Payment Method
                        </button>
                    </div>
                    <div className="py-3">
                        <Table data={socialLinksData} />
                    </div>
                </div>
                {/* Add Slider Modal */}
                {isModalOpen && <SocialLinksModel onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    )
}

export default SocialLinks

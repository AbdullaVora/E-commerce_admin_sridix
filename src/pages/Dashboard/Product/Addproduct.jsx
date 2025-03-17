import React from 'react'
// Import box icon from react-icons
import { LuPackagePlus } from "react-icons/lu";
import { BiPackage } from 'react-icons/bi'
import { IoMdClose } from 'react-icons/io'
import { FaCameraRetro, FaRupeeSign } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Addproduct = () => {
  return (
    <div className="flex bg-gray-100 custom-container">
      <div className="flex-1 flex flex-col">
        <header className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 mb-5 flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-bold">Add Product</h1>
        </header>

        {/* Main Content */}
        <div className="px-6 py-3">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex gap-8">
              {/* Left Side - Icon and Title */}
              <div className="w-[250px] rounded-lg flex flex-col justify-start items-start bg-gray-50 p-5">
                <div className="rounded-lg">
                  <LuPackagePlus size={130} className="text-gray-600" />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-800">General Info</h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Add here the product name, slug, brand, categories & other necessary information.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 py-6 pe-6">
                <form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">
                      Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Slug and SKU Code Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="slug" className="block text-sm font-medium text-gray-500 mb-1">
                        Slug
                      </label>
                      <input
                        type="text"
                        id="slug"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="skuCode" className="block text-sm font-medium text-gray-500 mb-1">
                        SKU Code
                      </label>
                      <input
                        type="text"
                        id="skuCode"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Brand and Category Row */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-500 mb-1">
                        Brand
                      </label>
                      <select
                        id="brand"
                        className="w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      >
                        <option value="">Not Selected</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-500 mb-1">
                        Category
                      </label>
                      <input
                        type="text"
                        id="category"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  {/* Checkboxes */}
                  <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showInTreading"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="showInTreading" className="ml-2 text-sm text-gray-600">
                        Show In Treading
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isDealOfTheDay"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isDealOfTheDay" className="ml-2 text-sm text-gray-600">
                        Is Deal Of The Day
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isFeatured"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isFeatured" className="ml-2 text-sm text-gray-600">
                        Is Featured Product
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="isMostSale"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="isMostSale" className="ml-2 text-sm text-gray-600">
                        Is Most Sale Product
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="showSaleTag"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <label htmlFor="showSaleTag" className="ml-2 text-sm text-gray-600">
                        Show Sale Tag On Product
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Section */}
        <div className="px-6 py-3">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex gap-8">
              {/* Left Side - Icon and Title */}
              <div className="w-[250px] rounded-lg flex flex-col justify-start items-start bg-gray-50 p-5">
                <div className="rounded-lg">
                  <BiPackage size={120} className="text-gray-600" />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-800">Product Information</h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Add here the product short description, product detail & about item.
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 py-6 pe-6">
                <form className="space-y-6">
                  {/* Short Description */}
                  <div>
                    <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-1">
                      Short Description<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="shortDescription"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                  </div>

                  {/* Detail Section */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Detail</h3>

                    {/* Detail Row */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Detail Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Value<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Detail Value"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <button className="mt-6 p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                          <IoMdClose size={20} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Detail Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Value<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Detail Value"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <button className="mt-6 p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                          <IoMdClose size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Add Detail Row Button */}
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center">
                      <span className="mr-2">+</span> Add Detail Row
                    </button>
                  </div>

                  {/* Additional Section */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-medium text-gray-700 mb-4">Additional</h3>

                    {/* Additional Row */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Additional Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Value<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Additional Value"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <button className="mt-6 p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                          <IoMdClose size={20} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Title<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Additional Title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Value<span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Write Additional Value"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                          />
                        </div>
                        <button className="mt-6 p-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                          <IoMdClose size={20} />
                        </button>
                      </div>
                    </div>

                    {/* Add Additional Row Button */}
                    <button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 flex items-center">
                      <span className="mr-2">+</span> Add Additional Row
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory & Cartesian Section */}
        <div className="px-6 py-3">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex gap-8">
              {/* Left Side - Icon and Title */}
              <div className="w-[250px] rounded-lg flex flex-col justify-start items-start bg-gray-50 p-5">
                <div className="rounded-lg">
                  <FaRupeeSign size={100} className='text-gray-600' />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-800">Inventory & Cartesian</h2>
                  <p className="text-gray-600 text-sm mt-2">
                    The Cartesian product between two sets is the set of all possible ordered pairs with first element from the first set and second element from the second
                  </p>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex-1 py-6 pe-6">
                <form className="space-y-6">
                  {/* MRP, Price, and Discount Row */}
                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        MRP<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">₹</span>
                        <input
                          type="text"
                          className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Price<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">₹</span>
                        <input
                          type="text"
                          defaultValue="0"
                          className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Discount<span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-2 text-gray-500">%</span>
                        <input
                          type="text"
                          defaultValue="0"
                          className="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stock Management */}
                  <div>
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">Enable stock management at product level</span>
                    </label>
                  </div>

                  {/* Dropdown and Buttons */}
                  <div className="flex items-center gap-4">
                    <select className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500">
                      <option>Create new</option>
                    </select>
                    <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                      Select All
                    </button>
                    <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                      Price Chart
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Product Image Section */}
        <div className="px-6 py-3">
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex gap-8">
              {/* Left Side - Icon and Title */}
              <div className="w-[250px] rounded-lg flex flex-col justify-start items-start bg-gray-50 p-5">
                <div className="rounded-lg">
                  <div className="rounded-lg">
                    <FaCameraRetro size={120} className='text-gray-600' />
                  </div>
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-800">Product Image</h2>
                  <p className="text-gray-600 text-sm mt-2">
                    Upload your Product image Via Link Or Manualy Selection. You can add multiple images. Also Add The Selected Color Images
                  </p>
                  <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    Add Images
                  </button>
                </div>
              </div>

              {/* Right Side - Image Upload Area */}
              <div className="flex-1 py-6 pe-6">
                {/* Radio Button Selection */}
                <div className="flex gap-8 mb-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="imageType"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-700">Main Image</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="imageType"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2 text-gray-700">Main Image</span>
                  </label>
                </div>

                {/* Image Preview Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="aspect-w-16 aspect-h-9 mb-2">
                      <img
                        src="https://example.com/placeholder.jpg"
                        alt="Product preview"
                        className="rounded-lg object-cover w-full h-48"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm truncate">66e007f27e..</p>
                      <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="aspect-w-16 aspect-h-9 mb-2">
                      <img
                        src="https://example.com/placeholder2.jpg"
                        alt="Product preview"
                        className="rounded-lg object-cover w-full h-48"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-gray-600 text-sm truncate">Camera-of-..</p>
                      <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Color Related Products Images Section */}
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">
                    Color Related Products Images
                  </h3>
                  {/* Add your color-related image upload functionality here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Save and Cancel Buttons */}
        <div className="px-6 py-3 flex gap-4">
          <button className="px-8 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Save Product
          </button>
          <Link to="/products">
            <button className="px-8 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
              Cancel
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Addproduct

import React from 'react'

function FlipkartProductList() {
    return (
        <div>
            <div className="min-h-screen bg-slate-100 p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
                <div className="mx-auto max-w-6xl">
                    <h1 className="mb-8 text-center text-4xl font-bold text-blue-600">
                        🛒 Flipkart Product List
                    </h1>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {/* Product Card */}
                        <div className="rounded-2xl bg-pink-300 p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gray-100">
                                📦
                            </div>

                            <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                                Fjallraven Backpack
                            </h2>

                            <p className="mt-2 text-2xl font-bold text-green-600">
                                ₹2,499
                            </p>

                            <button className="mt-5 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-gray-900 transition hover:bg-yellow-500">
                                View Product
                            </button>
                        </div>

                        {/* Product Card */}
                        <div className="rounded-2xl bg-pink-300 p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gray-100">
                                📱
                            </div>

                            <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                                Samsung Galaxy Smartphone
                            </h2>

                            <p className="mt-2 text-2xl font-bold text-green-600">
                                ₹18,999
                            </p>

                            <button className="mt-5 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-gray-900 transition hover:bg-yellow-500">
                                View Product
                            </button>
                        </div>

                        {/* Product Card */}
                        <div className="rounded-2xl bg-pink-300 p-5 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                            <div className="mb-4 flex h-48 items-center justify-center rounded-xl bg-gray-100">
                                👕
                            </div>

                            <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
                                Men's Casual T-Shirt
                            </h2>

                            <p className="mt-2 text-2xl font-bold text-green-600">
                                ₹799
                            </p>

                            <button className="mt-5 w-full rounded-lg bg-yellow-400 py-3 font-semibold text-gray-900 transition hover:bg-yellow-500">
                                View Product
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipkartProductList

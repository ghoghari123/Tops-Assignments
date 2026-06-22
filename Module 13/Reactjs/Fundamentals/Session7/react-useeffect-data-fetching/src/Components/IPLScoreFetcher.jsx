import React from 'react'

function IPLScoreFetcher() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-6">
                    <h1 className="text-3xl font-bold">🏏 IPL Live Score</h1>
                    <p className="text-sm opacity-90 mt-1">
                        Current Match Headline
                    </p>
                </div>

                {/* Match Card */}
                <div className="p-8">
                    <div className="bg-gray-100 rounded-2xl p-6 border border-gray-200">
                        <span className="inline-block px-3 py-1 text-sm font-medium bg-green-100 text-green-700 rounded-full mb-4">
                            LIVE
                        </span>

                        <h2 className="text-2xl font-bold text-gray-800 mb-3">
                            Chennai Super Kings vs Mumbai Indians
                        </h2>

                        <p className="text-gray-600 text-lg">
                            Match headline will appear here...
                        </p>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-blue-50 p-4 rounded-xl text-center">
                            <h3 className="text-sm text-gray-500">Current Score</h3>
                            <p className="text-2xl font-bold text-blue-700">
                                185/4
                            </p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl text-center">
                            <h3 className="text-sm text-gray-500">Overs</h3>
                            <p className="text-2xl font-bold text-purple-700">
                                18.2
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                        Refresh Score
                    </button>
                </div>

            </div>
        </div>
    )
}

export default IPLScoreFetcher

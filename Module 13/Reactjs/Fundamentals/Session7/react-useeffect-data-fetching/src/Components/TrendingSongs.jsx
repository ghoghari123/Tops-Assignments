import React, { useEffect } from 'react'

function TrendingSongs({ songs }) {
    useEffect(() => {
        console.log("Component mounted");
    }, [])
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-6 mb-10">
            <div className="w-full max-w-lg bg-black text-white rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6">
                    <h1 className="text-3xl font-bold">🎵 Trending Songs</h1>
                    <p className="text-sm text-gray-200 mt-1">
                        Most played tracks right now
                    </p>
                </div>

                {/* Songs List */}
                <div className="p-6 space-y-4">
                    {
                        songs.map((index) => (
                            <div key={songs.id} className="flex items-center justify-between p-4 bg-gray-900 hover:bg-purple-600 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02]">
                                <div>
                                    <h3 className="font-semibold">{index.title}</h3>
                                    <p className="text-sm text-gray-400">{index.artist}</p>
                                </div>
                                <span className="text-2xl">🔥</span>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default TrendingSongs

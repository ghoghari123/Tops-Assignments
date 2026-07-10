import React from 'react'

function LikeCounter() {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center p-6">
                <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl">
                    {/* Post Image */}
                    <img
                        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800"
                        alt="Post"
                        className="h-72 w-full object-cover"
                    />

                    {/* Content */}
                    <div className="p-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold text-gray-800">@naturelover</h2>
                                <p className="text-sm text-gray-500">Beautiful Nature 🌿</p>
                            </div>

                            <button className="text-3xl transition hover:scale-110">
                                ❤️
                            </button>
                        </div>

                        {/* Like Counter */}
                        <p className="mt-4 text-lg font-semibold text-gray-700">
                            ❤️ 1,245 Likes
                        </p>

                        {/* Like Button */}
                        <button className="mt-5 w-full rounded-xl bg-pink-500 py-3 font-semibold text-white transition duration-300 hover:bg-pink-600">
                            Like
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LikeCounter

import React, { useState } from 'react'

function LikeCounter() {
    const [count, setCount] = useState(120)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className="w-96 overflow-hidden rounded-2xl bg-white shadow-xl">
            {/* Post Image */}
            <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80"
                alt="Post"
                className="h-80 w-full object-cover"
            />

            {/* Content */}
            <div className="p-5">
                <div className="flex items-center justify-between">
                    {/* Like Button */}
                    <button
                        onClick={increment}
                        className="flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-2 text-red-500 transition hover:bg-red-100">
                        ❤️ Like
                    </button>

                    {/* Like Count */}
                    <span className="text-lg font-semibold text-gray-700">
                        {count} Likes
                    </span>
                </div>

                {/* Caption */}
                <div className="mt-5">
                    <h3 className="font-semibold text-gray-800">
                        Instagram Post
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                        🚗 Every road leads to a new adventure. Chasing sunsets, discovering
                        hidden places, and making unforgettable memories one mile at a time.
                        Life is better with the windows down and good music on
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LikeCounter

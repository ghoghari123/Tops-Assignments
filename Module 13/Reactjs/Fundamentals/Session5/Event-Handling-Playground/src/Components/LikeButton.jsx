import React, { useState } from 'react'

function LikeButton() {
    const [likecount, setLikeCount] = useState(0)
    const Likecount = () => {
        setLikeCount(likecount + 1)
    }
    return (
        <div>
            <div className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md text-center mt-10">
                <h2 className="text-lg font-semibold mb-4">Like This Post</h2>

                <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full flex items-center justify-center gap-2 mx-auto" onClick={Likecount}>
                    ❤️ Like
                </button>

                <p className="mt-4 text-gray-600">
                    Likes: {likecount}
                </p>
            </div>
        </div>
    )
}

export default LikeButton

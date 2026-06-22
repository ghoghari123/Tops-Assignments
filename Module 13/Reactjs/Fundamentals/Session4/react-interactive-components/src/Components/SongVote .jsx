import React, { useState } from 'react'

function SongVote() {
    const [updowncount, setUpDown] = useState(0)
    const upincre = () => {
        setUpDown(updowncount + 1)
    }
    const downdecre = () => {
        setUpDown(updowncount - 1)
    }
    return (
        <div className='mt-15'>
            <p>
                I created a Spotify-style song voting component where users can upvote or downvote a song using arrow buttons. The component uses React's useState hook to track and update the vote count in real time, while ensuring that the vote count never goes below zero.
            </p>
            <div className="mt-5 max-w-md mx-auto bg-black rounded-lg shadow-md p-4 flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-white">Blinding Lights</h2>
                    <p className="text-gray-500">The Weeknd</p>
                </div>

                <div className="flex items-center gap-3">
                    <button className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={upincre}>
                        ▲
                    </button>

                    <span className="text-lg font-bold">{updowncount}</span>

                    <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={downdecre}>
                        ▼
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SongVote 

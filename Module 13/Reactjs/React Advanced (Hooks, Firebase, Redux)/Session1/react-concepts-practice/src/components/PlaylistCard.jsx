import React from 'react'

function PlaylistCard({ playlist }) {
    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center p-6">
                <div className="w-full max-w-4xl">
                    <h1 className="mb-8 text-center text-4xl font-bold text-white">
                        🎧 My Playlist
                    </h1>

                    <div className="space-y-5">
                        {
                            playlist && playlist.map((items) => (
                                <div className="flex items-center justify-between rounded-2xl bg-white p-5 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
                                            🎵
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold text-gray-800">
                                                {items.name}
                                            </h2>
                                            <p className="text-gray-500"> {items.artist} </p>
                                        </div>
                                    </div>

                                    <button className="rounded-full bg-green-500 p-4 text-white transition hover:bg-green-600">
                                        ▶
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistCard

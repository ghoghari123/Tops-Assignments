import React, { useState } from 'react'

function PlaylistAdder() {
    const [songName, setSongName] = useState("")
    const [artistName, setArtistName] = useState("")
    const [playlist, setPlaylist] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!songName.trim() || !artistName.trim()) {
            return
        }

        const newSong = {
            id: Date.now(),
            song: songName,
            artist: artistName
        }

        setPlaylist([...playlist, newSong])

        setSongName("")
        setArtistName("")
    }

    return (
        <div>
            <div className="mt-10 flex items-center justify-center p-6">
                <div className="w-full max-w-2xl">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl shadow-2xl p-8">

                        <div className="mb-8">
                            <h1 className="text-4xl font-bold text-white">
                                Playlist Adder
                            </h1>
                            <p className="text-zinc-400 mt-2">
                                Create and manage your favorite tracks.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-2">
                                    Song Name
                                </label>
                                <input
                                    type="text"
                                    value={songName}
                                    onChange={(e) => setSongName(e.target.value)}
                                    placeholder="Enter song name"
                                    className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-2">
                                    Artist Name
                                </label>
                                <input
                                    type="text"
                                    value={artistName}
                                    onChange={(e) => setArtistName(e.target.value)}
                                    placeholder="Enter artist name"
                                    className="w-full bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition-all duration-200"
                            >
                                Add Song
                            </button>
                        </form>

                        <div className="mt-10">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold text-white">
                                    Playlist
                                </h2>
                                <span className="text-sm text-zinc-400">
                                    {playlist.length} Songs
                                </span>
                            </div>

                            <div className="space-y-3">
                                {playlist.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-between bg-zinc-800 hover:bg-zinc-700 rounded-2xl p-4 transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-black font-bold">
                                                ♪
                                            </div>

                                            <div>
                                                <h3 className="text-white font-medium">
                                                    {item.song}
                                                </h3>
                                                <p className="text-zinc-400 text-sm">
                                                    {item.artist}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {playlist.length === 0 && (
                                    <p className="text-zinc-400 text-center">
                                        No songs added yet.
                                    </p>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistAdder
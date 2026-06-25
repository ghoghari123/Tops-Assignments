import React, { useEffect, useState } from 'react'

function MovieSuggestions() {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await res.json()
                setMovies(data)
            } catch (error) {
                console.log("Faild To Fetch Movies : ", error);
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, [])

    return (
        <div className="mt-10 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
            <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6">
                    <h1 className="text-3xl font-bold text-white">
                        🎬 Movie Suggestions
                    </h1>
                    <p className="text-purple-100 mt-1">
                        Discover movies curated for you
                    </p>
                </div>

                {/* Content */}
                <div className="p-8">

                    {/* Loading State */}
                    {loading ? (
                        <div className="flex items-center justify-center py-12">
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
                                <p className="text-gray-200 text-lg">
                                    Loading movies...
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {
                                movies.map((movie) => (
                                    <div key={movie.id} className="bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition">
                                        <h3 className="text-white text-lg font-semibold">
                                            {movie.name}
                                        </h3>
                                    </div>

                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieSuggestions

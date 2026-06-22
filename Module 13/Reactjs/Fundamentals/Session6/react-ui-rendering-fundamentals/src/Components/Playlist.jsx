import React from 'react'

function Playlist({ playlist }) {
  return (
    <div>
      <div className="mt-5 max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-5">
          <h2 className="text-2xl font-bold text-white">My Playlist</h2>
          <p className="text-violet-100 text-sm">{playlist.length} Songs</p>
        </div>

        <ul className="divide-y divide-gray-200">
          {
            playlist && playlist.map((item, index) => (
              <li className="flex items-center justify-between px-6 py-4 hover:bg-gray-50" key={index}>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center font-semibold text-violet-600">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.artist}</p>
                  </div>
                </div>
                <button className="text-violet-600 text-lg">▶</button>
              </li>
            ))
          }
          {playlist.length === 0 && (
            <p className="text-zinc-400 text-center">
              No songs added yet.
            </p>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Playlist

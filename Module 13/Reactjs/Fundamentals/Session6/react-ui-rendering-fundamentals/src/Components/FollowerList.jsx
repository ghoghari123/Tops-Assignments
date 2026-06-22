import React from 'react'

function FollowerList({ usernames }) {
    return (
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-5">
                <h2 className="text-2xl font-bold text-white">Followers</h2>
                <p className="text-blue-100 text-sm">{usernames.length} Followers</p>
            </div>

            <ul className="divide-y divide-gray-200">
                {
                    usernames && usernames.map((items, index) => (
                        <li className="px-6 py-4 flex items-center gap-4 hover:bg-gray-50">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
                                {items.char}
                            </div>
                            <span className="font-medium text-gray-800">@{items.username}</span>
                        </li>
                    ))
                }
                {usernames.length === 0 && (
                    <p className="p-4 text-zinc-800 text-center">
                        No followers yet.
                    </p>
                )}
            </ul>
        </div>
    )
}

export default FollowerList

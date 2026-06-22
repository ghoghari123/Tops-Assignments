import React from 'react'

function UserProfile({userprofile}) {
    return (
        <div className="max-w-sm mx-auto mt-10 overflow-hidden rounded-3xl bg-black text-white shadow-xl">

            {/* Cover */}
            <div className="h-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            {/* Profile Image */}
            <div className="flex justify-center">
                <img
                    src={userprofile.profile_image}
                    alt="Profile"
                    className="-mt-12 h-24 w-24 rounded-full border-4 border-black object-cover"
                />
            </div>

            {/* User Info */}
            <div className="px-6 pb-6 text-center">
                <h2 className="mt-3 text-2xl font-bold">{userprofile.username}</h2>

                <p className="mt-2 text-sm text-gray-400">
                    Frontend Developer | React Enthusiast | Learning Full Stack Development 🚀
                </p>

                {/* Stats */}
                <div className="mt-6 flex justify-center gap-8">
                    <div>
                        <h3 className="text-xl font-bold text-indigo-400">{userprofile.followers}K</h3>
                        <p className="text-sm text-gray-500">Followers</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-400">{userprofile.following}</h3>
                        <p className="text-sm text-gray-500">Following</p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-indigo-400">{userprofile.posts}</h3>
                        <p className="text-sm text-gray-500">Posts</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-center gap-3">
                    <button className="rounded-lg bg-indigo-600 px-5 py-2 font-medium transition hover:bg-indigo-700">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserProfile

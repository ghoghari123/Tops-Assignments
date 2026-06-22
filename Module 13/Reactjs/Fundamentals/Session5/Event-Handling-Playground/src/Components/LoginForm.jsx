import React, { useState } from 'react'

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handlesubmit = (e) => {
        e.preventDefault()
        alert(
            `Username : ${username}\n Password : ${password}`
        )
        setPassword("")
        setUsername("")
    }
    return (
        <div className="mt-15 w-full max-w-md bg-white p-8 rounded-xl shadow-md mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

            <form className="space-y-4" onSubmit={handlesubmit}>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                    Login
                </button>
            </form>
        </div>

    )
}

export default LoginForm

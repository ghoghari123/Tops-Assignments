import React from 'react'
import useCurrentTime from './useCurrentTime'

function CurrentTime() {
  const CurrentTime = useCurrentTime()
  return (

    <div className="w-96 rounded-3xl bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-lg border border-white/20">
      <h2 className="mb-6 text-3xl font-bold">
        🕒 Live Clock
      </h2>

      <h1 className="mb-4 text-5xl font-extrabold tracking-wider">
        {CurrentTime.toLocaleTimeString()}
      </h1>

      <p className="text-lg text-gray-200">
        {/* Monday, July 14, 2026 */}
        {
          CurrentTime.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })
        }
      </p>
    </div>
  )
}

export default CurrentTime

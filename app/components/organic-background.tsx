"use client"

export function OrganicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Organic flowing shapes */}
      <div className="absolute inset-0">
        {/* Large flowing shape 1 */}
        <div className="absolute -top-40 -left-40 w-96 h-96 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-full blur-3xl transform rotate-12 animate-pulse-slow" />
        </div>

        {/* Large flowing shape 2 */}
        <div className="absolute top-20 -right-32 w-80 h-80 opacity-15">
          <div className="w-full h-full bg-gradient-to-bl from-gray-500 to-gray-700 rounded-full blur-3xl transform -rotate-45 animate-float-slow" />
        </div>

        {/* Medium flowing shape 3 */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 opacity-10">
          <div className="w-full h-full bg-gradient-to-tr from-gray-600 to-gray-400 rounded-full blur-2xl transform rotate-90 animate-drift" />
        </div>

        {/* Large flowing shape 4 */}
        <div className="absolute bottom-20 left-10 w-72 h-72 opacity-25">
          <div className="w-full h-full bg-gradient-to-tl from-gray-700 to-gray-500 rounded-full blur-3xl transform -rotate-12 animate-pulse-slow" />
        </div>

        {/* Medium flowing shape 5 */}
        <div className="absolute bottom-40 right-1/4 w-56 h-56 opacity-15">
          <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-full blur-2xl transform rotate-45 animate-float-slow" />
        </div>

        {/* Small accent shapes */}
        <div className="absolute top-1/3 right-1/3 w-32 h-32 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-gray-500 to-gray-600 rounded-full blur-xl animate-drift-reverse" />
        </div>

        <div className="absolute bottom-1/3 left-1/2 w-40 h-40 opacity-15">
          <div className="w-full h-full bg-gradient-to-l from-gray-600 to-gray-700 rounded-full blur-xl animate-float-slow" />
        </div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/20" />
    </div>
  )
}

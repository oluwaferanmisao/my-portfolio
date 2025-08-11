"use client"

export function OrganicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Flowing liquid shapes */}
        <div className="absolute inset-0">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="liquid1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#1a1a1a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="liquid2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2a2a2a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="liquid3" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2a2a2a" stopOpacity="0.7" />
              </linearGradient>
              <pattern id="mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
              </pattern>
            </defs>

            {/* Main flowing shape */}
            <path
              d="M0,400 C300,200 600,600 900,300 C1200,0 1500,500 1920,200 L1920,1080 L0,1080 Z"
              fill="url(#liquid1)"
              className="animate-pulse"
              style={{ animationDuration: "8s" }}
            />

            {/* Secondary flowing shape */}
            <path
              d="M0,600 C400,300 800,700 1200,400 C1600,100 1800,600 1920,350 L1920,1080 L0,1080 Z"
              fill="url(#liquid2)"
              className="animate-pulse"
              style={{ animationDuration: "12s", animationDelay: "2s" }}
            />

            {/* Tertiary accent shape */}
            <path
              d="M0,800 C500,500 1000,900 1500,600 C1700,400 1850,700 1920,500 L1920,1080 L0,1080 Z"
              fill="url(#liquid3)"
              className="animate-pulse"
              style={{ animationDuration: "10s", animationDelay: "4s" }}
            />

            <rect width="100%" height="100%" fill="url(#mesh)" />
          </svg>
        </div>

        {/* Subtle highlight overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a]/20 via-transparent to-[#0a0a0a]/30" />

        {/* Diagonal flow accent */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#2a2a2a]/10 to-transparent transform rotate-12 scale-150" />
      </div>
    </div>
  )
}

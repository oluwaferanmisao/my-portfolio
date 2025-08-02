"use client"

export function OrganicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* Wavy organic shapes */}
      <div className="absolute inset-0">
        {/* Large flowing wave 1 - Top left */}
        <div className="absolute -top-32 -left-48 w-[600px] h-[400px] opacity-25 animate-wave-slow">
          <div
            className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-700"
            style={{
              clipPath: "ellipse(70% 60% at 30% 40%)",
              filter: "blur(40px)",
              transform: "rotate(-15deg)",
            }}
          />
        </div>

        {/* Medium flowing wave 2 - Top right */}
        <div className="absolute -top-20 -right-32 w-[500px] h-[350px] opacity-20 animate-wave-drift">
          <div
            className="w-full h-full bg-gradient-to-bl from-gray-500 to-gray-800"
            style={{
              clipPath: "ellipse(80% 50% at 60% 30%)",
              filter: "blur(35px)",
              transform: "rotate(25deg)",
            }}
          />
        </div>

        {/* Large flowing wave 3 - Center left */}
        <div className="absolute top-1/3 -left-40 w-[550px] h-[380px] opacity-15 animate-wave-float">
          <div
            className="w-full h-full bg-gradient-to-tr from-gray-600 to-gray-400"
            style={{
              clipPath: "ellipse(65% 75% at 40% 50%)",
              filter: "blur(45px)",
              transform: "rotate(-30deg)",
            }}
          />
        </div>

        {/* Large flowing wave 4 - Bottom left */}
        <div className="absolute bottom-10 -left-32 w-[650px] h-[420px] opacity-30 animate-wave-pulse">
          <div
            className="w-full h-full bg-gradient-to-tl from-gray-700 to-gray-500"
            style={{
              clipPath: "ellipse(75% 55% at 35% 60%)",
              filter: "blur(50px)",
              transform: "rotate(10deg)",
            }}
          />
        </div>

        {/* Medium flowing wave 5 - Bottom right */}
        <div className="absolute bottom-20 -right-40 w-[480px] h-[320px] opacity-25 animate-wave-drift-reverse">
          <div
            className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"
            style={{
              clipPath: "ellipse(85% 45% at 70% 40%)",
              filter: "blur(38px)",
              transform: "rotate(-20deg)",
            }}
          />
        </div>

        {/* Flowing wave 6 - Center right */}
        <div className="absolute top-1/2 -right-24 w-[420px] h-[280px] opacity-18 animate-wave-slow">
          <div
            className="w-full h-full bg-gradient-to-l from-gray-500 to-gray-700"
            style={{
              clipPath: "ellipse(60% 80% at 50% 45%)",
              filter: "blur(32px)",
              transform: "rotate(35deg)",
            }}
          />
        </div>

        {/* Small accent wave 7 - Top center */}
        <div className="absolute top-1/4 left-1/3 w-[300px] h-[200px] opacity-20 animate-wave-float">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-400 to-gray-600"
            style={{
              clipPath: "ellipse(90% 40% at 60% 50%)",
              filter: "blur(25px)",
              transform: "rotate(-45deg)",
            }}
          />
        </div>

        {/* Small accent wave 8 - Bottom center */}
        <div className="absolute bottom-1/3 left-1/2 w-[350px] h-[230px] opacity-22 animate-wave-drift">
          <div
            className="w-full h-full bg-gradient-to-bl from-gray-600 to-gray-500"
            style={{
              clipPath: "ellipse(70% 65% at 40% 55%)",
              filter: "blur(30px)",
              transform: "rotate(50deg)",
            }}
          />
        </div>
      </div>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/30" />
    </div>
  )
}

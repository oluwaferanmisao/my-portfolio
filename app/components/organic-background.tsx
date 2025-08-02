"use client"

export function OrganicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Soft blurry organic shapes */}
      <div className="absolute inset-0">
        {/* Large soft blob 1 - Top left */}
        <div className="absolute -top-40 -left-60 w-[800px] h-[600px] opacity-40">
          <div
            className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-500 to-gray-700"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              filter: "blur(80px)",
              transform: "rotate(-20deg)",
            }}
          />
        </div>

        {/* Medium soft blob 2 - Top right */}
        <div className="absolute -top-32 -right-48 w-[600px] h-[450px] opacity-35">
          <div
            className="w-full h-full bg-gradient-to-bl from-gray-400 via-gray-600 to-gray-800"
            style={{
              borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
              filter: "blur(70px)",
              transform: "rotate(15deg)",
            }}
          />
        </div>

        {/* Large flowing blob 3 - Center left */}
        <div className="absolute top-1/3 -left-80 w-[900px] h-[700px] opacity-30">
          <div
            className="w-full h-full bg-gradient-to-tr from-gray-200 via-gray-500 to-gray-700"
            style={{
              borderRadius: "70% 30% 60% 40% / 30% 60% 40% 70%",
              filter: "blur(90px)",
              transform: "rotate(-35deg)",
            }}
          />
        </div>

        {/* Large soft blob 4 - Bottom area */}
        <div className="absolute bottom-0 left-1/4 w-[1000px] h-[800px] opacity-45">
          <div
            className="w-full h-full bg-gradient-to-tl from-gray-300 via-gray-600 to-gray-800"
            style={{
              borderRadius: "50% 50% 80% 20% / 60% 40% 60% 40%",
              filter: "blur(100px)",
              transform: "rotate(10deg)",
            }}
          />
        </div>

        {/* Medium soft blob 5 - Right side */}
        <div className="absolute top-1/2 -right-60 w-[700px] h-[500px] opacity-35">
          <div
            className="w-full h-full bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700"
            style={{
              borderRadius: "30% 70% 40% 60% / 70% 30% 60% 40%",
              filter: "blur(75px)",
              transform: "rotate(-25deg)",
            }}
          />
        </div>

        {/* Accent soft blob 6 - Top center */}
        <div className="absolute top-20 left-1/3 w-[500px] h-[350px] opacity-25">
          <div
            className="w-full h-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600"
            style={{
              borderRadius: "80% 20% 60% 40% / 40% 60% 20% 80%",
              filter: "blur(60px)",
              transform: "rotate(45deg)",
            }}
          />
        </div>

        {/* Small accent blob 7 - Bottom right */}
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] opacity-30">
          <div
            className="w-full h-full bg-gradient-to-bl from-gray-500 via-gray-600 to-gray-400"
            style={{
              borderRadius: "60% 40% 80% 20% / 50% 50% 50% 50%",
              filter: "blur(65px)",
              transform: "rotate(-40deg)",
            }}
          />
        </div>
      </div>

      {/* Subtle depth overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
    </div>
  )
}

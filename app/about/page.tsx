export default function About() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl">About Me</h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
              I'm a passionate UI/UX & Graphic Designer with a focus on creating meaningful digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-space-grotesk font-semibold text-2xl">My Approach</h2>
              <p className="text-gray-300 leading-relaxed">
                I believe great design is about solving problems, not just making things look pretty. My process
                involves understanding your users, your business goals, and finding the perfect balance between
                functionality and aesthetics.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With experience in both digital and print design, I bring a comprehensive understanding of visual
                communication to every project.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="font-space-grotesk font-semibold text-xl mb-6">Skills & Expertise</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>UI/UX Design</span>
                  <span className="text-gray-400">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Graphic Design</span>
                  <span className="text-gray-400">Expert</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Brand Identity</span>
                  <span className="text-gray-400">Advanced</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Web Design</span>
                  <span className="text-gray-400">Advanced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <h1 className="font-space-grotesk font-bold text-4xl md:text-5xl">About Me</h1>
            <p className="text-gray-300 text-xl leading-relaxed max-w-2xl mx-auto">
              I'm a passionate Flutter mobile developer with experience in creating beautiful and functional
              cross-platform applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-space-grotesk font-semibold text-2xl">My Journey</h2>
              <p className="text-gray-300 leading-relaxed">
                My journey in mobile development has been exciting and rewarding, allowing me to work on diverse
                projects and continuously expand my skill set. I specialize in Flutter development, creating
                cross-platform applications that work seamlessly on both Android and iOS.
              </p>
              <p className="text-gray-300 leading-relaxed">
                In addition to my expertise in Flutter, I have a solid foundation in web technologies. I'm proficient in
                WordPress development, and I also have knowledge of HTML, CSS, and React, enabling me to work on
                full-stack projects when needed.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I'm always eager to learn new technologies and improve my skills. My goal is to create innovative,
                user-friendly applications that solve real-world problems and provide value to users.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-8 border border-white/10">
              <h3 className="font-space-grotesk font-semibold text-xl mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Mobile Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Flutter</span>
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Dart</span>
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Android</span>
                    <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">iOS</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">WordPress</span>
                    <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">HTML</span>
                    <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">CSS</span>
                    <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">React</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Tools & Others</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">Git</span>
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">Firebase</span>
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      RESTful APIs
                    </span>
                    <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                      UI/UX Design
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

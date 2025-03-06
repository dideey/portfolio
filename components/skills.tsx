import { Code, Database, Layout, Palette, Server, Smartphone } from "lucide-react"

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002D62] mb-16">My Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#002D62] text-white rounded-lg flex items-center justify-center mb-4">
              <Layout size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002D62]">Frontend Development</h3>
            <p className="text-gray-700 mb-4">
              Creating responsive and interactive user interfaces with modern frameworks.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">React</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Next.js</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">HTML5</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">CSS3</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">JavaScript</span>
            </div>
          </div>

          {/* Backend Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#002D62] text-white rounded-lg flex items-center justify-center mb-4">
              <Server size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002D62]">Backend Development</h3>
            <p className="text-gray-700 mb-4">Building robust server-side applications and APIs.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Node.js</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Django</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">REST APIs</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Flask</span>
            </div>
          </div>

          {/* Database */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#002D62] text-white rounded-lg flex items-center justify-center mb-4">
              <Database size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002D62]">Database</h3>
            <p className="text-gray-700 mb-4">Designing and managing efficient database systems.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">MongoDB</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">PostgreSQL</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">MySQL</span>

            </div>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#002D62] text-white rounded-lg flex items-center justify-center mb-4">
              <Palette size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002D62]">UI/UX Design</h3>
            <p className="text-gray-700 mb-4">Creating intuitive and visually appealing user experiences.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Figma</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Sketch</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Wireframing</span>
            </div>
          </div>

          {/* IOT Development */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#002D62] text-white rounded-lg flex items-center justify-center mb-4">
              <Smartphone size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002D62]">IOT Development</h3>
            <p className="text-gray-700 mb-4">Building robust hardware solutions.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">ESP-32 & Arduino</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Data Visualization</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Networking and Communication Protocols</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">AWS IOT</span>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-[#002D62] text-white rounded-lg flex items-center justify-center mb-4">
              <Code size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-[#002D62]">Other Skills</h3>
            <p className="text-gray-700 mb-4">Additional technologies and methodologies I work with.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Git</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Nginx</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">CI/CD</span>
              <span className="px-3 py-1 bg-gray-100 text-[#002D62] text-sm rounded-full">Agile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


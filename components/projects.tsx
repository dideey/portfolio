import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002D62] mb-16">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image src="/takatecha.jpeg?height=500&width=499" alt="Project 1" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Smart Waste managment Website</h3>
              <p className="text-gray-700 mb-4">
                A full-featured platform for efficient waste management, integrating real-time tracking, analytics, and alerts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Django</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">REST API</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">PostgreSQL</span>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/dideey/TakaTecha" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                </a>
                <a href="https://drive.google.com/file/d/1MJdIwY9Wwcp2uaAZXptOOaDpDiC8fV-U/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-[#002D62] text-white hover:bg-[#003a80]">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image src="/res.webp?height=200&width=400" alt="Project 2" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Wajibika Api</h3>
              <p className="text-gray-700 mb-4">
                An API for promoting acountability, throught gathering all leader scandles
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Django</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Django-restframework</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Postman</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">PostgreSQL</span>
              </div>
              <div className="flex gap-3">
                <a href="https://github.com/dideey/BradTech" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                </a>
                <a href="https://drive.google.com/file/d/105ys2h6_Kny_N0n7DMd7WA6BNh8fdkHk/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-[#002D62] text-white hover:bg-[#003a80]">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image src="/port.jpg?height=200&width=400" alt="Project 3" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-[#002D62]">Portfolio Website</h3>
              <p className="text-gray-700 mb-4">
                A modern, responsive portfolio website to showcase projects and skills.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Next.js</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-100 text-[#002D62] text-xs rounded-full">Framer Motion</span>
              </div>
              <div className="flex gap-3">
                <a>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#002D62] text-[#002D62] hover:bg-[#002D62] hover:text-white"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                </a>
                <a>
                <Button size="sm" className="bg-[#002D62] text-white hover:bg-[#003a80]">
                  <ExternalLink size={16} className="mr-2" />
                  Live Demo
                </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#002D62] text-white hover:bg-[#003a80]" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}


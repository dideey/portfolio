import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-[#002D62] text-white py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hello, I'm <span className="text-white">Bradley Ndwaru</span>
        </h1>
        <h2 className="text-xl md:text-2xl mb-8">Full-stack Developer & IOT Engineer</h2>
        <p className="text-lg max-w-2xl mb-10">
          I create robust, responsive websites with modern technologies that help businesses achieve their goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#projects">
          <Button className="bg-white text-[#002D62] hover:bg-gray-200" size="lg">
            View My Work
          </Button>
          </a>
          <a href="#contact">
          <Button variant="outline" className="border-white text-white hover:bg-[#003a80]" size="lg">
            Contact Me
          </Button>
          </a>
        </div>
        <a href="#about" className="mt-16 animate-bounce inline-block" aria-label="Scroll down to about section">
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  )
}


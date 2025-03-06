import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#002D62] mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#002D62]">
              <Image src="/me1.jpg?height=320&width=320" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-[#002D62]">Who I Am</h3>
            <p className="text-gray-700 mb-6">
              I'm a passionate problem solver with a strong focus on creating intuitive and engaging user experiences.
              With a background in IOT and programming, I bring a unique perspective to every project I work on.
            </p>
            <p className="text-gray-700 mb-6">
              I specialize in building modern web applications and smart IOT solutions using React, Django, and other cutting-edge
              technologies. My goal is to create solutions that not only look great but also perform exceptionally well.
            
            </p>
            <p className="text-gray-700 mb-6">
              I'm always eager to learn new things and take on new challenges. I'm constantly pushing myself to improve
              my skills and stay up-to-date with the latest trends in web development.
            </p>
            <p className="text-gray-700 mb-6">
              When I'm not coding, you can find me exploring the great outdoors, playing basketball, or watching films.

            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-[#002D62]">Location</h4>
                <p className="text-gray-700">Nairobi, Kenya</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#002D62]">Email</h4>
                <p className="text-gray-700">ndwarubradley@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#002D62]">Experience</h4>
                <p className="text-gray-700">1.5+ Years</p>
              </div>
              <div>
                <h4 className="font-semibold text-[#002D62]">Availability</h4>
                <p className="text-gray-700">Freelance/Full-time/Contract</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


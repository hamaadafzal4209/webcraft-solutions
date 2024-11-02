'use client'

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    image: "https://cdn-icons-png.flaticon.com/128/3135/3135768.png",
    bio: "Specializes in frontend development and UI/UX design.",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    image: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    bio: "Expert in project management and client communications.",
  },
  {
    name: "Alice Johnson",
    role: "Digital Marketer",
    image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    bio: "Focuses on SEO and social media strategies.",
  },
  {
    name: "Mike Lee",
    role: "Designer",
    image: "https://cdn-icons-png.flaticon.com/128/9408/9408175.png",
    bio: "Specializes in branding and graphic design.",
  },
]

export default function TeamSection() {
  return (
    <section className="w-full py-16 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-400">
            The professionals dedicated to bringing your vision to life.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="relative rounded-lg bg-slate-800 border-2 border-gray-700 p-6 text-center shadow-lg group perspective"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                <motion.div
                  className="h-full w-full rounded-full overflow-hidden bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out transform"
                  />
                </motion.div>
              </motion.div>

              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>

              {/* Dark Mode Card Overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-600 bg-opacity-95 text-center transform transition-all duration-500 ease-in-out origin-center group-hover:scale-y-100 scale-y-0 rounded-lg"
              >
                <p className="text-sm text-gray-300 mb-4 px-2">{member.bio}</p>
              </motion.div>

              {/* Shadow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-transparent shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ filter: 'blur(10px)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

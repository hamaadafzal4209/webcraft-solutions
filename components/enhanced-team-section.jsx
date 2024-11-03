'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    image: "https://cdn-icons-png.flaticon.com/128/3135/3135768.png",
    bio: "Specializes in frontend development and UI/UX design.",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    projects: ["E-commerce Platform", "Social Media Dashboard"],
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    image: "https://cdn-icons-png.flaticon.com/128/2202/2202112.png",
    bio: "Expert in project management and client communications.",
    skills: ["Agile Methodologies", "Risk Management", "Stakeholder Communication"],
    projects: ["Corporate Rebranding", "Mobile App Launch"],
  },
  {
    name: "Alice Johnson",
    role: "Digital Marketer",
    image: "https://cdn-icons-png.flaticon.com/128/6997/6997662.png",
    bio: "Focuses on SEO and social media strategies.",
    skills: ["SEO", "Content Marketing", "Google Analytics"],
    projects: ["Brand Awareness Campaign", "Lead Generation Strategy"],
  },
  {
    name: "Mike Lee",
    role: "Designer",
    image: "https://cdn-icons-png.flaticon.com/128/9408/9408175.png",
    bio: "Specializes in branding and graphic design.",
    skills: ["Adobe Creative Suite", "UI/UX Design", "Brand Identity"],
    projects: ["Logo Redesign", "Product Packaging"],
  },
]

export function EnhancedTeamSection() {
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    (<section className="w-full py-16 bg-gray-900 text-gray-100">
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
              className="relative rounded-lg bg-slate-800 border-2 border-gray-700 p-6 text-center shadow-lg group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}>
              <motion.div
                className="relative h-32 w-32 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500">
                <motion.div
                  className="h-full w-full rounded-full overflow-hidden bg-gray-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out transform" />
                </motion.div>
              </motion.div>

              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-400 mb-2">{member.role}</p>
              <p className="text-sm text-gray-300 mb-4">{member.bio}</p>

              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => setSelectedMember(member)}>
                <Info className="h-4 w-4" />
                <span className="sr-only">More info about {member.name}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedMember && (
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="sm:max-w-[425px] bg-slate-900 text-gray-100 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedMember.name}</DialogTitle>
                <DialogDescription className="text-gray-400">{selectedMember.role}</DialogDescription>
              </DialogHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Bio</h4>
                  <p className="text-gray-300">{selectedMember.bio}</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Projects</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {selectedMember.projects.map((project) => (
                      <li key={project}>{project}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>)
  );
}
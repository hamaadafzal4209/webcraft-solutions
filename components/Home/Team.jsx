"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { teamData } from "@/constants/teamData";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => setSelectedMember(member);
  const closeModal = () => setSelectedMember(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div className="container-section">
      <SectionHeader title="Our expert crew" text="Meet the leadership team" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {teamData.map((member) => {
          return (
            <div
              key={member.id}
              className="relative group rounded-md overflow-hidden shadow-lg transition-all duration-300 ease-in-out"
            >
              <div>
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover transition duration-300"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-indigo-700/80 via-purple-600/50 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-full">
                  <div className="p-4 text-left w-full">
                    <h3 className="text-white text-lg font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{member.position}</p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(member)}
                  className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition border-none outline-none"
                >
                  <FaArrowUpRightFromSquare className="text-xl" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 max-h-[80vh] overflow-y-auto rounded-lg overflow-hidden shadow-xl w-11/12 max-w-3xl p-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white text-gray-800 hover:bg-gray-300 hover:text-black font-extrabold"
              >
                ✕
              </Button>
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedMember.imageUrl}
                  alt={selectedMember.name}
                  className="h-80 mx-auto md:w-1/3 rounded-md object-cover"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {selectedMember.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {selectedMember.position}
                  </p>
                  <p className="text-gray-300 text-sm mb-4">
                    {selectedMember.bio}
                  </p>
                  <p className="text-gray-400 text-sm whitespace-pre-line">
                    {selectedMember.description}
                  </p>
                  <div className="flex gap-4 mt-4">
                    {selectedMember.socialLinks.linkedin && (
                      <a
                        href={selectedMember.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <FaLinkedin size={20} />
                      </a>
                    )}
                    {selectedMember.socialLinks.twitter && (
                      <a
                        href={selectedMember.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <FaTwitter size={20} />
                      </a>
                    )}
                    {selectedMember.socialLinks.github && (
                      <a
                        href={selectedMember.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Team;

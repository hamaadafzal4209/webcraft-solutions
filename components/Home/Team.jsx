"use client";

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import SectionHeader from "../common/SectionHeader";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { teamData } from "@/constants/teamData";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { Fade } from "react-awesome-reveal";

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
        {teamData.map((member, index) => {
          return (
            <Fade
              key={member.id}
              triggerOnce
              direction="up"
              duration={800}
              delay={index * 100}
            >
              <div className="relative group rounded-md overflow-hidden shadow-lg transition-all duration-300 ease-in-out">
                <div>
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover transition duration-300 group"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-700/80 via-purple-600/50 to-pink-500/40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end group-hover:bg-transparent">
                    <div className="p-4 text-left w-full">
                      <h3 className="text-white text-lg font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-gray-300 text-sm">{member.position}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => openModal(member)}
                    href="#"
                    className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center arrow"
                    style={{ "--clr": "#7808d0" }}
                  >
                    <span className="arrow__icon-wrapper">
                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow__icon-svg"
                        width="12"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>

                      <svg
                        viewBox="0 0 14 15"
                        fill="none"
                        width="12"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow__icon-svg arrow__icon-svg--copy"
                      >
                        <path
                          d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </Fade>
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

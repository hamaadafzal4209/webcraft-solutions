"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import SectionHeader from "../common/SectionHeader";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { teamData } from "@/constants/teamData";

const Team = () => {
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
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-indigo-700 via-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-0 translate-y-full">
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
    </div>
  );
};

export default Team;

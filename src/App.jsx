"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

// const App = () => {

// }

export default function App() {
  const [message, setMessage] = useState("");

  const projects = [
    {
      name: "IntelliPrep",
      stack: [".NET Core", "Angular 20", "Semantic Kernel"],
      description:
        "A PoC app for AI-powered interview preparation using .NET Core backend and Angular frontend integrated with LLMs.",
      github: "#",
      live: "#",
    },
    {
      name: "InsightGPT",
      stack: [".NET", "Blazor", "Azure", "OpenAI APIs"],
      description:
        "Internal multi-LLM chatbot platform with Azure AD authentication and role-based access control.",
      github: "#",
      live: "#",
    },
    {
      name: "Processor OS Search",
      stack: [".NET", "Blazor", "SQL", "MiniExcel"],
      description:
        "Automated Excel-driven workflows and integrated AI-powered document search using InsightGPT API.",
      github: "#",
      live: "#",
    },
    {
      name: "Vendor Ops Dashboard",
      stack: ["Blazor", "SQL Server", "DataTables.js"],
      description:
        "Comprehensive dashboard for staff management and vendor operations with REST API integration.",
      github: "#",
      live: "#",
    },
  ];

  const skills = [
    ".NET Core",
    "Blazor",
    "C#",
    "SQL Server",
    "Angular",
    "JavaScript",
    "REST APIs",
    "Azure",
    "Git",
  ];

  const certificates = [
    "AZ-203: Azure Developer Associate",
    "DP-203: Azure Data Engineer Associate",
    "GitHub Foundations",
  ];
  return (
    <div className="bg-gray-900 text-white font-mono scroll-smooth break-words">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-purple-400"
        >
          Rounak Jaiswal
        </motion.h1>
        <p className="mt-4 text-xl text-blue-300">
          .NET Full-Stack Developer | 3+ Years Experience | Azure Certified
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#projects"
            className="bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg shadow-lg"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg shadow-lg"
          >
            Download Resume
          </a>
        </div>
        <ChevronDown
          className="mt-12 animate-bounce text-purple-400"
          size={32}
        />
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-lg text-gray-300">
          .NET Full-Stack Developer with over 3 years of industry experience in
          building scalable web applications and optimizing software
          performance. Skilled in backend and frontend development, database
          management, and API integration. Proven ability to deliver
          high-quality solutions while collaborating with cross-functional teams
          and adapting quickly to emerging technologies.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-bold text-purple-400">{proj.name}</h3>
              <p className="mt-2 text-gray-300">{proj.description}</p>
              <div className="mt-3 text-sm text-blue-300">
                {proj.stack.join(", ")}
              </div>
              <div className="mt-4 flex gap-3">
                <a href={proj.github} className="text-blue-400 hover:underline">
                  GitHub
                </a>
                <a href={proj.live} className="text-green-400 hover:underline">
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.span
              key={idx}
              whileHover={{ scale: 1.1 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-10">Certificates</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-700 p-4 rounded-xl shadow-lg text-blue-300"
            >
              {cert}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <div className="bg-gray-800 p-6 rounded-xl max-w-xl mx-auto">
          <div className="font-mono text-green-400 text-left mb-4">
            &gt; Enter your message:
          </div>
          <textarea
            className="w-full p-3 rounded bg-gray-900 text-white outline-none"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-lg">
            Send
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <a href="mailto:rounakkjaiswal@gmail.com">
            <FaEnvelope size={28} />
          </a>
          <a href="https://linkedin.com/in/rounakj" target="_blank">
            <FaLinkedin size={28} />
          </a>
          <a href="https://github.com/rounakj29" target="_blank">
            <FaGithub size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}

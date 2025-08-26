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
      live: "https://intelli-prep.netlify.app/",
    },
  ];

  const skills = [
    ".NET Framework",
    ".NET Core",
    "C#",
    "Blazor",
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "SQL Server",
    "RESTful API Design",
    "Azure",
    "Cosmos DB",
    "Git",
    "Agile Methodologies",
    "Problem-solving",
    "Team Collaboration",
  ];

  const certificates = [
    "GitHub Foundations (02/2025 – 02/2028)",
    "DP-203: Microsoft Certified Azure Data Engineer Associate (04/2023 – 04/2024)",
    "AZ-203: Microsoft Certified Azure Developer Associate (11/2021 – 11/2023)",
  ];

  const experience = [
    {
      role: "Cloud Engineer II",
      company: "Insight Enterprises",
      period: "04/2023 – Present",
      projects: [
        {
          name: "InsightGPT",
          tech: [".NET", "Blazor", "Azure", "OpenAI/LLM APIs", "Semantic Kernel", "Cosmos"],
          bullets: [
            "Built a multi-LLM chatbot platform with Azure AD auth and role-based access.",
            "Implemented region-specific content, temperature tuning, and code/chart generation.",
            "Developed admin portal for models, prompts, and data sources management.",
          ],
        },
        {
          name: "Processor OS Search",
          tech: [".NET", "Blazor", "SQL Server", "MiniExcel", "JSInterop", "REST APIs", "GitHub CI/CD"],
          bullets: [
            "Automated Excel workflows with template selection and dynamic output generation.",
            "Designed SQL backend and integrated InsightGPT for AI-powered document search.",
            "Merged data from Databricks (via Smart App), Freshdesk, and Excel for unified reports.",
          ],
        },
      ],
    },
    {
      role: "Cloud Engineer II",
      company: "Hanu Software Solutions",
      period: "06/2022 – 04/2023",
      projects: [
        {
          name: "Staff & Vendor Operations Dashboard",
          tech: ["ASP.NET Web API", "Blazor", "Razor Pages", "SQL Server", "Entity Framework", "DataTables.js"],
          bullets: [
            "Developed internal dashboards and B2B service layer for vendor offers via REST APIs.",
            "Migrated legacy SQL to a new relational schema to improve performance.",
            "Refactored WPF B2C desktop app and evolved platform to hybrid B2B + B2C architecture.",
          ],
        },
      ],
    },
    {
      role: "Cloud Engineer Intern",
      company: "Hanu Software Solutions",
      period: "09/2021 – 05/2022",
      projects: [
        {
          name: "General Development & Support",
          tech: ["Azure", ".NET"],
          bullets: [
            "Contributed to cloud-based solutions and cross-functional delivery of production features.",
          ],
        },
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology, Computer Science",
      school: "REVA University",
      period: "08/2018 – 11/2022",
      gpa: "8.3 GPA",
    },
  ];
   const projectGridCols =
    projects.length === 1
      ? "grid-cols-1"
      : projects.length === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
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
            href="/public/resume.pdf"
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
     <div className={`grid ${projectGridCols} gap-8 max-w-6xl mx-auto place-items-center`}>
            {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
      className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition w-full max-w-md mx-auto"
            >
              <h3 className="text-xl font-bold text-purple-400">{proj.name}</h3>
              <p className="mt-2 text-gray-300">{proj.description}</p>
              <div className="mt-3 text-sm text-blue-300">
                {proj.stack.join(", ")}
              </div>
             <div
                className={`mt-4 flex gap-3 ${proj.github === "#" && proj.live === "#" ? "hidden" : ""}`}
              >
                <a href={proj.github} className={`text-blue-400 hover:underline ${proj.github === "#" ? "hidden" : ""}`}>
                  GitHub
                </a>
                <a href={proj.live} className={`text-green-400 hover:underline ${proj.live === "#" ? "hidden" : ""}`}>
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-5xl mx-auto space-y-10">
          {experience.map((job, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-purple-400">{job.role}</h3>
                  <div className="text-blue-300">{job.company}</div>
                </div>
                <div className="text-gray-400">{job.period}</div>
              </div>
              <div className="mt-4 space-y-6">
                {job.projects.map((p, pIdx) => (
                  <div key={pIdx}>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-blue-300">{p.tech.join(", ")}</div>
                    <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                      {p.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
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

      {/* Education */}
      <section id="education" className="py-20 px-6 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-10">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((ed, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-700 p-6 rounded-2xl shadow-lg"
            >
              <div className="text-2xl font-semibold text-purple-400">{ed.degree}</div>
              <div className="text-blue-300">{ed.school}</div>
              <div className="text-gray-400 mt-1">{ed.period} • {ed.gpa}</div>
            </motion.div>
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
        <div className="bg-gray-800 p-6 rounded-xl max-w-xl mx-auto" hidden>
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
        {/* Footer */}
        <footer className="py-6 text-center text-green-400 bg-gray-900">
          Built with React & Tailwind CSS | &copy; {new Date().getFullYear()} Rounak Jaiswal
        </footer>
    </div>
  );
}

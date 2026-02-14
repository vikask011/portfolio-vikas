"use client";

import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

// Importing images from your local folder
import donationImg from "./assests/donation.png";
import skillbridgeImg from "./assests/skillbridge.png";
import quizImg from "./assests/quiz.png";
import rentImg from "./assests/rent.png";
import spaceImg from "./assests/space.png";
import aiinterviewImg from "./assests/aiinterview.png";

const getImgSrc = (imgImport: any) => {
  if (typeof imgImport === "string") return imgImport;
  return imgImport?.src || imgImport?.default || "";
};

const projects = [
  {
    title: "AI Interview Simulator",
    description:
      "An intelligent platform that conducts mock technical interviews using AI. It provides real-time feedback and performance analysis to help candidates sharpen their skills.",
    tech: ["Next.js", "Gemini API", "Tailwind", "Clerk"],
    category: "Artificial Intelligence",
    link: "https://aiinterviewsimulator-fmm9.vercel.app/",
    github: "https://github.com/vikask011",
    image: getImgSrc(aiinterviewImg),
  },
  {
    title: "Rent-My-Space",
    description:
      "A marketplace for unused spaces allowing users to list properties for short-term rentals with an integrated secure booking and calendar system.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    category: "Booking System",
    link: "https://rent-my-space-541k.vercel.app/",
    github: "https://github.com/vikask011",
    image: getImgSrc(rentImg),
  },
  {
    title: "Adaptive Quiz",
    description:
      "A smart testing platform that utilizes a dynamic difficulty algorithm. The quiz adjusts its complexity in real-time based on the user's accuracy.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "MERN Stack",
    link: "https://quiz-jmux.vercel.app",
    github: "https://github.com/vikask011/quiz",
    image: getImgSrc(quizImg),
  },
  {
    title: "SparkNate",
    description:
      "A curated crowdfunding platform focused on transparency. It ensures every contribution reaches verified causes through a robust verification system.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
    link: "https://sparknate-donation-qpsd.vercel.app/",
    github: "https://github.com/vikask011",
    image: getImgSrc(donationImg),
  },
  {
    title: "Space Explorer",
    description:
      "An interactive 3D astronomy application powered by Three.js. Users can explore celestial bodies and get AI-generated insights about space topics.",
    tech: ["React", "Three.js", "AI API", "Node.js"],
    category: "AI & 3D",
    link: "https://space-explorer-ltze.vercel.app/",
    github: "https://github.com/vikask011",
    image: getImgSrc(spaceImg),
  },
  {
    title: "SkillBridge",
    description:
      "A P2P skill-sharing ecosystem using a gamified points system. Features Google Meet integration for seamless live learning sessions between users.",
    tech: ["React", "Node.js", "MongoDB", "Google API"],
    category: "EdTech",
    link: "https://skillbridge-rust.vercel.app/",
    github: "https://github.com/vikask011",
    image: getImgSrc(skillbridgeImg),
  },
];

// ── Variants ────────────────────────────────────────────────────────────────

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

// ── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        boxShadow:
          "0 20px 40px -8px rgba(59,130,246,0.15), 0 8px 16px -4px rgba(59,130,246,0.08)",
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col"
      style={{ willChange: "transform" }}
    >
      {/* Image with overlay shimmer on hover */}
      <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
        <motion.img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-fill"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        {/* Subtle blue tint overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/8 transition-colors duration-300 pointer-events-none"
        />
      </div>

      {/* Category tag */}
      <div className="px-6 pt-5">
        <motion.span
          className="inline-block bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-blue-100 dark:border-blue-500/20"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          {project.category}
        </motion.span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6 mt-auto">
          {project.tech.map((tech, i) => (
            <motion.span
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-[11px] font-medium px-2.5 py-1 rounded-md border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: 0.05 * i }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgb(239 246 255)",
                borderColor: "rgb(191 219 254)",
                color: "rgb(37 99 235)",
                transition: { duration: 0.15 },
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
          >
            Live Demo
            <motion.span
              whileHover={{ rotate: -15, scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <ExternalLink size={14} />
            </motion.span>
          </motion.a>

          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-500 dark:text-gray-400"
            whileHover={{
              scale: 1.2,
              color: "#111827",
              transition: { duration: 0.2 },
            }}
          >
            <Github size={18} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export default function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const gridRef = useRef(null);
  const ctaRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const gridInView = useInView(gridRef, { once: true, amount: 0.1 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.4 });

  // Parallax blobs
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 bg-gray-50 dark:bg-gray-950 transition-colors overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        aria-hidden
        style={{ y: blob1Y }}
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-blue-100 dark:bg-blue-900/20 rounded-full opacity-40 blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ y: blob2Y }}
        className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-100 dark:bg-indigo-900/20 rounded-full opacity-30 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Featured{" "}
            <span className="text-blue-500">Projects</span>
          </h2>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-blue-500 rounded-full mb-5"
            initial={{ width: 0 }}
            animate={headingInView ? { width: 72 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl"
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A selection of my recent work building scalable web applications
            and interactive AI experiences.
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={gridContainerVariants}
          initial="hidden"
          animate={gridInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* CTA block */}
        <motion.div
          ref={ctaRef}
          variants={ctaVariants}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="mt-20 text-center bg-blue-500/5 rounded-3xl p-12 border border-blue-500/10"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Want to discuss a project?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            I'm currently looking for new opportunities and collaborations.
          </p>
          <motion.a
            href="https://github.com/vikask011"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-10 py-4 rounded-xl font-bold shadow-xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 24px -4px rgba(59,130,246,0.35)",
              transition: { duration: 0.22 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.span
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Github size={20} />
            </motion.span>
            View All Work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
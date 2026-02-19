"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
];

const headingVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.15 },
  }),
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.82, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function SkillCard({ skill }: { skill: { name: string; icon: string } }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.08,
        y: -6,
        boxShadow: "0 12px 32px -4px rgba(99,102,241,0.25), 0 4px 12px -2px rgba(99,102,241,0.15)",
        transition: { duration: 0.22, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.97 }}
      className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 border border-transparent dark:border-gray-800 rounded-xl shadow-sm dark:shadow-none cursor-default"
      style={{ willChange: "transform" }}
    >
      <motion.div
        className="w-12 h-12 mb-3 flex items-center justify-center"
        whileHover={{ rotate: [0, -8, 8, -4, 4, 0], transition: { duration: 0.5 } }}
      >
        {/* ✅ White rounded bg in dark mode so black icons (Express, Next.js, GitHub) stay visible */}
        <div className="w-12 h-12 flex items-center justify-center rounded-lg dark:bg-white dark:p-1.5">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = "none";
              const fallback = img.nextSibling as HTMLElement;
              if (fallback) fallback.style.display = "flex";
            }}
          />
          <div className="hidden w-full h-full bg-indigo-600 rounded-lg items-center justify-center text-white font-bold text-lg">
            {skill.name.charAt(0)}
          </div>
        </div>
      </motion.div>

      <span className="font-medium text-gray-700 dark:text-gray-300 text-sm">{skill.name}</span>

      <motion.div
        className="h-0.5 bg-indigo-400 rounded-full mt-1"
        initial={{ width: 0 }}
        whileHover={{ width: "60%" }}
        transition={{ duration: 0.25 }}
      />
    </motion.div>
  );
}

function CategoryBlock({
  category,
  index,
}: {
  category: (typeof skillCategories)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={categoryVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          className="w-1 rounded-full bg-indigo-500"
          initial={{ height: 0 }}
          animate={inView ? { height: 28 } : { height: 0 }}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.1 }}
        />
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          {category.category}
        </h3>
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-5"
        variants={gridVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 bg-gray-50 dark:bg-black overflow-hidden"
    >
      <motion.div
        aria-hidden
        style={{ y: blob1Y }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-100 dark:bg-indigo-950 rounded-full opacity-40 dark:opacity-20 blur-3xl pointer-events-none"
      />
      <motion.div
        aria-hidden
        style={{ y: blob2Y }}
        className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-100 dark:bg-purple-950 rounded-full opacity-30 dark:opacity-20 blur-3xl pointer-events-none"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headingRef}
          variants={headingVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="mb-14"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Skills &amp; Expertise
          </h2>
          <motion.div
            className="mt-3 h-1 bg-indigo-500 rounded-full"
            initial={{ width: 0 }}
            animate={headingInView ? { width: 64 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          />
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category, i) => (
            <CategoryBlock key={category.category} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}